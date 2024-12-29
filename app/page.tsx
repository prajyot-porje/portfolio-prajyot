import About from "@/components/about";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div className="overflow-hidden h-screen w-screen scroll overflow-y-scroll no-scrollbar">
      <Hero/>
      <About/>
    </div>
  );
}
