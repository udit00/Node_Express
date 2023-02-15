import express from "express";
import { getResponse } from "../CommonResponse.js";
import { callSP_Get } from "../Utils.js";
// import { validateUser } from '../database_connection_MYSQL';

const router = express.Router();


// all routers in here are handling the req's that starts with 
// /Login

router.post('/validateUser',async (req, res) => {
    // console.log(users);
    const username = req.params.prmusername;
    const password = req.params.prmpassword;
    console.log(username);
    console.log(password);
    const user = await validateUser(username, password);
    res.send(user);
});

//http://localhost:5000/Login/getUsers
router.get('/getUsers', async (req, res) => {
    try { 
        // const request = pool.request();
        //                request.input('prmuserid', req.query.userid);
        // const result = request.execute(`gymapp_getallusers`);
        var params = [];        
        callSP_Get('get_all_users', params, req).then((resp) => {
            res.send(resp);
        }).catch((reason)=> {
            res.send(reason);
        })

        // const p = pool.request();
        //     p.input('prmuserid', req.query.userid);
        //     const result = await p.execute(`gymapp_getallusers`);
        // console.log(req.query[`prmuser`]);
        // const allGymUsers = result.recordsets;
        // res.json(allGymUsers);
    } catch (error) {
        res.status(500).json(error);
    }
});

//http://localhost:5000/Login/LoginUser
router.get('/LoginUser', async (req, res) => {
    try { 
        var params = [];        
        params.push('username');
        params.push('password');
        callSP_Get('login_user', params, req).then((resp) => {
            // res.send(res);
            res.send(getResponse(resp[0]));
        }).catch((reason)=> {
            res.send(reason);
        })
    } catch (error) {
        res.status(500).json(error);
    }
});



export default router;