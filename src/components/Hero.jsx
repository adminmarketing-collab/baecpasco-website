"use client";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import bgimg from "../../public/img/slider/slider-1.png";
import bgimg2 from "../../public/img/slider/slider-2.png";
import Link from "next/link";

const HeroDataa = {
  HeroList: [
    {
      title: "always top rated",
      title2: 'Empowering Businesses.',
      brief:
        "At Balagot & Emperado CPA’s Co., we are more than just a financial services firm—we are your trusted partners in achieving sustainable growth beyond the financials. With a steadfast commitment to accuracy, integrity, and strategic insight, we empower businesses and individuals to navigate the complexities of financial management with confidence and clarity.",
      btntext: "get started",
      btnlink: "/contact",
      btntext2: "learn more",
      btnlink2: "/about",
      bgimg: bgimg,
    },
    {
      title: "always top rated",
      title2:
        'Elevating Futures.',
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
    <>
      <div
        id="merox-slider-area"
        className="merox-slider-area slider-area-bg relative"
      >
        <Swiper
          className="merox-main-slider"
          modules={[Pagination, Autoplay]}
          slidesPerView="auto"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 1,
            },
            1200: {
              slidesPerView: 1,
            },
          }}
          autoplay={true}
          allowTouchMove={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          speed={1000}
        >
          {HeroDataa.HeroList.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className="merox-single-slider relative bg-no-repeat bg-center bg-cover h-[868px] before:content-[''] before:bg-[#0000004d] before:left-0 before:top-0 before:w-full before:h-full before:absolute"
                key={i}
              >
                <div
                  className="slid-bg-1 absolute left-0 top-0 w-full h-full bg-no-repeat bg-center bg-cover scale-[1] transition-all duration-[5000ms] ease-linear"
                  style={{ backgroundImage: `url(${item.bgimg.src})` }}
                ></div>
                <div className="merox-single-table table h-full w-full">
                  <div className="merox-single-tablecell table-cell align-middle">
                    <div className="container">
                      <div className="flex flex-wrap mx-[-12px]">
                        <div className="xl:w-8/12 lg:w-10/12 md:w-full sm:w-full xsm:w-full px-[12px] flex-[0_0_auto]">
                          <div className=" merox-slider-area-content mt-[87px]">
                            <h4 className="text-white capitalize bg-[#f90908] inline-block py-5 pr-[18px] pl-10 font-bold text-[24px] mb-5 relative opacity-0 -translate-x-[100px] transition-all duration-[700ms] ease-linear before:content-[''] before:absolute before:left-full before:-ml-[1px] before:top-0 before:border-r-[22px] before:border-solid before:border-r-transparent before:border-b-[18px] before:border-bg-[#f90908] after:content-[''] after:absolute after:left-full after:-ml-[1px] after:bottom-0 after:w-[22px] after:h-[55px] after:bg-[#f90908]">
                              {item.title}
                            </h4>

                            <div className="bg-black  p-2 bg-opacity-50">
                            <h2
                              className=" text-[58px] text-white capitalize font-bold mb-5 opacity-0 -translate-x-[100px] transition-all duration-[500ms] ease-linear md:text-[50px] sm:text-[45px]"
                            // dangerouslySetInnerHTML={{ __html: item.title2 }}
                            >{item.title2}</h2>
                            <p className=" text-white text-[18px] mb-[30px] leading-[1.8] opacity-0 -translate-y-[100px] transition-all duration-[500ms] ease-linear">
                              {item.brief}
                            </p>

                            <div className="slider-area-btn ">
                              <Link
                                href={item.btnlink}
                                className="btn btn-2 opacity-0 translate-x-[100px] transition-all duration-[500ms] ease-linear"
                              >
                                {item.btntext}
                                <i className="fa fa-long-arrow-right"></i>
                              </Link>
                              <Link
                                href={item.btnlink2}
                                className="btn btn-3 opacity-0 translate-x-[100px] transition-all duration-500 ease-[ease]"
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
    </>
  );
};

export default Hero;
