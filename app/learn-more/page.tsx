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
          <li>
            <strong>CLEAN Uniform</strong> (Industrial Laundromat) – Utility  Start/End Summer 2021
            <p className="ml-4">Kept working floor clean, alerted engineers if something was broken or malfunctioning, and maintained the building perimeter.</p>
          </li>
        </ul>
        {/* Add other sections as needed */}
        <h3 className="text-xl font-semibold mt-6">High School Athletics</h3>
        <ul className="list-disc ml-6">
          <li>
            <strong>Track and Field</strong> – (Winter 2020 - Summer 2023)
          </li>
          <li>
            <strong>Basketball</strong> – (Winter 2019 - Spring 2023)
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-6">Relevant Coursework</h3>
        <ul className="list-disc ml-6">
          <li>
            <strong>Intro of Java Language</strong> 
          </li>
          <li>
            <strong>Advanced data structures and algorithm design analysis in Java</strong> 
          </li>
          <li>
            <strong>Honors Calculus I, II, III</strong> 
          </li>
          <li>
            <strong>Intro of Python Language</strong> 
          </li>
          <li>
            <strong>Intro and data structures of C++ Language</strong> 
          </li>
          <li>
            <strong>Honors Physics</strong> 
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-6">Honors and Activities</h3>
        <ul className="list-disc ml-6">
          <li>
            <strong>Student Body President</strong>
          </li>
          <li>
            <strong>Student Ambassador</strong>
          </li>
          <li>
            <strong>Illinois State Scholar</strong>
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-6">Athletic Achievement</h3>
        <ul className="list-disc ml-6">
          <li>
            <strong>5x State Qualifier</strong> (Track and Field)
          </li>
          <li>
            <strong>1x All-State Honors</strong> (Track and Field)
          </li>
          <li>
            <strong>1x Area Athlete of the Year</strong> (Track and Field)
          </li>
          <li>
            <strong>3x All-Conference Honors</strong> (Track and Field)
          </li>
          <li>
            <strong>2x All-Conference Honors</strong> (Basketball)
          </li>
        </ul>
      </div>
      
      <Footer />
    </div>
  );
}