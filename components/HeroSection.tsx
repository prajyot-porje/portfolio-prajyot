import React from 'react'
import DayNightToggle from './ui/ToogleSwitch'

const HeroSection = () => {
  return (
    <div className='h-screen w-screen bg-light dark:bg-dark flex justify-center items-center'>
      <div className='absolute top-4 right-4'>
        <DayNightToggle/>
      </div>
      <div className='bg-[#1A1A2E] h-40 w-40'></div>
      <div className='bg-[#00D4FF] h-40 w-40'></div>
      <div className='bg-[#7B2CBF] h-40 w-40'></div>
      <div className='bg-[#FF007C] h-40 w-40'></div>
      <div className='bg-[#00FF88] h-40 w-40'></div>
      <div className='bg-[#E0E0E0] h-40 w-40'></div>
      <div className='bg-[#FF0033] h-40 w-40'></div>
      <div className='bg-[#2A2A40] h-40 w-40'></div>
    </div>
  )
}

export default HeroSection