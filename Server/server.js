import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { CONNECT_DB } from './configs/db.js';
import bikeRouter from './routes/bikeRoutes.js';
import userRouter from './routes/userRoutes.js';


const app=express()

app.use(cors());
app.use(express.json())

const PORT=process.env.PORT || 5000

await CONNECT_DB()

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

app.get('/',(req, res)=>{
    res.send(`Server is running on port ${PORT}`)
})

//bike routes
app.use('/bikes',bikeRouter)
// user routes
app.use('/user', userRouter)