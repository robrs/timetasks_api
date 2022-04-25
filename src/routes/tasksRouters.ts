import { Router } from "express";

import TasksController from "../http/TasksController";

const tasksRouters = Router();

tasksRouters.get("/tasks", TasksController.index);
tasksRouters.post("/tasks", TasksController.create);
tasksRouters.patch("/tasks/:id", TasksController.setIsComplete);
tasksRouters.put("/tasks/:id", TasksController.update);
tasksRouters.delete("/tasks/:id", TasksController.delete);

export { tasksRouters };
