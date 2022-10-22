import express from "express";
import { User } from "./user.model";

export const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
    const users = await User.find({ isOnline: true }).exec();
    res.json({ users });
});