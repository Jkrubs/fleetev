import mongoose from "mongoose";

const bikeSchema= new mongoose.Schema({
    make:{type:String, required:true},
    model:{type:String, required:true},
    number_plate:{type:String, required:true, unique:true},
    gps_tracker:{type:String, required:true, unique:true},
    maintenance:{type:String, required:true },
    hired:{type:String, default:'Available' },
    rate:{type:Number, required:true },
    color:{type:String, required:true }

},{timestamps:true})

export const Bike = mongoose.model('Bike', bikeSchema)

