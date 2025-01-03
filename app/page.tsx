import AboutSection from '@/components/AboutSection'
import HeroSection from '@/components/HeroSection'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-hidden  scroll'>
      <HeroSection/>
      <AboutSection/>
    </div>
  )
}

export default page