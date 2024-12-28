import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'


const Hero = () => {
  return (
    <div className='hero-background h-screen w-screen overflow-hidden'>
      <div>
        <Navbar />
      </div>
        <div className='h-full w-full flex flex-col justify-end items-center'>
          <Image src='/moon.png' alt='moon' className=' relative' width={1250} height={1250} />
        </div>
    </div>
  )
}

export default Hero