import type {Request,Response} from "express";
import {RaseedModel} from "../model/raseed.model.js";




const homeContent = async (req:Request,res:Response)=>{
    const data =await RaseedModel.find().limit(10).exec();
    res.status(200).json({message:"data fetched",data:data});
}

export {homeContent}