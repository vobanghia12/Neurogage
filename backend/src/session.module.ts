import express from "express";
import { Session } from "./session.model";

interface ICreateSession {
    userId: string;
    baseline: number;
}

export const sessionRouter = express.Router();

sessionRouter.get("/", async (req, res) => {
    const session = await Session.find().exec();
    res.json({ session });
});

sessionRouter.post("/", async (req, res) => {
    const { userId, baseline } = req.body as ICreateSession;
    
    const session = new Session({ 
        userId, 
        baseline, 
        timestamp: new Date().toString(), 
        feedback: "No feedback."
    });

    session.save((err) => {
        if (err) {
            res.json({ message: "Error fetching the session" })
        } else {
            res.json({ session });
        }
    })
});