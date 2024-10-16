"use client";

import Link from "next/link";

export default function LearnMoreLink() {
  return (
    <Link href="/learn-more" className="bg-white text-blue-500 px-4 py-2 rounded-sm hover:-translate-y-2 transition duration-500 ease-in-out">
      Learn More
    </Link>
  );
}