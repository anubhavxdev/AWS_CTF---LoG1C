"use client";
import React from "react";
import { SparklesCore } from "../../app/components/ui/sparkles";

export function SparklesPreview() {
  return (
    <footer className="w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-t-md py-12">
      <h1 className="md:text-4xl text-2xl lg:text-5xl font-bold text-center text-white relative z-20">
        AWS Cloud Community
      </h1>
      <div className="w-full max-w-4xl h-24 relative mt-4">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[3px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1000}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to blend edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(300px_150px_at_top,transparent_20%,white)]"></div>
      </div>
      <p className="text-zinc-400 text-sm mt-6">
        © {new Date().getFullYear()} AWS Cloud Community. All rights reserved.
      </p>
    </footer>
  );
}
