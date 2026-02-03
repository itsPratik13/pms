"use client";
import { LockIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  return (
    <div className=" bg-transparent min-h-screen w-80 flex flex-col justify-start z-20 shadow-2xl dark:bg-neutral-900  ">
      <div className=" w-full min-h-[60px] flex flex-col px-4 py-4">
        <div className="py-1 text-2xl text-center font-semibold dark:text-neutral-200">PMS</div>
        <hr className="border-neutral-200 mt-1 mb-2 w-full dark:border-neutral-700" />
        <div className="flex items-center gap-6">
          <img src="https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="logo" width={40} height={40} className="rounded-full"/>
          <div className="flex flex-col  ">
            <p className="font-medium text-base dark:text-neutral-300">Cartoon's Team</p>
            <div className="flex gap-2"> 
            <LockIcon size={14} className="mt-0.5"/>
             <p className="text-sm text-neutral-600 dark:text-neutral-500"> Private</p>
             </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Sidebar;
