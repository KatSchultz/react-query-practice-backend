import express from "express";
import { addTodo, getTodos } from "../controllers/todo.controllers";

export const todoRouter = express.Router();

todoRouter.route("/").get(getTodos).post(addTodo);
