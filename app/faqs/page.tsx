"use client";

export default function Faqs() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-black">
      <h1 className="text-3xl font-bold text-white">FAQs</h1>
      <button onClick={()=>{alert("hello");}} className="bg-white text-blue-500 px-4 py-2 rounded-sm mt-4 hover:-translate-y-2 transistion duration-500 ease-in-out">
        Say Hi
      </button>
    </div>
  );
}