import React from "react";
import Image from "next/image";
import { CometCard } from "../components/ui/comet-card";

export function Sponsors() {
  const sponsors = [
    {
      name: "AWS",
      logo: "/placeholder-logo.png", // You can replace this with actual logo path
      tier: "Title Sponsor",
    },
    {
      name: "Sponsor 2",
      logo: "/placeholder-logo.png", // You can replace this with actual logo path
      tier: "Gold Sponsor",
    },
    {
      name: "Sponsor 3",
      logo: "/placeholder-logo.png", // You can replace this with actual logo path
      tier: "Silver Sponsor",
    },
    {
      name: "Sponsor 4",
      logo: "/placeholder-logo.png", // You can replace this with actual logo path
      tier: "Bronze Sponsor",
    },
    {
      name: "Sponsor 5",
      logo: "/placeholder-logo.png", // You can replace this with actual logo path
      tier: "Supporting Sponsor",
    },
    {
      name: "Sponsor 6",
      logo: "/placeholder-logo.png", // You can replace this with actual logo path
      tier: "Supporting Sponsor",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-950 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-neutral-100 dark:to-neutral-300 bg-clip-text text-transparent">
          Our Sponsors
        </h1>
        <p className="text-center text-xl text-neutral-600 dark:text-neutral-400 mb-16 max-w-3xl mx-auto">
          We are grateful to our amazing sponsors who make this event possible and support the cybersecurity community.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <CometCard key={`sponsor-${index}`} className="w-full">
              <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 h-full flex flex-col items-center justify-center shadow-lg border border-neutral-200 dark:border-neutral-700">
                <div className="relative w-32 h-32 mb-6 flex items-center justify-center bg-neutral-100 dark:bg-neutral-700 rounded-xl border-2 border-dashed border-neutral-300 dark:border-neutral-600">
                  {/* Placeholder for logo - replace with actual Image component when you upload logos */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-neutral-300 dark:bg-neutral-600 rounded-lg mb-2 mx-auto"></div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">Logo Space</p>
                  </div>
                  {/* Uncomment this when you have actual logos:
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain p-2"
                  />
                  */}
                </div>
                <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 text-center mb-2">
                  {sponsor.name}
                </h3>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                  {sponsor.tier}
                </span>
              </div>
            </CometCard>
          ))}
        </div>
      </div>
    </div>
  );
}
