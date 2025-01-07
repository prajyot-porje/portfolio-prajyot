import { Suez_One } from 'next/font/google';
import React from 'react'

const boxFont = Suez_One({
  variable: "--font-suez-one",
  subsets: ["latin"],
  weight: "400",
});

const ProjectsSection = () => {
  return (
    <div className='h-screen w-screen bg-light dark:bg-dark'>
      <div className={`${boxFont.className}  text-9xl font-bold text-center pr-80`}>PROJECTS</div>
      <div className='h-28'></div>
      <div className="flex flex-col justify-center items-center gap-4">
        <img src='/Nexmeet.png' alt='project' height={700} width={700} className='rounded-lg' />
        <div className='text-2xl'>NexMeet : A Video confrencing Website</div>
      </div>
    </div>

  )
}

export default ProjectsSection