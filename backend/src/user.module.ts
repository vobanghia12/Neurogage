import express from "express";
import { User } from "./user.model";

interface ICreateSession {
    userId: string;
    baseline: number;
}

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

userRouter.post("/session", async (req, res) => {
    const { userId, baseline } = req.body as ICreateSession;
    const user = await User.findById({ _id: userId }).exec();

    if (!user) {
        res.json({ message: "Not found" });
        return;
    }

    user.sessions.push({ 
        baseline, 
        timestamp: new Date().toString(), 
        feedback: "No feedback."
    });

    

    res.json({ user });
});