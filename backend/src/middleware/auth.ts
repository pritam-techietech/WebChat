import { RequestHandler } from "express";
import createHttpError from "http-errors";
import env from "../util/validateEnv";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.model";
import { Types } from "mongoose";
import { messageReqBodyInterface } from "../interface/messageReqBody.interface";

interface JwtPayload {
  userId: Types.ObjectId;
}
export const requireAuth: RequestHandler<
  unknown,
  unknown,
  messageReqBodyInterface,
  unknown
> = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      throw createHttpError(401, "You are not logged in. (No token found)");
    }
    const decoded = jwt.verify(token, env.SESSION_SECRET) as JwtPayload;
    if (!decoded) {
      throw createHttpError(401, "unauthorized token found");
    }
    const user = await UserModel.findById(decoded.userId).select("-password");
    if (!user) {
      throw createHttpError(401, "user not found");
    }
    // req.body = {senderId : user._id};
    req.body.senderId = user._id;
    next();
  } catch (error) {
    console.error(error);
    next(error);
  }
};
