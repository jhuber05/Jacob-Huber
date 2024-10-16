"use client";

import AboutLink from "@/app/components/AboutPageLink";
import FaqsLink from "@/app/components/FaqsPageLink";
import LearnMoreLink from "@/app/components/LearnMorePageLink";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start bg-black">
      <div className="w-full flex flex-row justify-end items-center p-4 bg-blue-800 space-x-4">
        <AboutLink />
        <FaqsLink />
        <LearnMoreLink />
      </div>

      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-3xl font-bold text-white">Jacob Huber&apos;s Website</h1>
        <button
          onClick={() => {alert("hello");}}
          className="bg-white text-blue-500 px-4 py-2 rounded-lg mt-4 hover:-translate-y-2 transition duration-500 ease-in-out"
        >
          Say Hi
        </button>
      </div>
    </div>
  );
}