import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";


const Profile = () => {
  const items = [
    {
      title: 'Github',
      href: 'https://github.com/prajyot-porje',
      logo: <FaGithub size={25} />,
    },
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/prajyot-porje/',
      logo: <FaLinkedin color="#126bc4" size={25} />,
    },
    {
      title: 'LeetCode',
      href: 'https://leetcode.com/u/prajyot-porje/',
      logo: <div>
        <img src="/leetcode.svg" alt="leetcode" width={25} className="block dark:hidden"/>
        <img src="/leetcode-light.svg" alt="leetcode" width={25} className="hidden dark:block"/>
        </div>,
    },
    {
      title: 'GeeksForGeeks',
      href: 'https://www.geeksforgeeks.org/user/prajyotporje/',
      logo: <SiGeeksforgeeks color="#2f8d46" size={25} />,
    },
    {
      title: 'Instagram',
      href: 'https://www.instagram.com/___prajyot_17/',
      logo: <img src="/insta.svg" alt="insta" width={22} className=""/>,
    },
  ];
  return (
    <>
      <div className="text-slate-800 dark:text-slate-100 pl-4 pt-4 text-2xl font-semibold">
        Profiles
      </div>
      <div className="pt-5 px-8 h-[28vh] flex flex-col justify-between">
        {items.map((item)=>(
          <Link key={item.title} href={item.href} className="flex gap-3">
            {item.logo}
            <div className="text-lg text-slate-800 dark:text-slate-100 dark:hover:text-blue-500 hover:text-blue-500 text-center font-semibold">{item.title}</div>
          </Link>
        ))}       
      
      </div>
    </>
  );
};

export default Profile;
