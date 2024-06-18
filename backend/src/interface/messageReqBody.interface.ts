import { Types } from "mongoose";

export interface messageReqBodyInterface{
    senderId?: Types.ObjectId;
    receiverId?: Types.ObjectId;
    message?: string;
}