import { CometCard } from "../components/ui/comet-card";

function MentorCard({ name, position, image }) {
  return (
    <CometCard>
      <div
        className="flex h-full w-80 flex-col items-stretch rounded-[16px] border-0  p-2 saturate-0 md:p-4"
        style={{
          minHeight: "420px", // Ensures consistent height
        }}
      >
        <div className="mx-2 flex-1">
          <div className="relative mt-2 aspect-[3/4] w-full">
            <img
              loading="lazy"
              className="absolute inset-0 h-full w-full rounded-[16px] bg-black object-cover contrast-75"
              alt={`Profile of ${name}`}
              src={image}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
              }}
            />
          </div>
        </div>
        <div className="mt-2 flex flex-col items-start p-4 font-mono text-white">
          <div className="text-sm font-semibold">{name}</div>
          <div className="text-xs text-gray-300 opacity-70">{position}</div>
        </div>
      </div>
    </CometCard>
  );
}

export function Mentor() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 mb-10 shadow-lg">
        MEET THE MENTORS
    </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        <MentorCard
          name="Mohan Ganesh Babu Pothala"
          position="Jr. Security Analyst @ FireCompass"
          image="https://media.licdn.com/dms/image/v2/D5603AQGnshoaG_emeQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731581791168?e=1759363200&v=beta&t=vmXWOTudl-RMesxl3qsKYdDHIaebJBC-zvGy16F1HSE"
        />
        <MentorCard
          name="Jaya Chandra Naidu"
          position="OsmSec | PJPT | CompTIA Network+ "
          image="https://media.licdn.com/dms/image/v2/D4D03AQHZi5cp8OGHwA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1667753574873?e=1759363200&v=beta&t=IVsBcmS-oelS9CAmBdVNPlzM3OQLiVrY0vQ-KlU2K3M"
        />
        <MentorCard
          name="Aman Kumar Sah"
          position="Operations Lead @GDSC LPU"
          image="https://media.licdn.com/dms/image/v2/D5603AQEK1mRSKmJzoQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712512298904?e=1759363200&v=beta&t=yG3glM2g1oXisECbHKS9K9BU3ZDyWYSxzTCiTVlZx8w"
        />
        <MentorCard
          name="Vedant Gaidhane"
          position="SDE 1 @amagi | Full Stack Developer"
          image="https://media.licdn.com/dms/image/v2/D4D03AQFg23agDGqOSQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714443215504?e=1759363200&v=beta&t=XI-jfBf7a2nZRhRLUcTeZUPV4cEeG1yDLsRbNH8wylU"
        />
      </div>
    </div>
  );
}
