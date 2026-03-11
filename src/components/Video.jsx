"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Volume2, VolumeX } from "lucide-react";
import bgimg from "../../public/img/video/video-bg.png";

const VideoData = {
  title: "OUR",
  title2: "SERVICES",
  bgimg,
};

export default function Video() {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const togglePlayPause = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
        setShowControls(true);
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (event) => {
    event.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryAutoplay = async () => {
      try {
        video.muted = true;
        setIsMuted(true);
        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
        setShowControls(true);
      }
    };

    const onLoaded = () => setDuration(video.duration || 0);
    const onTimeUpdate = () => {
      if (!isSeeking) setCurrentTime(video.currentTime || 0);
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onVolumeChange = () => setIsMuted(video.muted);
    const onError = () => setShowControls(true);

    tryAutoplay();
    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("volumechange", onVolumeChange);
    video.addEventListener("error", onError);

    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("volumechange", onVolumeChange);
      video.removeEventListener("error", onError);
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
      className="relative overflow-hidden bg-[#24262d] pb-16 pt-32 z-[1] md:pb-20 md:pt-36 xl:pb-24 xl:pt-48"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={VideoData.bgimg}
          alt="video-bg"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center 35%" }}
        />
        <div className="absolute inset-0 bg-[#24262d] opacity-35"></div>
      </div>

      <div className="container relative z-0">
        <div className="flex flex-col items-center gap-8 md:gap-10 xl:flex-row xl:items-center xl:gap-y-10">
          <div className="order-1 w-full text-center xl:order-1 xl:w-5/12 xl:-translate-y-6 xl:text-left">
            <div className="section-title lite mx-auto max-w-xl xl:mx-0">
              <h4 className="mb-2 text-xl font-medium uppercase text-white md:text-[24px] xl:mb-2 xl:text-[28px]">
                {VideoData.title}
              </h4>

              <h3 className="text-3xl font-bold uppercase leading-tight text-white md:text-4xl xl:text-[50px] xl:leading-[49px]">
                {VideoData.title2}
              </h3>
            </div>
          </div>

          <div className="order-2 flex w-full justify-center xl:w-7/12 xl:justify-end">
            <div className="relative aspect-[21/9] w-full max-w-[720px] overflow-hidden rounded-[20px] bg-black shadow-lg xl:translate-x-12">
              <video
                ref={videoRef}
                id="services-video"
                autoPlay
                muted={isMuted}
                loop
                playsInline
                controls={showControls}
                preload="auto"
                poster="/img/video/video-bg.png"
                className="absolute inset-0 h-full w-full object-cover xl:object-[center_35%]"
              >
                <source src="/video/services-v2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <button
                type="button"
                onClick={togglePlayPause}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                className="absolute inset-0 z-10 cursor-pointer"
                style={{ background: "transparent" }}
              />

              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur transition hover:bg-black/70"
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>

              <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
                {!isPlaying && !showControls && (
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur">
                    Play
                  </div>
                )}
              </div>

              <div className="absolute bottom-0 left-0 right-0 z-30 px-4 pb-3">
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
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => seekTo(parseFloat(e.target.value))}
                  className="h-1 w-full cursor-pointer rounded-full accent-[#f90908] opacity-95"
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
