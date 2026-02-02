import React from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'
import ThemeToggle from './themeToggle'

const DashboardWrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <div className=' flex min-h-screen w-full  bg-zinc-50 font-sans dark:bg-black'>
        <Sidebar/>
      <main className='flex w-full  min-h-100 flex-col  bg-zinc-50 dark:bg-black font-sans '>
        <Navbar/>
        {children}</main>
        
      
    </div>
  )
}

export default DashboardWrapper