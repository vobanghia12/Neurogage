import express from "express";
import {Oauth} from "./oauth.model";
import bcrypt, { hash } from "bcrypt";

interface ICreateOauth {
    username: string;
    password: string;
}

export const oauthRouter = express.Router();

oauthRouter.post("/signin", async (req, res) => {
    const { username, password} = req.body as ICreateOauth;
    try {
        const usernames = await Oauth.find({username:username}).exec();

        const hashedPassword = await hash(password, usernames[0].salt);

        if (hashedPassword === usernames[0].password) {
            res.json({ message: "Login successful" });
        } else {
            res.status(400).json({ message: "No sign in" });
        }
        
    } catch (error) {
        console.log("could not query usernames from db")
    }
});

oauthRouter.post("/signup", async (req, res) => {
    const { username, password} = req.body as ICreateOauth;

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await hash(password, salt);
    
    const userCredentials = new Oauth({
        username,
        password: hashedPassword,
        salt
    });

    userCredentials.save((err) => {
        if (err) {
            console.log(err);
            res.status(400).json({ message: "Error creating the userCredentials" })
        } else {
            res.json({ message: "Signup successful" });
        }
    })
});

