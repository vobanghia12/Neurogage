import express from "express";
import {Oauth} from "./oauth.model";

interface ICreateOauth {
    username: string;
    password: string;
}

export const oauthRouter = express.Router();

oauthRouter.get("/:username", async (req, res) => {
    const username = req.params.username;
    try {
        const usernames = await Oauth.find({username:username}).exec();
        res.json({ usernames });
    } catch (error) {
        console.log("could not query usernames from db")
    }
});

oauthRouter.get("/:password", async (req, res) => {
    const password = req.params.password;
    try {
        const passwords = await Oauth.find({password:password}).exec();
        res.json({ passwords });
    } catch (error) {
        console.log("could not query passwords from db")
    }
});

oauthRouter.post("/", async (req, res) => {
    const { username, password} = req.body as ICreateOauth;
    
    const userCredentials = new Oauth({
        username,
        password
    });

    userCredentials.save((err) => {
        if (err) {
            console.log(err);
            res.json({ message: "Error creating the userCredentials" })
        } else {
            res.json({ userCredentials });
        }
    })
});

