import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../components/ui/draggable-card";

export function DraggableCardDemo() {
  const items = [
    {
      title: "Tony",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQFEUIQTguyYGA/profile-displayphoto-shrink_800_800/B56ZUjYME1HsAc-/0/1740055299343?e=1759363200&v=beta&t=zHXvIf2tEfM-m5YamI8mcqPvany3J3wcdyEr80KAGh4",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "LoG1C",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQGYCOMrO__HwQ/profile-displayphoto-crop_800_800/B56ZgndXj7HMAM-/0/1753008668969?e=1759363200&v=beta&t=VC8K3Z8d_QXB0lOjx26fyg_d-o1zhsH6j3hveFVdGyc",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Param20h",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQHJbxI1fpzHyQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708344184045?e=1759363200&v=beta&t=l-XFyan81f96ue85JuTRmEdJe7ZOVXlpu9vXFVd68Vc",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "BUG",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQGw1tC5fsIBIg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1699906938175?e=1759363200&v=beta&t=OHRWRzDzI01PKoz6R5HjBlwzznAuJ4AyHPSaoUeELI8",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "F4ITH",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQF35RnBB01ypA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708288419548?e=1759363200&v=beta&t=d7eMVZgGPFntv0j2fYigWwv4Lv69eZcUkd7cIA-_hB8",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "0x_r00ted",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQFA9iQAO_pNVQ/profile-displayphoto-shrink_800_800/B56ZUtxj6bHEAc-/0/1740229724592?e=1759363200&v=beta&t=nLa1aJrlQSqKXWLftZuteX6-U-Gu8s9462srq8tu0B0",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Logic_Kahaan_Hai",
      image:
        "https://avatars.githubusercontent.com/u/90065566?v=4",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];
  return (
    <><h1 className="text-4xl font-extrabold text-center mt-8 mb-4 text-neutral-800 dark:text-neutral-100">
          Meet the Organizers
      </h1>
      <DraggableCardContainer
          className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
              <p
                  className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
                  Meet the masterminds<br />
                  who built the challenges <br />
                  and made this event possible.<br />
              </p>
              {items.map((item) => (
                  <DraggableCardBody className={item.className}>
                      <img
                          src={item.image}
                          alt={item.title}
                          className="pointer-events-none relative z-10 h-80 w-80 object-cover" />
                      <h3
                          className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                          {item.title}
                      </h3>
                  </DraggableCardBody>
              ))}
          </DraggableCardContainer></>
  );
}
