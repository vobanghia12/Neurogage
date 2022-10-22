import express from "express";
import { Event } from "./event.model";
import {Types} from 'mongoose';

export const eventRouter = express.Router();

interface ICreateEvent {
    userId: Types.ObjectId;
    eventId: string;
    timeStamp: string;
    description: string;
}

//retrieve all events
eventRouter.get("/", async (req, res) => {
    try {
        const events = await Event.find().sort({  timeStamp: -1 }).exec();
        res.json({ events });
    } catch (error) {
        console.log("could not query all events from db")
    }
});

//retrieve events by userId
eventRouter.get("/:userId", async (req, res) => {
    const userId = req.params.userId;
    try {
        const events = await Event.find({userId:userId}).sort({ timeStamp: -1 }).exec();
        res.json({ events });
    } catch (error) {
        console.log("could not query all events from db")
    }
});

//retrieve events by eventId
eventRouter.get("/:eventId", async (req, res) => {
    const eventId = req.params.eventId;
    try {
        const events = await Event.find({eventId:eventId}).sort({ timeStamp: -1 }).exec();
        res.json({ events });
    } catch (error) {
        console.log("could not query all events from db")
    }
});

//creates and pushed object
eventRouter.post("/", async (req, res) => {
    try {
        const { userId, description } = req.body as ICreateEvent;
        const event = new Event({
            userId,
            timeStamp: new Date(),
            description
        });

        console.log(event);

        event.save();

        res.json({ event });
    } catch (error) {
        console.log("couldnt ")
        console.log(error);
    }

});
