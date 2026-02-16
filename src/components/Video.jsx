"use client";
import React from "react";
import bgimg from "../../public/img/video/video-bg.png";
import Image from "next/image";

const VideoData = {
  title: "OUR",
  title2: "SERVICES",
  bgimg: bgimg,
};

const Video = () => {
  return (
    <section
      id="merox-video-area"
      className="relative pt-48 pb-24 bg-[#24262d] overflow-hidden" // ✅ pt-40 -> pt-48 (moves video down)
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={VideoData.bgimg}
          alt="video-bg"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "10% center" }}
        />
        <div className="absolute inset-0 bg-[#24262d] opacity-35"></div>
      </div>

      {/* ✅ lower z-index so header dropdown always wins */}
      <div className="container relative z-0">
        <div className="flex flex-wrap items-start gap-y-10">
          {/* LEFT: Titles */}
          <div className="w-full lg:w-5/12 order-2 lg:order-1 relative -top-64">
            <div className="section-title lite">
              <h4
                className="text-white uppercase font-medium text-[20px] relative pl-[30px] mb-[15px]
                before:bg-[#f90908] before:h-[2px] before:w-5 before:content-['']
                before:absolute before:left-0 before:top-[11px]"
              >
                {VideoData.title}
              </h4>

              <h3 className="text-white text-[50px] font-bold leading-[49px] uppercase">
                {VideoData.title2}
              </h3>
            </div>
          </div>

          {/* RIGHT: Video */}
          <div className="w-full lg:w-7/12 order-1 lg:order-2">
            <div className="ml-auto relative w-full max-w-[680px] aspect-video translate-x-6 lg:translate-x-12 rounded-[20px] overflow-hidden bg-black shadow-lg">
             <video
  src="/video/services-v2.mp4"
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  poster="/img/video/video-bg.png"
  className="absolute inset-0 w-full h-full object-cover"
  onError={() => console.log("VIDEO ERROR CODE:", document.querySelector("video")?.error)}
  onCanPlay={() => console.log("VIDEO can play now")}
 />


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
