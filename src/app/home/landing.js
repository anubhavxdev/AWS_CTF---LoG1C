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

export default function Home() {
  return (
   <main>
    <nav style={{ display: "flex", alignItems: "center", padding: "1rem", background: "transparent" }}>
      <Image src={logo} alt="AWS Logo" width={50} height={50} />
      <span style={{ color: "#fff", marginLeft: "1rem", fontSize: "1.5rem", fontWeight: "300" }}>
        AWS CTF
      </span>
      <div style={{ marginLeft: "auto", display: "flex", gap: "1rem" }}>
      </div>
    </nav>

    <section>
      <div className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-black">
      <motion.img
        src="https://happenings.lpu.in/wp-content/uploads/2025/03/lpu-campus.jpg"
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
