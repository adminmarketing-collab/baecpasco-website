"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ServiceAccordion({ title, children }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  const handleContentClick = (event) => {
    const interactiveTarget = event.target.closest(
      "a, button, input, textarea, select, label"
    );

    if (interactiveTarget) return;
    setOpen(false);
  };

  return (
    <div className="transition-all duration-300">
      <button
        onClick={(e) => {
          e.currentTarget.blur();
          toggleOpen();
        }}
        className={`flex w-full items-center justify-between gap-4 py-3 text-left transition-all duration-300 md:py-4
        ${open ? "rounded-t-lg bg-white px-4 md:px-6" : "bg-transparent px-0"}`}
      >
        <h3
          className={`text-xl font-semibold leading-snug transition-colors duration-300 md:text-2xl ${
            open ? "text-red-600" : "text-white"
          }`}
        >
          {title}
        </h3>

        <ChevronDown
          size={20}
          className={`transition-transform duration-300 ${
            open ? "rotate-180 text-red-600" : "text-white"
          }`}
        />
      </button>

      {open && (
        <div
          className="cursor-pointer rounded-b-lg bg-white px-4 pb-6 text-gray-800 md:px-6"
          onClick={handleContentClick}
        >
          {children}
        </div>
      )}
    </div>
  );
}
