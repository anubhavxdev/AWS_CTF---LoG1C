'use client'
import Image from "next/image";
import logo from "../../../public/logo 2.png";
import { ColourfulText } from "../components/ui/colourful-text";
import { motion } from "framer-motion";
import React from "react";
import { FloatingDock } from "../components/ui/floating-dock";

import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
// import { motion } from "motion/react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: (
        <div className="h-5 w-5 relative">
          <Image
            src="https://assets.aceternity.com/logo-dark.png"
            fill
            alt="Aceternity Logo"
            className="object-contain"
          />
        </div>
      ),
      href: "#",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links} />
    </div>
  );
}

export default function Home() {
  return (
   <main>
    <nav style={{ display: "flex", alignItems: "center", padding: "1rem", background: "black" }}>
      <Image src={logo} alt="AWS Logo" width={50} height={50} />
      <span style={{ color: "#fff", marginLeft: "1rem", fontSize: "1.5rem", fontWeight: "300" }}>
        AWS CTF
      </span>
      <div style={{ marginLeft: "auto", display: "flex", gap: "1rem" }}>
        <motion.a
          whileHover={{ scale: 1.1, backgroundColor: "#ff9900", color: "#fff", boxShadow: "0 4px 20px #ff990088" }}
          whileTap={{ scale: 0.95 }}
          href="#"
          style={{
            color: "orange",
            textDecoration: "none",
            fontWeight: "500",
            padding: "0.5rem 1.2rem",
            borderRadius: "8px",
            border: "1px solid #ff9900",
            background: "transparent",
            transition: "all 0.2s"
          }}
        >
          Login
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1, backgroundColor: "#ff3b3b", color: "#fff", boxShadow: "0 4px 20px #ff3b3b88" }}
          whileTap={{ scale: 0.95 }}
          href="#"
          style={{
            color: "red",
            textDecoration: "none",
            fontWeight: "500",
            padding: "0.5rem 1.2rem",
            borderRadius: "8px",
            border: "1px solid #ff3b3b",
            background: "transparent",
            transition: "all 0.2s"
          }}
        >
          Sign Up
        </motion.a>
      </div>
    </nav>

    <section>
      <div className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-black">
      <motion.img
        src="https://wallpapercg.com/media/ts_orig/22392.webp"
        className="h-full w-full object-cover absolute inset-0 [mask-image:radial-gradient(circle,transparent,black_80%)] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />
      
      <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
        
        Conquer the cloud <ColourfulText text="{AWS CTF}" /> <br /> One flag at a time.
        <p className="text-lg md:text-2xl text-center text-white mt-4 relative z-2 font-sans">
        School of Computer Science and Engineering
      </p>
      </h1>
    </div>
    {/* <FloatingDockDemo /> */}
    </section>

   


    <section>
      {/* Faculty in Charge */}
    </section>
    
    <section>
      {/* Organizers */}
    </section>

    <section>
      {/* Community Partners */}
    </section>

    <section>
      {/* Sponsors */}
    </section>
  </main>
  );
}
