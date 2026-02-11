import { Router } from "express";
import { createProjects, getProjectById, getProjects } from "../controllers/projectController.js";

const router= Router();

router.get("/",getProjects);
router.get("/:projectId",getProjectById);
router.post("/create",createProjects);

export default router;