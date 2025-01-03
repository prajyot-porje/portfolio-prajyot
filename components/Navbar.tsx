"use client";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconAddressBook,
  IconBulb,
  IconComponents,
  IconHome,
  IconMist,
  IconUserCircle,
} from "@tabler/icons-react";
import React from "react";

const Navbar = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "About",
      icon: (
        <IconMist  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#AboutSection",
    },
    {
      title: "Skills",
      icon: (
        <IconBulb className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Projects",
      icon: (
        <IconComponents className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Profiles",
      icon: (
        <IconUserCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "contact",
      icon: (
        <IconAddressBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="">
      <FloatingDock items={links} />
    </div>
  );
};

export default Navbar;
