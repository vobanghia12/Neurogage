import express from "express";
import { random } from "./utils";

const metricsRouter = express.Router();

// map structure to store metrics
const metrics: {[key:string]: number} = {};

// Route to get the current heartrate for the user
/* Proof of concept implementation: we store the last heartrate in a global map and reduce/increase by 1 every time
    In practice this would mean actually fetching this data from Apple Watches
*/
metricsRouter.get("/:user", async (req, res) => {
    const user  = req.params.user;

    // if metrics don't exist yet, let's initialize it
    if (!metrics[user]) {
        // simulate initialization of metric (aka talking to the apple watch)
        metrics[user] = 60;
        res.json({ heartRate: metrics[user] });
    } else {
        // simulate heartrate either increasing or decreasing
        const r = random(0, 4);
        const amount = r >= 2 ? r - 4 : r; 
        console.log(amount);
        metrics[user] = metrics[user] + amount;
        res.json({ heartRate: Math.round(metrics[user] * 100) / 100});
    }
});

export { metricsRouter };
