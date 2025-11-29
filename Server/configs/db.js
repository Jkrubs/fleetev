import mongoose from "mongoose";

export const CONNECT_DB=async()=>{
    
    try {
       mongoose.connection.on('connected',()=>{console.log("Database connected succesfully");
    })
    await mongoose.connect(`${process.env.MONGODB}/ev-fleet`) 
    } catch (error) {
        console.log(error.message);
        
    }
}