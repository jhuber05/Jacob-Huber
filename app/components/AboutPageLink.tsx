"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutLink() {
  return (
    
    <Link href="/about" className="bg-white text-blue-500 px-4 py-2 rounded-sm mt-4 hover:-translate-y-2 transistion duration-500 ease-in-out">
        About Page
    </Link>
      
  );
}