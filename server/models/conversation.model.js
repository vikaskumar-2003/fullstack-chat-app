import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
     
    participants: [
        {
            type: mongoose.Schema.Type.ObjectId,
            ref:"User"
        }
    ],
     messages: [
        {
            type: mongoose.Schema.Type.ObjectId,
            ref:"Message"
        }
    ]
   

}, { timestamps: true })

export const Conversation = mongoose.model("Conversation", conversationSchema)