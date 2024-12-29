'use client';
import Image from "next/image";
import React, { use, useRef } from "react";

const Navbar = () => {

  const navContainerRef = useRef(null);

  return (
    <div ref={navContainerRef} className=" fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
      <header className="absolute top-1/2 w-full -translate-y-1/2">
      <nav className="flex size-full items-center justify-between p-4">  
        <div className="flex items-center gap-7">
          <Image src="/logo-light.jpg" className="rounded-full" alt="logo" width={50} height={50} />
          <div className="text-white font-bold text-3xl pb-2">Prajyot Porje</div>
        </div> 
        <div>

        </div>
      </nav>
      </header>
    </div>
  );
};

export default Navbar;
