import Link from "next/link";
import React from "react";

const ProjectCard = () => {
  const projects = [
    {
      name: "NexMeet : A Video confrencing Website",
      desc: "this is a video confersing app made by me by using some popukar texh stack like nextjs , tailwind css typescript , stream api key , cleark api key,etc",
      src: "/Nexmeet.png",
      github: "https://github.com/prajyot-porje",
      live: "https://nex-meet-prajyot.vercel.app/",
      demo: "",
    },
  ];
  return (
    <div className="">
      {projects.map((project, idx) => (
        <div
          key={project.name}
          className="flex h-[400px] justify-center px-2 items-start gap-6"
        >
          <div className="flex flex-col items-end w-[22vw] gap-4">
            <Link href={project.github} className="p-2 px-3 w-fit bg-black rounded-lg text-lg text-center font-semibold">GitHub</Link>
            <Link href={project.live} className="p-2 px-4 w-fit bg-black rounded-lg text-lg text-center font-semibold">Live </Link>
            <Link href={project.demo} className="p-2 px-4 w-fit bg-black rounded-lg text-lg text-center font-semibold">Demo YT</Link>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <img
              src={project.src}
              alt={project.name}
              height={700}
              width={700}
              className="rounded-lg"
            />
            <div className="text-2xl">{project.name}</div>
          </div>
          <div className=" w-[22vw] ">
            <div className="bg-slate-600 rounded-xl p-4 ">{project.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
