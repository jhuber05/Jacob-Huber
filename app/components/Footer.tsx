"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-800 text-white flex flex-col items-center justify-center py-6 mt-12">
      <Image src="/olemiss-logo.jpeg" alt="Ole Miss Logo" width={150} height={150} />
      <p className="mt-4">Jacob Huber | (618) 954-4844 | <a href="mailto:jdhhuber@gmail.com" className="text-blue-400">jdhhuber@gmail.com</a></p>
    </footer>
  );
}