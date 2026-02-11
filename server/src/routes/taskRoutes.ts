import { Router } from "express";
import { createTasks, getTaskById, getTaskByProject, getTasks } from "../controllers/taskController.js";

const router=Router();

router.get("/",getTasks);
router.get("/:taskId",getTaskById);
router.get("/project/:projectId",getTaskByProject);
router.post("/create",createTasks);

export default router;
