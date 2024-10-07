"use client";
import { ParticlesDemo } from "@/components/hero";
import { People } from "@/components/people";
import ShimmerButton from "@/components/ui/shimmer-button";
import { Instructions } from "@/components/ui/instructions";

export default function Home() {
  const scrollToInstructions = () => {
    const instructionsElement = document.getElementById("instructions");
    if (instructionsElement) {
      instructionsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="dark relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <ParticlesDemo />

        <h2 className="text-4xl bg-gradient-to-b from-slate-400 to-gray-300 bg-clip-text text-center font-semibold leading-none text-zinc-300 dark:from-white mt-12">
          Add yourself Here :)
        </h2>
        <ShimmerButton className="mt-4" onClick={scrollToInstructions}>
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            Instructions Here
          </span>
        </ShimmerButton>

        <People />
        <div
          id="instructions"
          className="flex flex-col items-center justify-center bg-gradient-to-b from-slate-400 to-gray-300 bg-clip-text text-center text-4xl font-semibold leading-none text-zinc-300"
        >
          <h2 className="text-4xl bg-gradient-to-b from-slate-400 to-gray-300 bg-clip-text text-center font-semibold leading-none text-zinc-300 dark:from-white m-12">
            Instructions
          </h2>
          <ul className="text-xl text-gray-300 list-disc list-inside">
            <li>Add your picture to the public/images folder.</li>
            <li>
              Go to the <code>people.tsx</code> file located at{" "}
              <code>src/components/people.tsx</code>.
            </li>
            <li>Make the following changes:</li>
            <ul className="list-disc list-inside ml-4">
              <li>
                Add a new object to the <code>people</code> array with your
                details.
              </li>
              <li className="mb-8">
                Follow the format provided in the existing objects in the array.
              </li>
            </ul>
          </ul>

          <Instructions />
          <div className="mb-16 "></div>
        </div>
      </div>
    </>
  );
}