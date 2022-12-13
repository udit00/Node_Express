import express from 'express';
import bodyParser from 'body-parser';
import userController from './Routes/userController.js'
import loginController from './Routes/loginController.js'
import cors from 'cors';
const app=express();
const PORT=5000;

export function log(toLog){
    console.log(toLog);
}

app.use(bodyParser.json());
app.use(cors({
    origin: "*"
}))
app.use('/userController', userController);

// app.use('/loginController', loginController);

app.get('/', (req, res) => res.send('Hello from HomePage.'));

app.listen(PORT, ()=> console.log(`Server is running on =>
 http://localhost:${PORT}`));
