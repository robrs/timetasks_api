import { Request, Response } from "express";
import ITaskCreate from "../interfaces/ITaskCreate";

export default class TasksController {
  // list all tasks
  public static async index(request: Request, response: Response) {
    return response.status(200).send({ Status: "TasksController OK!" });
  }

  // create a new task
  public static async create(request: Request, response: Response) {
    const { title, date } = request.body;

    const newTask: ITaskCreate = {
      title,
      date,
    };

    return response.status(201).send(newTask);
  }

  public static async setIsComplete(request: Request, response: Response) {
    const { id } = request.params;
    return response.status(201).send({ mensagem: `O id enviado foi ${id}` });
  }

  public static async update(request: Request, response: Response) {
    const { id } = request.params;
    return response.status(201).send({ mensagem: `O id enviado foi ${id}` });
  }

  public static async delete(request: Request, response: Response) {
    const { id } = request.params;
    return response.status(201).send({ mensagem: `O id enviado foi ${id}` });
  }
}
