
import express from "express";
import mongoose from "mongoose";
import { Event } from "./event.model";
import {Types, model, Schema} from 'mongoose';


export const eventRouter = express.Router();

interface ICreateEvent {
    userId: Types.ObjectId;
    eventId: string;
    timeStamp: string;
    description: string;
}



eventRouter.get("/", async (req, res) => {
    const events = await Event.find().exec();
    res.json({ events });
});

eventRouter.post("/::pushevent", async (req, res) => {
    const events = await Event.find().exec();
    res.json({ events });
});

eventRouter.post("/event", async (req, res) => {
    const { userId, eventId, description } = req.body as ICreateEvent;
    // const schema = new Mongoose.Schema({ name: 'string', size: 'string' });
    // const newEvent = Mongoose.model('Tank', yourSchema);

    const newData = new Event({
        userId,
        eventId,
        description
    })

    newData.save();
});

function handleError(err: any) {
    throw new Error("Function not implemented.");
}