import {Schema,model} from "mongoose";


const ReseedSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    raseedNo:{
        type: Number,
        required: true,
    },
    amount:{
        type: Number,
        required: true,
    },
    isPaid:{
        type: Boolean,
        required: true,
    }
},{timestamps: true});

export const RaseedModel= model("RaseedModel",ReseedSchema );