import express from "express";
import { pool } from '../database_connection_MSSQL.js'
const router = express.Router();




function callSP(sp, params){

    return new Promise( (res, rej) => {

        sql.connect(config, function (err) {
            if (err) rej(err);
            log('Connection success')
            var request = new sql.Request();
            request.query(`exec ${sp}`, function (err, recordset) {
                if (err) rej(err)
                // res.send(recordset);
                log('test')
                res( recordset );
            });
        });
    })
}

// // all routers in here are handling the req's that starts with 
// // http://localhost:5000/userController/getAllUsers
router.get('/getAllUsers',async (req, res) => {
    try {
        const result = await pool.request()
            .input('prmuserid', req.query.userid)
            .execute(`gymapp_getallusers`);
        const allGymUsers = result.recordsets;
        res.json(allGymUsers);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/getUser',async (req, res) => {
    const result = await pool.request()
            .input('prmuserid', req.query.userid)
            .execute(`gymapp_getallusers`);
        const allGymUsers = result.recordsets;
    res.send(allGymUsers);
});

// router.post('/addUser',async (req, res) => {
//     // console.log(users);
//     const { username, password } = req.body;
//     // const user = await addUser(username, password);
//     res.status(201).send(user);
// });


export default router;