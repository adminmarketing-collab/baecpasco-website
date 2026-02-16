"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import bgimg from "../../public/img/video/video-bg.png";

const VideoData = {
  title: "OUR",
  title2: "SERVICES",
  bgimg,
};

export default function Video() {
  const videoRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true); // autoplay must start muted
  const [isPlaying, setIsPlaying] = useState(true);

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      // user interaction -> allow sound now
      video.muted = false;
      video.volume = 1;
      setIsMuted(false);
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoaded = () => setDuration(video.duration || 0);

    const onTimeUpdate = () => {
      if (!isSeeking) setCurrentTime(video.currentTime || 0);
    };

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, [isSeeking]);

  const seekTo = (time) => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(time)) return;
    video.currentTime = time;
    setCurrentTime(time);
  };

  return (
    <section
      id="merox-video-area"
      className="relative pt-48 pb-24 bg-[#24262d] overflow-hidden"
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
            <div className="ml-auto relative w-full max-w-[720px] aspect-[21/9] translate-x-6 lg:translate-x-12 rounded-[20px] overflow-hidden bg-black shadow-lg">
              {/* Video */}
              <video
                ref={videoRef}
                id="services-video"
                src="/video/services-v2.mp4"
                autoPlay
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
                poster="/img/video/video-bg.png"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* ✅ CLICK-CATCHER LAYER (covers entire video, like YouTube) */}
              {/* Put this ABOVE the video, BELOW the slider */}
              <button
                type="button"
                onClick={togglePlayPause}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                className="absolute inset-0 z-10 cursor-pointer"
                style={{ background: "transparent" }}
              />

              {/* Center play icon when paused (does NOT block clicks) */}
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                {!isPlaying && (
                  <div className="bg-black/60 text-white w-16 h-16 rounded-full flex items-center justify-center backdrop-blur">
                    ▶
                  </div>
                )}
              </div>

              {/* ✅ Timeline (above click-catcher) */}
              <div className="absolute left-0 right-0 bottom-0 z-30 px-4 pb-3">
                <input
                  type="range"
                  min={0}
                  max={duration || 0}
                  step={0.01}
                  value={Math.min(currentTime, duration || 0)}
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    setIsSeeking(true);
                  }}
                  onMouseUp={(e) => {
                    e.stopPropagation();
                    setIsSeeking(false);
                  }}
                  onTouchStart={(e) => {
                    e.stopPropagation();
                    setIsSeeking(true);
                  }}
                  onTouchEnd={(e) => {
                    e.stopPropagation();
                    setIsSeeking(false);
                  }}
                  onClick={(e) => e.stopPropagation()} // prevent toggling play/pause
                  onChange={(e) => seekTo(parseFloat(e.target.value))}
                  className="w-full h-1 rounded-full accent-[#f90908] cursor-pointer opacity-95"
                  aria-label="Seek video"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
