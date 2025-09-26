
import type {Request,Response} from "express";
import {RaseedModel} from "../model/raseed.model.js";

interface RaseedType  {
    name: string;
    raseedNo:number;
    amount:number;
    isPaid:boolean;

}

const addContent = async(req:Request,res:Response)=>{
    const data:RaseedType = req.body;
    if (!data) res.status(400).json({message:"data is required"});

    const response=   await RaseedModel.create({
        name:data.name,
        raseedNo:data.raseedNo,
        amount:data.amount,
        isPaid:data.isPaid
    })
    if (!response) res.status(505).json({message:"Something went wrong"});
    res.status(200).json({message:"successfully added",data:response});
}


const updateContent = async(req:Request,res:Response)=>{
        const id = req.params.id;
        const data = req.body;

        const findData =await RaseedModel.updateOne({_id:id},{
            name:data.name,
            raseedNo:data.raseedNo,
            amount:data.amount,
            isPaid:data.isPaid
        });
        if (!findData) res.status(404).json({message:"no data found"});
        res.status(200).json({message:"successfully updated",data:findData});
}


export {addContent,updateContent}