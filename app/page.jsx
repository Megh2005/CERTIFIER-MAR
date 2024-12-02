"use client";
import { Vortex } from "@/components/ui/vortex";
import { useRouter } from "next/navigation";
import React from "react";

export default function VortexDemoSecond() {
  const router = useRouter();
  const guide = async () => {
    router.push("/login");
  }


  return (
    (<div
      className="w-[100vw] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={900}
        particleCount={1000}
        baseHue={70}
        className="flex items-center flex-col justify-center  py-4 w-screen h-screen">
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Do You Have Lack of Certificates ?
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button onClick={guide} className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            Explore More
          </button>
        </div>
      </Vortex>
    </div>)
  );
}
