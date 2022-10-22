import express from "express";
import { Session } from "./session.model";
import { random } from "./utils";

export const metricsRouter = express.Router();

// map structure to store metrics
const metrics: {[key:string]: number} = {};
const emotionMetrics: {[key:string]: any} = {};

// Route to get the current heartrate for the user
/* Proof of concept implementation: we store the last heartrate in a global map and reduce/increase by 1 every time
    In practice this would mean actually fetching this data from Apple Watches
*/
metricsRouter.get("/:user", async (req, res) => {
    const userName = req.params.user;
    // if metrics don't exist yet, let's initialize it
    if (!metrics[userName]) {
        // simulate initialization of metric (aka talking to the apple watch)
        const sessions = await Session.find({ userId: userName }).sort({ timestamp: -1 }).limit(1).exec();
        metrics[userName] = sessions.length < 1 ? 60 : sessions[0].baseline;
    } else {
        // simulate heartrate either increasing or decreasing
        const r = random(0, 2);
        //console.log("random ", r);
        const amount = r >= 1 ? r - 2 : r; 
        //console.log("amount ", amount);
        metrics[userName] = metrics[userName] + amount;
    }
    res.json({ heartRate: Math.round(metrics[userName] * 100) / 100 });
});

interface EmotionsPayload {
    emotions: any;
}

metricsRouter.post("/emotions/:user", async (req, res) => {
    const userName = req.params.user;
    const { emotions } = req.body as EmotionsPayload;
    emotionMetrics[userName] = emotions;
    res.json({ msg: "I worked" });
});

metricsRouter.get("/emotions/:user", async (req, res) => {
    const userName = req.params.user;
    const emotions = emotionMetrics[userName];
    res.json({ emotions });
});

