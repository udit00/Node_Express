import express from "express";
// import { validateUser } from '../database_connection_MYSQL';

const router = express.Router();


// all routers in here are handling the req's that starts with 
// /loginController

router.post('/validateUser',async (req, res) => {
    // console.log(users);
    const username = req.params.prmusername;
    const password = req.params.prmpassword;
    console.log(username);
    console.log(password);
    const user = await validateUser(username, password);
    res.send(user);
});




export default router;