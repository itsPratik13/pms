"use client"
import React, { useState } from 'react'

const Sidebar = () => {
    const[showProjects,setShowProjects]=useState(true);
    const[showPriority,setShowPriority]=useState(true);

  return (
    <div className=' bg-transparent min-h-screen w-80 flex flex-col justify-between z-20 shadow-2xl dark:bg-neutral-900  '></div>
  )
}

export default Sidebar