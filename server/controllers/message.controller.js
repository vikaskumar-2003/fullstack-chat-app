import { Message } from "../models/message.model.js";
import { Conversation } from "../models/conversation.model.js";
import { asyncHandler } from "../utils/asyncHandles.utils.js";
import { errorHandler } from "../utils/errorHandler.utility.js";


export const sendMessageController = asyncHandler(async (req, res, next) => {
    
    const senderId = req.user._id
    const  receiverId = req.params.receiverId
    const message = req.body.message
    
    if (!senderId || !receiverId || !message) {
        return next(new errorHandler("All field are required",400))
    }

    let conversation = await Conversation.findOne({
        participants:{$all:[senderId, receiverIdId]}
    })

    if (!conversation) {
        conversation = await Conversation.create({
            participants:[senderId, receiverId],
        })
    }

    const newMessage = await Message.create({
         senderId,  //get all details using id
         receiverIdId,
         message
    })
    
    if (newMessage) {
        conversation.messages.push(newMessage._id)
        await conversation.save()
    }

    //socket.io implementation


    res.status(200).json({
        success: true,
        responseData:newMessage
    })


    
})

export const getMessage = asyncHandler(async (req, res, next) => {
    
    const myId = req.user._id
    const  otherParticipantedId = req.params.otherParticipantedId
    
    
    if (!myId || ! otherParticipantedId ) {
        return next(new errorHandler("All field are required",400))
    }

    let conversation = await Conversation.findOne({
        participants:{$all:[myId, otherParticipantedId]}
    })

    
   
   


    res.status(200).json({
        success: true,
        responseData:conversation//pagination
    })


    
})