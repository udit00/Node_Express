import express from "express";
import { getResponse, log } from "../CommonResponse.js";
import { callSP_Get, callSP_Post } from "../Utils.js";
const router = express.Router();
// all routers in here are handling the req's that starts with 
// /Twitter

//http://localhost:5000/Twitter/Login
router.post('/Login', async (req, res) => {
    try { 
        var params = [];        
        params.push('username');
        params.push('password');
        log(req.query)
        log(req.body)
        callSP_Post('login_user', params, req).then((resp) => {
            res.send(getResponse(resp[0]));
        }).catch((reason)=> {
            res.send(reason);
        })
    } catch (error) {
        res.status(500).json(error);
    }
});

//http://localhost:5000/Twitter/Login
// router.get('/Login', async (req, res) => {
//     try {
//         var params = [];        
//         params.push('username');
//         params.push('password');
//         callSP_Get('login_user', params, req).then((resp) => {
//             res.send(getResponse(resp[0]));
//         }).catch((reason)=> {
//             res.send(reason);
//         })
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });


//http://localhost:5000/Twitter/GetPosts
router.get('/GetPosts', async (req, res) => {
    try { 
        var params = [];        
        params.push('userid');
        callSP_Get('get_posts', params, req).then((resp) => {
            res.send(getResponse(resp));
        }).catch((reason)=> {
            res.send(reason);
        })
    } catch (error) {
        res.status(500).json(error);
    }
});





export default router;