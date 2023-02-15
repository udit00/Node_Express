import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './Routes/userRouter.js'
import loginRouter from './Routes/loginRouter.js'
import twitterRouter from './Routes/twitterRouter.js'
import cors from 'cors';
import router from './Routes/twitterRouter.js';
const app=express();
// const PORT=5000;

export function log(toLog){
    console.log(toLog);
}

app.use(bodyParser.json());
app.use(cors({
    origin: "*"
}))
app.use(`/User`, userRouter);

app.use('/Login', loginRouter);

app.use('/Twitter', twitterRouter);

app.get('/', (req, res) => res.send('Hello from HomePage.'));
// const PORT = "localhost:5000" 
const PORT = `http://localhost:5000`
// app.listen(PORT, ()=> console.log(`Server is running on =>
//  http://localhost:${PORT}`));
app.listen(PORT, ()=> console.log(`Server is running on =>
 http://localhost:${PORT}`));
