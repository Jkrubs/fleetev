import {Bike} from "../models/bikeModel.js";


export const registerBike=async(req, res)=>{
 try {
    const{make,model,number_plate,gps_tracker,maintenance,hired,rate,color}= req.body

    if(!make || !model|| !number_plate|| !gps_tracker|| !maintenance||!rate||!color){
        return res.json({success:false, message:'Please Fill in all the required fields'}) 
    }
    const bike = await Bike.create({make,model,number_plate,gps_tracker,maintenance,hired,rate,color})
    console.log(bike);
    
 } catch (error) {
    console.log('Check your database');
    res.json({success:false, message:error.message})
 }
}

