import jwt from 'jsonwebtoken';
import env from "./validateEnv";
import { Response } from 'express';
import { Types } from 'mongoose';

const generatetokenSetCookie = (userId:Types.ObjectId, res:Response)=>{
    const token = jwt.sign({userId}, env.SESSION_SECRET,{
        expiresIn: "15d"
    })
    res.cookie("jwt", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24 * 15,
        secure: env.MODE !== "development",
    });
}

export default generatetokenSetCookie;

