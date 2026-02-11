import { Router } from "express";
import { createTasks, getTaskById, getTaskByProject, getTasks, updateTaskStatus } from "../controllers/taskController.js";

const router=Router();

router.get("/",getTasks);
router.get("/:taskId",getTaskById);
router.get("/project/:projectId",getTaskByProject);
router.post("/",createTasks);
router.patch("/:taskId/status",updateTaskStatus);

export default router;

