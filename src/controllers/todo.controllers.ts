import {Request, Response} from "express";
import { TodoService } from "../services/todo.service";


export async function getTodos(req: Request, res: Response){
    try {
        const todos = await TodoService.getTodos();
        return res.status(200).json(todos)
    } catch(error){
        console.log(error)
        return res.status(500).json(error);
    }
}

export async function addTodo(req: Request, res: Response){
    try{
        const newTodo = TodoService.addTodo(req.body);
        return res.status(201).json(newTodo);
    } catch(error){
        console.log(error);
        return res.status(500).json(error)
    }
}