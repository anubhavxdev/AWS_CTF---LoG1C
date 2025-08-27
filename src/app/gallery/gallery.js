import React from "react";
import Image from "next/image";
import { CometCard } from "../components/ui/comet-card";

export function DraggableCardDemo() {
  const items = [
    {
      title: "Tony",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQFEUIQTguyYGA/profile-displayphoto-shrink_800_800/B56ZUjYME1HsAc-/0/1740055299343?e=1759363200&v=beta&t=zHXvIf2tEfM-m5YamI8mcqPvany3J3wcdyEr80KAGh4",
    },
    {
      title: "V1per",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQGYCOMrO__HwQ/profile-displayphoto-crop_800_800/B56ZgndXj7HMAM-/0/1753008668969?e=1759363200&v=beta&t=VC8K3Z8d_QXB0lOjx26fyg_d-o1zhsH6j3hveFVdGyc",
    },
    {
      title: "Param20h",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQHJbxI1fpzHyQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708344184045?e=1759363200&v=beta&t=l-XFyan81f96ue85JuTRmEdJe7ZOVXlpu9vXFVd68Vc",
    },
    {
      title: "BUG",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQGw1tC5fsIBIg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1699906938175?e=1759363200&v=beta&t=OHRWRzDzI01PKoz6R5HjBlwzznAuJ4AyHPSaoUeELI8",
    },
    {
      title: "F4ITH",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQF35RnBB01ypA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708288419548?e=1759363200&v=beta&t=d7eMVZgGPFntv0j2fYigWwv4Lv69eZcUkd7cIA-_hB8",
    },
    {
      title: "0x_r00ted",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQFA9iQAO_pNVQ/profile-displayphoto-shrink_800_800/B56ZUtxj6bHEAc-/0/1740229724592?e=1759363200&v=beta&t=nLa1aJrlQSqKXWLftZuteX6-U-Gu8s9462srq8tu0B0",
    },
    {
      title: "Logic",
      image:
        "https://avatars.githubusercontent.com/u/90065566?v=4",
    },
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-neutral-100 dark:to-neutral-300 bg-clip-text text-transparent">
          Meet the Organizers
        </h1>
        <p className="text-center text-xl text-neutral-600 dark:text-neutral-400 mb-16 max-w-3xl mx-auto">
          Meet the masterminds who built the challenges and made this event possible.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <CometCard key={`gallery-item-${index}`} className="w-full">
              <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 h-full flex flex-col items-center justify-center shadow-lg border border-neutral-200 dark:border-neutral-700">
                <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-full border-4 border-neutral-200 dark:border-neutral-600">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 text-center">
                  {item.title}
                </h3>
              </div>
            </CometCard>
          ))}
        </div>
      </div>
    </div>
  );
}
