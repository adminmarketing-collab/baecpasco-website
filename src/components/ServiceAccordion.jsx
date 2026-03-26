"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

const visualThemes = [
  "bg-[linear-gradient(135deg,#1f3b73_0%,#2b4d8d_38%,#4f6eb0_100%)]",
  "bg-[linear-gradient(135deg,#8a6a3f_0%,#b88b55_40%,#e2b97e_100%)]",
  "bg-[linear-gradient(135deg,#4a2437_0%,#6b3550_40%,#9c5677_100%)]",
  "bg-[linear-gradient(135deg,#17474b_0%,#23666c_40%,#4aa0a7_100%)]",
  "bg-[linear-gradient(135deg,#5b2b18_0%,#834227_42%,#b96d45_100%)]",
  "bg-[linear-gradient(135deg,#3a275b_0%,#5b3f86_40%,#8565b8_100%)]",
  "bg-[linear-gradient(135deg,#1f3c32_0%,#305b4d_42%,#5a8b7c_100%)]",
];

export default function ServiceAccordion({
  title,
  summary,
  children,
  index = 0,
  imageSrc,
  imageClassName = "object-[center_22%]",
}) {
  const [open, setOpen] = useState(false);
  const visualTheme = useMemo(
    () => visualThemes[index % visualThemes.length],
    [index]
  );
  const imageFirst = index % 2 === 0;

  return (
    <article className="overflow-hidden bg-white">
      <div className="grid items-stretch md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className={`relative min-h-[240px] overflow-hidden md:min-h-[360px] lg:min-h-[390px] xl:min-h-[390px] ${visualTheme} ${
            imageFirst
              ? "md:order-1 lg:order-1 xl:order-1"
              : "md:order-2 lg:order-2 xl:order-2"
          }`}
        >
          {imageSrc ? (
            <>
              <Image
                src={imageSrc}
                alt={title}
                fill
                className={`object-cover ${imageClassName}`}
                sizes="(max-width: 767px) 100vw, 50vw"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(24,35,61,0.2),rgba(24,35,61,0.05))]" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.24),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.16),transparent_28%)]" />
              <div className="absolute inset-y-0 right-0 w-1/2 translate-x-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0))] blur-2xl" />
            </>
          )}

          <div className="relative z-10 h-full p-6 md:p-8 lg:p-10" />
        </button>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className={`flex min-h-[240px] w-full flex-col justify-between bg-transparent p-7 text-left md:min-h-[360px] md:px-10 md:py-10 lg:min-h-[390px] lg:px-14 lg:py-12 xl:min-h-[390px] xl:px-14 xl:py-12 ${
            imageFirst
              ? "md:order-2 lg:order-2 xl:order-2"
              : "md:order-1 lg:order-1 xl:order-1"
          }`}
        >
          <div className="group flex h-full w-full flex-col text-left">
            <div className="max-w-[30rem] pt-8 md:pt-12 lg:mx-auto lg:pt-14 xl:mx-auto">
              <h3 className="text-[1.75rem] font-semibold uppercase leading-[1.05] tracking-[0.02em] text-[#18233d] md:text-[2rem] lg:text-[2.2rem]">
                {title}
              </h3>
              <p className="mt-6 max-w-[30rem] text-[15px] leading-7 text-[#50596b] md:text-base md:leading-8">
                {summary}
              </p>
            </div>

            <span className="mt-auto flex h-12 w-12 items-center justify-center self-end bg-white text-[#18233d] transition-colors duration-300 group-hover:bg-[#efe7da]">
              <ChevronDown
                size={22}
                className={`transition-transform duration-300 ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              />
            </span>
          </div>
        </button>
      </div>

      <div
        className={`grid transition-[grid-template-rows,margin] duration-500 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-[#d9d0c3] bg-white px-7 py-7 text-[#50596b] md:px-10 lg:px-14 lg:py-10">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}
