"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start bg-black">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-3xl font-bold text-white">Jacob Huber&apos;s Website</h1>
        <button
          onClick={() => {alert("hello");}}
          className="bg-white text-blue-500 px-4 py-2 rounded-lg mt-4 hover:-translate-y-2 transition duration-500 ease-in-out"
        >
          Say Hi
        </button>
      </div>
      <Footer />
    </div>
    
  );
}