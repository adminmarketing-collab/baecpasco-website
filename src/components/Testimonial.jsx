"use client";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import React from "react";
import logo from "../../public/img/logo-1.png";

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
      <div className="container mb-10">
        <h4 className="uppercase font-medium text-[20px] 
           before:w-5 before:absolute before:left-0 before:top-[11px]">
          {TestimonialData.title}
        </h4>

        <h3 className="text-[50px] font-bold leading-[49px] uppercase">
          {TestimonialData.title2}
        </h3>
      </div>

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
                <span className="relative mt-[4px] h-[26px] w-[26px] flex-shrink-0">
                  <span className="absolute inset-0 z-[1] overflow-hidden rounded-full bg-white flex items-center justify-center p-[3px]">
                    <Image
                      src={logo}
                      alt="BAECPASCO logo"
                      width={18}
                      height={18}
                      className="h-[18px] w-[18px] object-contain"
                    />
                  </span>

                  <svg
                    className="pointer-events-none absolute inset-0 z-[5]"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <circle cx="13" cy="13" r="11" stroke="#f90908" strokeWidth="3" />
                  </svg>
                </span>

                <div>
                  <p className="mb-4 leading-relaxed text-[#6b7280]">
                    {item.brief}
                  </p>

                  <h4 className="text-[20px] font-bold text-[#24262d]">
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
