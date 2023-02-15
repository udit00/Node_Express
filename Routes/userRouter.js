import express from "express";
import { pool } from '../database_connection_MSSQL.js'
import { callSP_Get } from "../Utils.js";
const router = express.Router();



// // all routers in here are handling the req's that starts with 
// // http://localhost:5000/User/getAllUsers
router.get('/getAllUsers', async (req, res) => {
    try {
        // const request = pool.request();
        //                request.input('prmuserid', req.query.userid);
        // const result = request.execute(`gymapp_getallusers`);
        var params = [];
        params.push('prmuserid');
        callSP_Get('gymapp_getallusers', params, req).then((resp) => {
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

router.get('getUser',async (req, res) => {
    try{
        const result = await pool.request()
            .input('prmuserid', req.query.userid)
            .execute(`gymapp_getuser`);
            
        const allGymUsers = result.recordsets;
        res.send(allGymUsers);
    }
    catch(error){
        res.send(error);
    }
    
});

// router.post('/addUser',async (req, res) => {
//     // console.log(users);
//     const { username, password } = req.body;
//     // const user = await addUser(username, password);
//     res.status(201).send(user);
// });


export default router;