import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma/client.js";

const prisma = new PrismaClient();

export const getProjects = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const project = await prisma.project.findMany();
    res.json(project);
    console.table(project);
  } catch (error) {
    res.sendStatus(500).json({ message: "Error retrieving projects" });
  }
};
export const getProjectById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { projectId } = req.params;
    const project = await prisma.project.findMany({
      where: {
        id: Number(projectId),
      },
    });

    res.json(project);
    console.table(project);
  } catch (error) {
    res.sendStatus(500).json({ message: "Error retrieving projects" });
  }
};
export const createProjects = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, description, startDate, endDate } = req.body;
    const newProject = await prisma.project.create({
      data: {
        name,
        description,
        startDate,
        endDate,
      },
    });
    res.status(201).json(newProject);
    console.table(newProject);
  } catch (error) {
    res.sendStatus(500).json({ message: "Error creating a project: " + error });
  }
};
