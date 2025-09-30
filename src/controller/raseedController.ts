
import type {Request,Response} from "express";
import {RaseedModel} from "../model/raseed.model.js";

interface RaseedType  {
    name: string;
    invoiceNo:number
    amount:number;
    isPaid:boolean;

}

const addContent = async(req:Request,res:Response)=>{
    const data:RaseedType = req.body;
    if (!data){
        res.status(400).json({message:"data is required"});
        return;
    }

    const response=   await RaseedModel.create({
        name:data.name,
        invoiceNo:data.invoiceNo,
        amount:data.amount,
        isPaid:data.isPaid
    })
    if (!response) {
        res.status(505).json({message:"Something went wrong"});
        return;
    }
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
        if (!findData){
            res.status(404).json({message:"no data found"});
            return;
        }
        res.status(200).json({message:"successfully updated",data:findData});
}

const deleteContent = async(req:Request,res:Response)=>{
    const id = req.params.id;
    const response = await RaseedModel.deleteOne({_id:id});
    if (!response) {
        res.status(404).json({message:"no data found"});
        return;
    }
    res.status(200).json({message:"successfully deleted",data:response});
}

const searchContent = async(req:Request,res:Response)=>{
    const value = req.query.q;
    if (!value) {
        res.status(404).json({message:"Empty query"})
        return;
    }
    let query=[];
    // @ts-ignore
    if (!isNaN(value)){
    query.push({raseedNo:Number(value)})
    }else{
        query.push({name: { $regex: value, $options: 'i' } });

    }


    const response = await RaseedModel.find({$or:query}).limit(50);
    if (!response) {
        res.status(404).json({message:"no data found"});
        return;
    }

    res.status(200).json({message:value,data:response});

}


export {addContent,updateContent,deleteContent,searchContent}