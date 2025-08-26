"use client";
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

const organizers = [
  {
    name: "Tony",
    role: "Cloud Captain",
    img: "https://media.licdn.com/dms/image/v2/D5603AQFEUIQTguyYGA/profile-displayphoto-shrink_800_800/B56ZUjYME1HsAc-/0/1740055299343?e=1759363200&v=beta&t=zHXvIf2tEfM-m5YamI8mcqPvany3J3wcdyEr80KAGh4",
    linkedin: "#",
    github: "#",
  },
  {
    name: "LoG1C",
    role: "Developer",
    img: "https://media.licdn.com/dms/image/v2/D5603AQGYCOMrO__HwQ/profile-displayphoto-crop_800_800/B56ZgndXj7HMAM-/0/1753008668969?e=1759363200&v=beta&t=VC8K3Z8d_QXB0lOjx26fyg_d-o1zhsH6j3hveFVdGyc",
    linkedin: "#",
    github: "#",
  },

    {
    name: "Param20h",
    role: "CTF Player",
    img: "https://media.licdn.com/dms/image/v2/D5603AQHJbxI1fpzHyQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708344184045?e=1759363200&v=beta&t=l-XFyan81f96ue85JuTRmEdJe7ZOVXlpu9vXFVd68Vc",
    linkedin: "#",
    github: "#",
  },
  {
    name: "BUG",
    role: "CTF Player",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQGw1tC5fsIBIg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1699906938175?e=1759363200&v=beta&t=OHRWRzDzI01PKoz6R5HjBlwzznAuJ4AyHPSaoUeELI8",
    linkedin: "#",
    github: "#",
  },
  {
    name: "F4ITH",
    role: "Developer",
    img: "https://media.licdn.com/dms/image/v2/D5603AQF35RnBB01ypA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708288419548?e=1759363200&v=beta&t=d7eMVZgGPFntv0j2fYigWwv4Lv69eZcUkd7cIA-_hB8",
    linkedin: "#",
    github: "#",
  },
  {
    name: "0x_r00ted",
    role: "CTF Player",
    img: "https://media.licdn.com/dms/image/v2/D5603AQFA9iQAO_pNVQ/profile-displayphoto-shrink_800_800/B56ZUtxj6bHEAc-/0/1740229724592?e=1759363200&v=beta&t=nLa1aJrlQSqKXWLftZuteX6-U-Gu8s9462srq8tu0B0",
    linkedin: "#",
    github: "#",
  },





];

export default function Organizers() {
  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      {/* Metallic brushed texture overlay */}
      <div className="absolute inset-0 opacity-[0.08] bg-[url('/textures/brushed-metal.png')] bg-cover mix-blend-overlay"></div>
      {/* Subtle scanline overlay */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.05)_100%)] bg-[length:100%_2px]"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-16 tracking-tight"
        >
          Meet the{" "}
          <span className="text-teal-400 drop-shadow-[0_0_10px_#00f5f5]">
            Organizers
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {organizers.map((org, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, type: "spring" }}
              className="relative group rounded-3xl bg-gradient-to-br from-zinc-800/40 to-zinc-700/20 border border-teal-400/20 p-8 backdrop-blur-xl hover:shadow-[0_0_30px_#00f5f5] hover:border-teal-400/40 transition-all duration-500"
            >
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-teal-400/30 group-hover:ring-teal-400/70 transition duration-500">
                <img
                  src={org.img}
                  alt={org.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-700/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </div>
              <h3 className="mt-5 text-2xl font-bold text-white tracking-wide group-hover:text-teal-300 transition">
                {org.name}
              </h3>
              <p className="text-sm text-zinc-400 mb-4">{org.role}</p>

              <div className="flex justify-center gap-4 mt-3">
                <a
                  href={org.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-teal-400/10 hover:bg-teal-400/30 transition backdrop-blur-md"
                >
                  <Linkedin className="w-5 h-5 text-teal-300" />
                </a>
                <a
                  href={org.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-teal-400/10 hover:bg-teal-400/30 transition backdrop-blur-md"
                >
                  <Github className="w-5 h-5 text-teal-300" />
                </a>
              </div>

              {/* Cyberpunk metallic glow accent */}
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-tr from-teal-500/30 to-gray-400/30 blur-2xl opacity-0 group-hover:opacity-40 transition duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
