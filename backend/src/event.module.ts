import express from "express";
import { Event } from "./event.model";

export const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
    const users = await Event.find().exec();
    res.json({ users });
});