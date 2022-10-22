import express from "express";
import { Event } from "./event.model";

export const eventRouter = express.Router();

eventRouter.get("/", async (req, res) => {
    const events = await Event.find().exec();
    res.json({ events });
});