import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma/client.js";

const prisma = new PrismaClient();

export const getTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const task = await prisma.task.findMany();
    res.json(task);
    console.table(task);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving tasks" });
  }
};
export const getTaskById = async (req: Request, res: Response) => {
  try {
    const { taskId } = req.params;
    const task = await prisma.task.findMany({
      where: {
        id: Number(taskId),
      },
      include: {
        author: true,
        assignee: true,
        attachments: true,
        comments: true,
      },
    });
    res.json(task);
    console.table(task);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Task not found for the given id :", error });
  }
};

export const getTaskByProject = async (req: Request, res: Response) => {
  try {
    const { projectId } = req.params;
    const task = await prisma.task.findMany({
      where: {
        projectId: Number(projectId),
      },
      include: {
        author: true,
        assignee: true,
        attachments: true,
        comments: true,
      },
    });
    res.json(task);
    console.table(task);
  } catch (error) {
    res.status(500).json({ message: "Task not found for project Id", error });
  }
};
export const createTasks = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      title,
      description,
      status,
      priority,
      tags,
      startDate,
      dueDate,
      points,
      projectId,
      authorUserId,
      assignedUserId,
    } = req.body;
    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        status,
        priority,
        tags,
        startDate,
        dueDate,
        points,
        projectId,
        authorUserId,
        assignedUserId,
      },
    });
    res.status(201).json(newTask);
    console.table(newTask);
  } catch (error) {
    res.status(500).json({ message: "Error creating a task: " + error });
  }
};

export const updateTaskStatus = async (req: Request, res: Response) => {
  try {
    const { taskId } = req.params;
    const { status } = req.body;
    const updatedTask = await prisma.task.update({
        where:{
            id:Number(taskId),
        },
        data:{
            status:status
        }
    });
    res.json(updatedTask);
    console.log(updatedTask);
  } catch (error) {
    res.status(500).json({message:"Error updating task:"})
  }
};

