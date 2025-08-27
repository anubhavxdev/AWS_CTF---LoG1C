"use client";
import { MaskContainer } from "../../app/components/ui/svg-mask-effect";

export function PowerThoughts() {
  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden">
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-6xl text-center text-5xl font-bold text-slate-800 dark:text-white">
            There are only two types of Blue Teams: those that have been hacked
            and those that don&apos;t know it yet.
          </p>
        }
        className="h-screen w-screen border-none text-white dark:text-black"
      >
        The flag is in the most obvious place.{" "}
        <span className="text-blue-500">And yet,</span> somehow, we&apos;re all still looking in the 
        <span className="text-blue-500">most complex, obscure locations</span>.
      </MaskContainer>
    </div>
  );
}
