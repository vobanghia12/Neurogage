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
    const sessions = await Session.find().sort({ timeStamp: -1 }).exec();
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
        timestamp: new Date(),
        feedback: "No feedback."
    });

    session.save((err) => {
        if (err) {
            console.log(err);
            res.json({ message: "Error creating the session" })
        } else {
            res.json({ session });
        }
    })
});


sessionRouter.get("/baseline/:userid", async (req, res) => {
    const userId = req.params.userid;

    const sessions = await Session.find({ userId: userId }).sort({ timestamp: -1 }).limit(1).exec();

    if (sessions.length < 1) {
        res.json({ message: "Not Found" });
        return;
    }

    res.json({ baseline: sessions[0].baseline });
});


sessionRouter.get("/baseline/:name", async (req, res) => {
    const name= req.params.name;

    const names = await Session.find({name:name});

    if (names.length < 1) {
        res.json({ message: "Not Found" });
        return;
    }

    res.json({ baseline: names });
});

