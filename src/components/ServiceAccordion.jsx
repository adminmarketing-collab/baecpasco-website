"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ServiceAccordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-b border-gray-600 transition-all duration-300">
     
      {/* HEADER */}
      <button
        onClick={(e) => {
    e.currentTarget.blur(); // removes focus after click
    setOpen(!open); }}
        className={`flex w-full items-center justify-between py-2 text-left transition-all duration-300
        ${open ? "bg-white px-6 rounded-t-lg" : "bg-transparent px-0"}`}
        

      >
        <h3
          className={`text-2xl font-semibold transition-colors duration-300 ${
            open ? "text-red-600" : "text-white"
          }`}
        >
          {title}
        </h3>

        <ChevronDown
          size={22}
          className={`transition-transform duration-300${
            open ? "rotate-180 text-red-600" : "text-white"
          }`}
        />
      </button>

      {/* CONTENT */}
      {open && (
        <div className="bg-white rounded-b-lg px-6 pb-6 text-gray-800">
          {children}
        </div>
      )}
    </div>
  );
}