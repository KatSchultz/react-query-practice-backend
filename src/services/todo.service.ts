import { todoModel } from "../models/todo.model";
import { Todo } from "../types/todo.types";

async function getTodos() {
  const todos = await todoModel.find();
  return todos;
}

async function addTodo(data: Todo) {
  const newTodo = await todoModel.create(data);
  return newTodo;
}

export const TodoService = {
  getTodos,
  addTodo,
};
