"use client";

import Link from "next/link";
import AboutLink from "@/app/components/AboutPageLink";
import LearnMoreLink from "@/app/components/LearnMorePageLink";
import FaqsLink from "@/app/components/FaqsPageLink";
import { usePathname } from "next/navigation";


export default function Navbar() {
  const pathname = usePathname();

  const getLinks = () => {
    switch (pathname) {
      case "/about":
        return (
          <>
            <Link href="/">Home</Link>
            <FaqsLink />
            <LearnMoreLink />
          </>
        );
      case "/faqs":
        return (
          <>
            <Link href="/">Home</Link>
            <AboutLink />
            <LearnMoreLink />
          </>
        );
      case "/learn-more":
        return (
          <>
            <Link href="/">Home</Link>
            <AboutLink />
            <FaqsLink />
          </>
        );
      default:
        return (
          <>
            <AboutLink />
            <FaqsLink />
            <LearnMoreLink />
          </>
        );
    }
  };

  return (
    <nav className="w-full flex flex-row justify-end items-center p-4 bg-blue-800 space-x-4">
      {getLinks()}
    </nav>
  );
}