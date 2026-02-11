import { Router } from "express";
import { createProjects, getProjects } from "../controllers/projectController.js";

const router= Router();

router.get("/",getProjects);
router.post("/create",createProjects);

export default router;