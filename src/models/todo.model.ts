import { model, Schema } from "mongoose";
import { Todo } from "../types/todo.types";

const todoSchema = new Schema<Todo>({
  title: { type: String, required: true },
});

export const todoModel = model<Todo>("Todo", todoSchema);
