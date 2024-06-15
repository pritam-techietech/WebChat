import { RequestHandler } from "express";
import createHttpError from "http-errors";
import UserModel from "../models/user.model";
import bcrypt from "bcrypt";
import generatetokenSetCookie from "../util/generateToken";
import { messageReqBodyInterface } from "../interface/messageReqBody.interface";

interface signupBody {
  username?: string;
  fullName?: string;
  password?: string;
  confirmPassword?: string;
  gender?: string;
}

export const getUsersForSidebar: RequestHandler<unknown, unknown, messageReqBodyInterface, unknown> = async (req, res, next) => {
  try {
    const {loggedInUserId} = req.body;
    const users = await UserModel.find({_id:{$ne:loggedInUserId}}).select("-password").exec(); // Get all users excepot the loggedin user
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const signup: RequestHandler<
  unknown,
  unknown,
  signupBody,
  unknown
> = async (req, res, next) => {
  try {
    const { username, fullName, password, confirmPassword, gender } = req.body;
    if (!username || !fullName || !password || !confirmPassword || !gender) {
      throw createHttpError(400, "Parameters missing");
    }
    if (password !== confirmPassword) {
      throw createHttpError(401, "password did not match. Try again...");
    }
    const existingUsername = await UserModel.findOne({
      username: username,
    }).exec();
    if (existingUsername) {
      throw createHttpError(409, "Please choose a different username");
    }
    const passwordHashed = await bcrypt.hash(password, 10);
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const newUser = await UserModel.create({
      username: username,
      fullName: fullName,
      password: passwordHashed,
      gender: gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    generatetokenSetCookie(newUser._id, res);
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

interface loginBody {
  username?: string;
  password?: string;
}
export const login: RequestHandler<
  unknown,
  unknown,
  loginBody,
  unknown
> = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw createHttpError(400, "Parameters missing");
    }
    const existingUser = await UserModel.findOne({
      username: username,
    }).exec();
    if (!existingUser) {
      throw createHttpError(401, "Invalid user Id");
    }
    const passwordMatch = await bcrypt.compare(password, existingUser.password);
    if (!passwordMatch) {
      throw createHttpError(401, "Incorrect password");
    }
    generatetokenSetCookie(existingUser._id, res);
    res.status(201).json(existingUser);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const logout: RequestHandler = (req, res, next) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const notFound: RequestHandler = (req, res) => {
  res.send("Not found!!!!");
};
