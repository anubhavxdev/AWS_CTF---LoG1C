"use client";
import React from "react";
import { motion } from "framer-motion";
import { Flag, ShieldCheck, Trophy, UserPlus, CalendarClock, Clock, Cpu, HelpCircle, Rocket, ScrollText } from "lucide-react";

// Bento Card wrapper
const BentoCard = ({ className = "", children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className={`relative rounded-2xl p-6 md:p-7 bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 border border-white/10 shadow-xl ${className}`}
  >
    {children}
  </motion.div>
);

// Icon pill
const IconPill = ({ icon: Icon }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-zinc-200">
    <Icon className="h-4 w-4" />
    <span>CTF</span>
  </div>
);

export default function AboutEventBento() {
  return (
    <section className="w-full py-16 md:py-20 bg-[radial-gradient(ellipse_at_top,rgba(255,200,0,0.12),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.12),transparent_60%)]">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            About the Event
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.45 }}
            className="mt-3 md:mt-4 text-zinc-300 text-base md:text-lg max-w-3xl mx-auto"
          >
            Dive into an electrifying Capture The Flag hosted by the AWS Cloud Club. Learn by breaking, build by fixing, and compete for glory—no matter your skill level.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[1fr] gap-4 md:gap-5">
          {/* Overview (wide) */}
          <BentoCard className="md:col-span-4">
            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-2xl p-3 bg-white/5 border border-white/10">
                <Flag className="h-6 w-6 text-yellow-300" />
              </div>
              <div>
                <IconPill icon={Rocket} />
                <h3 className="mt-2 text-xl md:text-2xl font-bold text-white">What is AWS CTF?</h3>
                <p className="mt-2 text-zinc-300 leading-relaxed">
                  A hands-on cybersecurity competition where you solve realistic challenges across web, cloud, forensics, and crypto to capture flags and climb the leaderboard. Learn fast, collaborate smart, and showcase your skills.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* Who can participate */}
          <BentoCard className="md:col-span-2">
            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-2xl p-3 bg-white/5 border border-white/10">
                <UserPlus className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white">Who can join?</h3>
                <p className="mt-1 text-zinc-300">
                  Open to beginners and pros. Join solo or form teams of up to 4. Bring curiosity—tools & hints are provided.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* Tracks (tall) */}
          <BentoCard className="md:col-span-3">
            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-2xl p-3 bg-white/5 border border-white/10">
                <Cpu className="h-6 w-6" />
              </div>
              <div className="w-full">
                <h3 className="text-lg md:text-xl font-semibold text-white">Challenge Tracks</h3>
                <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-300">
                  <li className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">Web Exploitation</li>
                  <li className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">Cloud Security (AWS)</li>
                  <li className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">Reverse & Pwn</li>
                  <li className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">Forensics & OSINT</li>
                  <li className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">Crypto & Misc</li>
                </ul>
              </div>
            </div>
          </BentoCard>

          {/* Prizes */}
          <BentoCard className="md:col-span-3">
            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-2xl p-3 bg-white/5 border border-white/10">
                <Trophy className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white">Prizes & Swag</h3>
                <p className="mt-1 text-zinc-300">
                  Win trophies, AWS credits, certificates, and exclusive swag. Top teams get spotlighted on our community channels.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* Timeline (wide) */}
          <BentoCard className="md:col-span-4">
            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-2xl p-3 bg-white/5 border border-white/10">
                <CalendarClock className="h-6 w-6" />
              </div>
              <div className="w-full">
                <h3 className="text-lg md:text-xl font-semibold text-white">Event Timeline</h3>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2 text-zinc-300">
                  <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">
                    <p className="text-sm">Registration</p>
                    <p className="text-xs opacity-80">Opens — TBA</p>
                  </div>
                  <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">
                    <p className="text-sm">Workshop + Rules</p>
                    <p className="text-xs opacity-80">Pre-CTF Briefing</p>
                  </div>
                  <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">
                    <p className="text-sm">CTF Day</p>
                    <p className="text-xs opacity-80">Live 6–8 hrs</p>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Rules */}
          <BentoCard className="md:col-span-2">
            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-2xl p-3 bg-white/5 border border-white/10">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white">Rules & Fair Play</h3>
                <ul className="mt-1 text-zinc-300 text-sm list-disc pl-5">
                  <li>No attacking infra outside scope.</li>
                  <li>No flag sharing between teams.</li>
                  <li>Respect time limits & code of conduct.</li>
                </ul>
              </div>
            </div>
          </BentoCard>

          {/* Logistics */}
          <BentoCard className="md:col-span-3">
            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-2xl p-3 bg-white/5 border border-white/10">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white">Format & Logistics</h3>
                <p className="mt-1 text-zinc-300">
                  On-site/online (TBA). Scoreboard goes live at start. Bring your laptop; internet provided for on-site.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* Help */}
          <BentoCard className="md:col-span-3">
            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-2xl p-3 bg-white/5 border border-white/10">
                <HelpCircle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white">Get Help</h3>
                <p className="mt-1 text-zinc-300">
                  Stuck? Use built-in hints at a small score cost. Volunteers and mentors will be available on the help desk channel.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* CTA (wide) */}
          <BentoCard className="md:col-span-6 bg-gradient-to-br from-amber-500/10 to-indigo-500/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Ready to capture some flags?</h3>
                <p className="text-zinc-300 md:max-w-xl mt-1">
                  Secure your spot now. Team up, learn fast, and race to the top of the leaderboard. Beginners welcome!
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="#register"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-medium bg-white text-zinc-900 shadow hover:shadow-lg transition"
                >
                  Register Now
                </a>
                <a
                  href="#rulebook"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-medium border border-white/20 text-white hover:bg-white/10 transition"
                >
                  <ScrollText className="h-4 w-4 mr-2" /> View Rulebook
                </a>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
