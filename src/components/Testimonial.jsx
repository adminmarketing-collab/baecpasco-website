"use client";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import React from "react";

import "swiper/css";
import "swiper/css/pagination";

const TestimonialData = {
  title: "TESTIMONIALS",
  title2: "CLIENT’S SAY",
  TesstimonialList: [
    {
      title: "Anonymous",
      brief:
        "I’ve tried other bookkeeping services before, but BALAGOT & Co. is the best. I’ve been with them since 2014. They reply fast, usually within minutes, and are always ready to help. My books are always updated early each month. I highly recommend them for any business, big or small",
    },
    {
      title: "Anonymous",
      brief:
        "On our 23rd year in business, we were lucky to find an accounting firm that patiently guided us with our tax concerns and BSP reports. Thank you, Balagot & Emperado CPA’s Co.—keep up the great work!",
    },
  ],
};

const Testimonial = () => {
  return (
    <div
      id="merox-testimonial-area"
      className="merox-testimonial-area py-[60px] md:py-[80px] wow fadeInUp"
    >
      {/* HEADER */}
      <div className="container mb-10">
        <h4 className="uppercase font-medium text-[20px] relative pl-[30px] mb-[15px]
          before:bg-[#f90908] before:h-[2px] before:w-5 before:absolute before:left-0 before:top-[11px]">
          {TestimonialData.title}
        </h4>

        <h3 className="text-[50px] font-bold leading-[49px] uppercase">
          {TestimonialData.title2}
        </h3>
      </div>

      {/* SLIDER */}
      <div className="container">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={2}
          spaceBetween={40}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          autoplay={{ delay: 4500 }}
          loop
          pagination={{ clickable: true }}
          speed={900}
        >
          {TestimonialData.TesstimonialList.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="flex items-start gap-4">
                
               {/* ICON: black user behind, red ring in front (guaranteed) */}
<span className="relative w-[22px] h-[22px] flex-shrink-0 mt-[4px]">
  {/* black user (behind) */}
  <span className="absolute inset-0 rounded-full bg-white overflow-hidden flex items-start justify-center pt-[3px] z-[1]">
    <i className="fa fa-user text-black text-[10px] leading-none" />
  </span>

  {/* red ring (front) - SVG so it will NEVER disappear */}
  <svg
    className="absolute inset-0 z-[5] pointer-events-none"
    viewBox="0 0 22 22"
    fill="none"
  >
    <circle
      cx="11"
      cy="11"
      r="9"
      stroke="#f90908"
      strokeWidth="3"
    />
  </svg>
</span>

                {/* TEXT */}
                <div>
                  <p className="text-[#6b7280] leading-relaxed mb-4">
                    {item.brief}
                  </p>

                  <h4 className="font-bold text-[#24262d] text-[20px]">
                    {item.title}
                  </h4>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
