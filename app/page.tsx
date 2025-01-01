'use client'
import About from "@/components/about";
import Hero from "@/components/Hero";
import Temp from "@/components/temp";


export default function Home() {
  return (
    <div className="">
      <Temp/>
      <Hero/>
      <About/>
    </div>
  );
}
