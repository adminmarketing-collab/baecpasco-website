"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import bgimg from "../../public/img/slider/slider-1.png";
import bgimg2 from "../../public/img/slider/slider-2.png";

const HeroDataa = {
  HeroList: [
    {
      title: "always top rated",
      title2: "Empowering Businesses.",
      brief: (
        <>
          <p className="text-white">
            At Balagot & Emperado CPA&apos;s Co., we are more than just a
            financial services firm. We are your trusted partners in achieving
            sustainable growth beyond the financials.
          </p>
          <p className="mt-4 text-white">
            With a steadfast commitment to accuracy, integrity, and strategic
            insight, we empower businesses and individuals to navigate the
            complexities of financial management with confidence and clarity.
          </p>
        </>
      ),
      btntext: "get started",
      btnlink: "/contact",
      btntext2: "learn more",
      btnlink2: "/about",
      bgimg,
    },
    {
      title: "always top rated",
      title2: "Elevating Futures.",
      brief:
        "Our approach is rooted in excellence, adaptability, and collaboration, ensuring that every client receives personalized solutions tailored to their unique needs. As we embark on a new chapter of expansion, we remain dedicated to delivering expert guidance and unparalleled service, fostering long-term partnerships that drive success.",
      btntext: "get started",
      btnlink: "/contact",
      btntext2: "learn more",
      btnlink2: "/about",
      bgimg: bgimg2,
    },
  ],
};

const Hero = () => {
  return (
    <div
      id="merox-slider-area"
      className="merox-slider-area slider-area-bg relative"
    >
      <Swiper
        className="merox-main-slider"
        modules={[Pagination, Autoplay]}
        slidesPerView="auto"
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 1 },
          992: { slidesPerView: 1 },
          1200: { slidesPerView: 1 },
        }}
        autoplay
        allowTouchMove
        loop
        pagination={{
          clickable: true,
        }}
        speed={1000}
      >
        {HeroDataa.HeroList.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="merox-single-slider relative min-h-[680px] md:min-h-[760px] xl:h-[868px] before:absolute before:left-0 before:top-0 before:z-[1] before:h-full before:w-full before:bg-[#0000004d] before:content-['']">
              <Image
                src={item.bgimg}
                alt={item.title2}
                fill
                priority={i === 0}
                quality={85}
                sizes="100vw"
                className="slid-bg-1 object-cover transition-all duration-[5000ms] ease-linear"
              />

              <div className="merox-single-table relative z-[2] table h-full w-full">
                <div className="merox-single-tablecell table-cell align-middle">
                  <div className="container py-28 md:py-32 xl:py-0">
                    <div className="mx-[-12px] flex flex-wrap">
                      <div className="xsm:w-full flex-[0_0_auto] px-[12px] sm:w-full md:w-full lg:w-11/12 xl:w-8/12">
                        <div className="merox-slider-area-content mt-[72px] max-w-4xl md:mt-[87px]">
                          <h4 className="relative mb-5 inline-block bg-[#f90908] py-3 pl-6 pr-4 text-lg font-bold capitalize text-white opacity-0 transition-all duration-[700ms] ease-linear before:absolute before:left-full before:top-0 before:-ml-[1px] before:border-b-[14px] before:border-r-[18px] before:border-r-transparent before:border-solid after:absolute after:bottom-0 after:left-full after:-ml-[1px] after:h-[44px] after:w-[18px] after:bg-[#f90908] after:content-[''] md:py-4 md:pl-8 md:pr-5 md:text-[22px] xl:py-5 xl:pl-10 xl:pr-[18px] xl:text-[24px]">
                            {item.title}
                          </h4>

                          <div className="bg-black/50 p-4 md:p-6 xl:p-8">
                            <h2 className="mb-5 text-[36px] font-bold capitalize text-white opacity-0 transition-all duration-[500ms] ease-linear md:text-[48px] lg:text-[54px] xl:text-[58px]">
                              {item.title2}
                            </h2>
                            <div className="text-base leading-7 text-white transition-all duration-[500ms] ease-linear md:text-lg md:leading-8">
                              {item.brief}
                            </div>

                            <div className="slider-area-btn mt-8 flex flex-wrap gap-4 md:mt-10">
                              <Link
                                href={item.btnlink}
                                className="btn btn-2 opacity-0 transition-all duration-[500ms] ease-linear"
                              >
                                {item.btntext}
                                <i className="fa fa-long-arrow-right"></i>
                              </Link>
                              <Link
                                href={item.btnlink2}
                                className="btn btn-3 opacity-0 transition-all duration-500 ease-[ease]"
                              >
                                {item.btntext2}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
