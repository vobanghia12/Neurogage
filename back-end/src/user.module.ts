import express from "express";
import { User } from "./user.model";

export const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
    try {
        const users = await User.find({ isOnline: true }).exec();
        res.json({ users });
    } catch (error) {
        console.log("error checking online users")
    }
});

userRouter.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById({ _id: id }).exec();
        res.json({ user });
    } catch (error) {
        console.log("error getting user by id")
    }
});