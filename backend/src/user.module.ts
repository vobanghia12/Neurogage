import express from "express";
import { User } from "./user.model";

export const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
    const users = await User.find({ isOnline: true }).exec();
    res.json({ users });
});

userRouter.get("/:id", async (req, res) => {
    const id = req.params.id;
    const user = await User.findById({ _id: id }).exec();
    res.json({ user });
});