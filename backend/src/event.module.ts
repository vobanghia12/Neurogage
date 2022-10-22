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
    try {
        const events = await Event.find().exec();
        res.json({ events });
    } catch (error) {
        console.log("could not query all events from db")
    }
});

//creates and pushed object
eventRouter.post("/event", async (req, res) => {
    try {
        const { userId, eventId, description } = req.body as ICreateEvent;
    const newData = new Event({
        userId,
        eventId,
        description
    })

    newData.save();
    } catch (error) {
        console.log("couldnt ")
        console.log(error);
    }

});

function handleError(err: any) {
    throw new Error("Function not implemented.");
}