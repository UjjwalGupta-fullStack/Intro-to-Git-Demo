"use client";



import Particles from "./ui/particles";

export function ParticlesDemo() {


  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-auto rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center md:text-8xl text-6xl font-semibold leading-none text-transparent dark:from-white">
        Welcome to <div className="text-cyan-700">OSDG </div>
      </span>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
    </div>
  );
}
