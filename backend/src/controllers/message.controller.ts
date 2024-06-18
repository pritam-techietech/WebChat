import { RequestHandler } from "express";
import createHttpError from "http-errors";
import ConversationModel from "../models/conversation.model";
import MessageModel from "../models/message.model";
import { messageReqBodyInterface } from "../interface/messageReqBody.interface";
import User from "../models/user.model";

// interface sendMessageParams {
//   receiverId?: string;
// }
export const sendMessage: RequestHandler<
  unknown,
  unknown,
  messageReqBodyInterface,
  unknown
> = async (req, res, next) => {
  try {
    const { message, senderId, receiverId } = req.body;
    // const { receiverId } = req.params;
    console.log("senderId : " + senderId );
    console.log("receiverId : " + receiverId);
    console.log("message : " + message);
    const user = await User.findById(receiverId).select("-password");
    if (!user) {
      throw createHttpError(401, "Other user not found");
    }
    let conversation = await ConversationModel.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      conversation = await ConversationModel.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = new MessageModel({
      senderId: senderId,
      receiverId: receiverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    // This will run one by one
    // await conversation.save();
    // await newMessage.save();

    // This will run parellely
    await Promise.all([conversation.save(), newMessage.save()]);
    res.status(200).json(newMessage);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const getMessages: RequestHandler<
  unknown,
  unknown,
  messageReqBodyInterface,
  unknown
> = async (req, res, next) => {
  try {
    const { senderId, receiverId } = req.body;
    const user = await User.findById(receiverId).select("-password");
    if (!user) {
      throw createHttpError(401, "Other user not found");
    }
    const conversation = await ConversationModel.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");
    if (!conversation) {
      res.status(200).json([]);
    }
    res.status(200).json(conversation?.messages);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
