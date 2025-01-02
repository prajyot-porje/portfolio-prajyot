import Image from "next/image";

const Navbar = () => {
  const items = ["Home", "About", "Projects", "Skills", "Contact"];
  return (
    <div  className=" fixed  inset-x-0 top-8 flex justify-center h-16 transition-all duration-700 sm:inset-x-6">
      <header className="navbar absolute  rounded-lg w-[30vw] top-1/2  -translate-y-1/2">
      <nav className="flex size-full items-center justify-center p-4">  
        {/* <div className="flex items-center gap-2">
          <Image src="/logo-light.jpg" className="rounded-full" alt="logo" width={40} height={40} />
          <div className="text-white font-bold text-2xl">Prajyot Porje</div>
        </div>  */}
        <div className="flex w-full  items-center justify-between">
          {items.map((item) => (
            <div key={item} className="text-white font-bold text-lg px-2 hover:text-[#37d2ee]">{item}</div>
          ))}
        </div>
      </nav>
      </header>
    </div>
  );
};

export default Navbar;
