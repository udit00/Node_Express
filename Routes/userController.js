import express from "express";
import { log } from "../CommonResponse.js";
import { pool } from '../database_connection_MSSQL.js'
import { errorHandling } from "../Error_Reponse.js";
const router = express.Router();




async function callSP(sp, params, req){
    
    return new Promise( async(res, rej) => {
        const request = pool.request()
                    for(let i = 0; i<params.length; i++){
                        request.input('prmuserid', req.query[`${params[i]}`]);
                    }
        try{
            const result = await request.execute(`${sp}`); 
            log(result);
            res(result.recordsets[0]);
        }
        catch(error){
            log(error);
            rej(errorHandling(error));
        }
        

        // sql.connect(config, function (err) {
        //     if (err) rej(err);
        //     log('Connection success')
        //     var request = new sql.Request();
        //     request.query(`exec ${sp}`, function (err, recordset) {
        //         if (err) rej(err)
        //         // res.send(recordset);
        //         log('test')
        //         res( recordset );
        //     });
        // });
    })
}

// // all routers in here are handling the req's that starts with 
// // http://localhost:5000/userController/getAllUsers
router.get('/getAllUsers', async (req, res) => {
    try {
        // const request = pool.request();
        //                request.input('prmuserid', req.query.userid);
        // const result = request.execute(`gymapp_getallusers`);
        var params = [];
        params.push('prmuserid');
        callSP('gymapp_getallusers', params, req).then((resp) => {
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