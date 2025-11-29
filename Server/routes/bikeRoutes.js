import express from 'express'
import { registerBike } from '../controllers/bikeController.js'

const bikeRouter=express.Router()

bikeRouter.post('/add-bike', registerBike)
bikeRouter.get('/test-bike',(req,res)=>{
    res.send('No problem with the routes')
})



export default bikeRouter;