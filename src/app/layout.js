import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LandingPage from "../app/home/landing";
import AboutTheEvent from "../app/about/about";
import Organizer from "../app/organizers/organizer";
import { DraggableCardDemo } from "./gallery/gallery";
import { Mentor } from "./mentor/mentor";
import { PowerThoughts } from "./PowerThoughts/power";
import { CommunityPartners } from "./community-partners/community-partners";
import { Sponsors } from "./sponsors/sponsors";
import {SparklesPreview} from "./footer/footer"
import { HeroScrollDemo } from "./Tablet-scroll/Hero-scroll";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AWS CTF 2025",
  description: "Capture The Flag competition hosted by AWS Cloud Club LPU",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LandingPage />
        <AboutTheEvent />
       
        <DraggableCardDemo />
        <PowerThoughts />
        <CommunityPartners />
        <Mentor />
        <Sponsors />
        <HeroScrollDemo />
        <SparklesPreview />

        {children}
      </body>
    </html>
  );
}
