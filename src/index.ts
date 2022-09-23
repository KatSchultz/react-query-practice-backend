import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "./config/config";
import { todoRouter } from "./routes/todo.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", todoRouter);

mongoose
  .connect(config.mongoURI)
  .then(() => console.log("Connected to MongoDB"));

const port = 4000;

app.listen(port, () => console.log("Listing on port ", port));
