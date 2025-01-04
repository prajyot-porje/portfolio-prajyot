'use client'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import ProfilesSection from '@/components/ProfilesSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import { useTheme } from '@nextui-org/use-theme'
import React from 'react'

const page = () => {
  const {theme} = useTheme();
  return (
    <main className={`${theme} text-foreground bg-background`}>
    <div className='overflow-hidden  scroll'>
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ProfilesSection/>
      <ContactSection/>
      <div className='fixed bottom-0 left-1/2 pb-5 transform -translate-x-1/2'>
          <Navbar />
        </div>
    </div>
    </main>
  )
}

export default page