"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden relative">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/team2025.jpg')" }}
      />
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10" />
      {/* Content */}
      <div className="relative z-20">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Meet The Cloud Legends <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  AWS CLOUD TEAM
                </span>
              </h1>
            </>
          }
        >
          <img
            src="https://media.licdn.com/dms/image/v2/D5622AQHmQhYAeIU_Bg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1719095175154?e=1759363200&v=beta&t=wBK1o_CRdQ-DHIkCsv6ecst0NsRlla-Y2uxX9-AodJg"
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </div>
  );
}
