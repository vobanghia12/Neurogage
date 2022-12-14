import express from "express";
import mongoose from "mongoose";
import { metricsRouter } from "./metrics.module";
import { userRouter } from "./user.module";
import { eventRouter } from "./event.module";
import { sessionRouter } from "./session.module";
import { oauthRouter } from "./oauth.module";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 5000;

app.use(express.json())

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

// connect to database right here
//admin
//<your_password>
const CONNECTION_STRING = process.env.CONN as string;
console.log(CONNECTION_STRING)
mongoose.connect(CONNECTION_STRING)
    .then(() => console.log("Connected to db"))
    .catch((e) => console.log(e));

    
app.use("/metrics", metricsRouter);
app.use("/users", userRouter);
app.use("/events", eventRouter);
app.use("/sessions", sessionRouter);
app.use("/oauth", oauthRouter);

app.get("/", (req, res) => res.json({ test: "Hello World" }));

app.listen(port, () => console.log(`Listening on port ${port}`));
