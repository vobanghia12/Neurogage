import express from "express";
import mongoose from "mongoose";
import { metricsRouter } from "./metrics.module";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 5000;

app.use(express.json())

// connect to database right here
//admin
//<your_password>
const CONNECTION_STRING = process.env.CONN as string;
console.log(CONNECTION_STRING)
mongoose.connect(CONNECTION_STRING)
    .then(() => console.log("Connected to db"))
    .catch((e) => console.log(e));

app.use("/metrics", metricsRouter);

app.get("/", (req, res) => res.json({ test: "Hello World" }));

app.listen(port, () => console.log(`Listening on port ${port}`));
