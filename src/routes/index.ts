import { Router } from "express";
import { tasksRouters } from "./tasksRouters";

const router = Router();

router.use(tasksRouters);

export { router };
