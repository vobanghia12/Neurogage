import express from "express";
import { Session } from "./session.model";

interface ICreateSession {
    userId: string;
    baseline: number;
    name: string;
    location: string;
    lighting: string;
    sound: string;
    notes: string;
}

export const sessionRouter = express.Router();

sessionRouter.get("/", async (req, res) => {
    const sessions = await Session.find().exec();
    res.json({ sessions });
});

sessionRouter.post("/", async (req, res) => {
    const { userId, baseline, name, location, lighting, sound, notes } = req.body as ICreateSession;
    
    const session = new Session({ 
        userId, 
        baseline, 
        name,
        location,
        lighting,
        sound,
        notes,
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