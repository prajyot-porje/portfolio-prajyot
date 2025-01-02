'use client'
import About from "@/components/about";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <div className="">
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}
