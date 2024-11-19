"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function LearnMore() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-start bg-black text-white">
      <Navbar />
      <h1 className="text-3xl font-bold mt-6">Learn More</h1>
      <div className="mt-8 px-6 max-w-4xl text-left">
        <h2 className="text-2xl font-semibold">Jacob Huber</h2>
        <p>Edwardsville, IL | (618) 954-4844 | <a href="mailto:jdhhuber@gmail.com" className="text-blue-400">jdhhuber@gmail.com</a></p>

        <h3 className="text-xl font-semibold mt-6">Summary</h3>
        <p>
          Second-year student studying Computer Science with an emphasis in data science. Knowledge in Python, C++, HTML, and Java. Pursuing internships for Summer 2025 specializing in data science, web development, or computer security.
        </p>

        <h3 className="text-xl font-semibold mt-6">Education</h3>
        <ul className="list-disc ml-6">
          <li>University of Mississippi (Ole Miss), GPA: 3.74</li>
          <li>B.S. in Computer Science (Data Science) – Graduating May 2027</li>
          <li>Chancellor’s List, Sally McDonnell Barksdale Honors College</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">Experience</h3>
        <ul className="list-disc ml-6">
          <li>
            <strong>Ukon Labs</strong> (IT Design and Development) – Subcontractor, Oct 2024 - Present
            <p className="ml-4">Built websites and developed organized, efficient web solutions.</p>
          </li>
        </ul>
        {/* Add other sections as needed */}
      </div>
      <Footer />
    </div>
  );
}