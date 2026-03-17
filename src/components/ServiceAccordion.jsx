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
    <div className="service-accordion-shell -mx-2 md:-mx-4 transition-all duration-300">
      <button
        onClick={(e) => {
          e.currentTarget.blur();
          toggleOpen();
        }}
        className={`flex w-full items-center justify-between gap-4 py-3 text-left transition-all duration-300 md:py-4
        ${open ? "bg-white px-6 md:px-8" : "bg-transparent px-2 md:px-4"}`}
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
          className="cursor-pointer bg-white px-6 pb-6 text-gray-800 md:px-8"
          onClick={handleContentClick}
        >
          {children}
        </div>
      )}

      <style jsx>{`
        .service-accordion-shell:hover {
          box-shadow: 0 0 22px rgba(255, 255, 255, 0.18);
        }
      `}</style>
    </div>
  );
}
