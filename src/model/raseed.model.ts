import {Schema,model} from "mongoose";


const ReseedSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    invoiceNo:{
        type: Number,
        required: true,
    },
    amount:{
        type: Number,
        required: true,
    },
    address:{
        type: String,
    },
    isPaid:{
        type: Boolean,
        required: true,
    }
},{timestamps: true});

export const RaseedModel= model("RaseedModel",ReseedSchema );