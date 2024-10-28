"use client";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";

export default function About() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-custom-blue ">
      <Navbar />
      <h1 className="text-3xl font-bold text-white">Jacob Huber&apos;s About Page</h1>
      <button onClick={()=>{alert("hello");}} className="bg-white text-blue-500 px-4 py-2 rounded-sm mt-4 hover:-translate-y-2 transistion duration-500 ease-in-out">
        Say Hi
      </button>
      <Image src="/deltapsi.jpeg" width={500} height={500} className="h-[50px] w-[100px] opacity-50" alt="Image of Delta Psi"/> 
      <div className="w-full h-[500px] bg-white md:bg-blue-400 lg:bg-black"/>  
    </div>
  );
}