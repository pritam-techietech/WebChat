import { Types } from "mongoose";

export interface messageReqBodyInterface{
    loggedInUserId?: Types.ObjectId;
    oppositeUserId?: Types.ObjectId;
    message?: string;
}