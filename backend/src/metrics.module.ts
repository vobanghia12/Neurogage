import express from "express";
import { random } from "./utils";
import { User } from "./user.model";

const metricsRouter = express.Router();

// map structure to store metrics
const metrics: {[key:string]: number} = {};

// Route to get the current heartrate for the user
/* Proof of concept implementation: we store the last heartrate in a global map and reduce/increase by 1 every time
    In practice this would mean actually fetching this data from Apple Watches
*/
metricsRouter.get("/:user", async (req, res) => {
    const userName = req.params.user;
    console.log(userName);

    const users = await User.find({ name: userName }).exec();
    console.log(users);

    if (users.length < 1) {
        res.json({ message: "User not found" });
        return;
    }

    // if metrics don't exist yet, let's initialize it
    if (!metrics[userName]) {
        // simulate initialization of metric (aka talking to the apple watch)
        metrics[userName] = 60;
    } else {
        // simulate heartrate either increasing or decreasing
        const r = random(0, 4);
        const amount = r >= 2 ? r - 4 : r; 
        console.log(amount);
        metrics[userName] = metrics[userName] + amount;
    }
    res.json({ 
        name: users[0].name,
        baseline: users[0].baseline,
        isOnline: users[0].isOnline,
        heartRate: Math.round(metrics[userName] * 100) / 100
    });
});

export { metricsRouter };
