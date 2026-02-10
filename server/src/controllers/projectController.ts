import { Request,Response } from "express";
import { PrismaClient } from "../../generated/prisma/client.js";


const prisma=new PrismaClient();

export const getProjects=async(
    req:Request
    ,res:Response
):Promise<void>=>{
    try {
        const project=await prisma.project.findMany();
        res.json(project);
        console.table(project);
        
    } catch (error) {
        res.sendStatus(500).json({message:"Error retrieving projects"})
        
    }

}