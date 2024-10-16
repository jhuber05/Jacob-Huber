"use client";

import Link from "next/link";

export default function FaqsLink() {
  return (
    <Link href="/faqs" className="bg-blue text-white-500 px-4 py-2 rounded-sm hover:-translate-y-2 transition duration-500 ease-in-out">
      FAQs
    </Link>
  );
}