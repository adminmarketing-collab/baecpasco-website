"use client";
import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import article_1_picture_1 from "../../public/img/articles/article_1/1.png";
import article_1_picture_2 from "../../public/img/articles/article_1/2.png";
import article_1_picture_3 from "../../public/img/articles/article_1/3.png";
import article_1_picture_4 from "../../public/img/articles/article_1/4.png";

import article_2_picture_1 from "../../public/img/articles/article_2/1.png";
import article_2_picture_2 from "../../public/img/articles/article_2/2.png";

import article_3_picture_1 from "../../public/img/articles/article_3/1.png";
import article_3_picture_2 from "../../public/img/articles/article_3/2.png";
import article_3_picture_3 from "../../public/img/articles/article_3/3.png";
import Sidewidget from "./Sidewidget";





const News_1 = () => {
  const [isOpen, setOpen] = useState(false);
  const [BlogData, setBlogData] = useState([]);
  useEffect(() => {
    fetch("https://adminmarketing-collab.github.io/becco-articles/news/news_1.json")
      .then((res) => res.json())
      .then((json) =>{
       setBlogData(json);
      })
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);
  return (
    <>
      <div id="merox-blog-area" className="merox-blog-area my-[100px]">
        <div className="container">
          <div className="flex flex-wrap mx-[-12px]">
            <div className="xl:w-8/12 lg:w-8/12 md:w-7/12 sm:w-full xl:pr-[30px] lg:pr-[30px] md:pr-[30px] px-[12px]">



            {BlogData?.SliderpostList?.map((item, i) => (
                <div
                  className="single-blog-wraper mb-[30px] cursor-pointer relative group wow fadeInUp"
                  key={i}
                >
                  <Swiper
                    className="blog-img-slider"
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
                    {item?.Sliderimg.map((item, ii) => (
                      <SwiperSlide key={ii}>
                        <Image
                          className="w-full"
                          src={item?.img}
                          alt="blog-img"
                          width={800}
                          height={600}
                          priority={true}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="single-blog-content p-[30px] shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)]">
                    <div className="blog-date text-white inline-block font-bold uppercase transition-all duration-[0.3s] bg-[#000000] py-[15px] px-[30px] text-[15px] group-hover:bg-[#f90908]">
                      {item.date}
                    </div>
                    <h4>
                      <Link
                        href={item.postlink}
                        className="post-title leading-tight block capitalize font-bold text-[#353858] text-[28px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]"
                      >
                        {item.posttitle}
                      </Link>
                    </h4>

                    <h4 className="post-title leading-tight block capitalize font-bold text-[#353858] text-[20px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]">
                      {item.HeadLine1}
                    </h4>
                    <p className="mt-5">{item?.DescriptionLine1}</p>

                    <h4 className="post-title leading-tight block capitalize font-bold text-[#353858] text-[20px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]">
                      {item.HeadLine2}
                    </h4>
                    <p className="mt-5">{item?.DescriptionLine2}</p>

                    <h4 className="post-title leading-tight block capitalize font-bold text-[#353858] text-[20px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]">
                      {item.HeadLine3}
                    </h4>

                <a  href="https://www.globalvatcompliance.com/globalvatnews/philippines-digital-vat-registration/" target="_blank" className="mt-5 text-[#f90908]">{item?.DescriptionLine3}</a>
                
                    <h4 className="post-title leading-tight block capitalize font-bold text-[#353858] text-[20px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]">
                      {item.HeadLine4}
                    </h4>

                    <p className="mt-5">{item?.DescriptionLine4}</p>

                    <h4 className="post-title leading-tight block capitalize font-bold text-[#353858] text-[20px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]">
                      {item.HeadLine5}
                    </h4>
                    <p className="mt-5">{item?.DescriptionLine5}</p>


                    <h4 className="post-title leading-tight block capitalize font-bold text-[#353858] text-[20px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]">
                      {item.HeadLine6}
                    </h4>
                    <p className="mt-5">{item?.DescriptionLine6}</p>

                    <h4 className="post-title leading-tight block capitalize font-bold text-[#353858] text-[20px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]">
                      {item.HeadLine7}
                    </h4>
                    <p className="mt-5">{item?.DescriptionLine7}</p>

                    <h4 className="post-title leading-tight block capitalize font-bold text-[#353858] text-[20px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]">
                      {item.HeadLine8}
                    </h4>
                    <p className="mt-5">{item?.DescriptionLine8}</p>

                    <h4 className="post-title leading-tight block capitalize font-bold text-[#353858] text-[20px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]">
                      {item.HeadLine9}
                    </h4>
                    <p className="mt-5 ">{item?.DescriptionLine9}</p>


                    <h4 className="post-title leading-tight block capitalize font-bold text-[#353858] text-[20px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]">
                      {item.HeadLine10}
                    </h4>
                    <p className="mt-5">{item?.DescriptionLine10}</p>


                    <h4 className="post-title leading-tight block capitalize font-bold text-[#353858] text-[20px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]">
                      {item.HeadLine11}
                    </h4>
                    <p className="mt-5">{item?.DescriptionLine11}</p>


                    <h4 className="post-title leading-tight block capitalize font-bold text-[#353858] text-[20px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]">
                      {item.HeadLine12}
                    </h4>
                    <p className="mt-5">{item?.DescriptionLine12}</p>


                    <h4 className="post-title leading-tight block capitalize font-bold text-[#353858] text-[20px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]">
                      {item.HeadLine13}
                    </h4>
                    <p className="mt-5">{item?.DescriptionLine13}</p>


                    <h4 className="post-title leading-tight block capitalize font-bold text-[#353858] text-[20px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]">
                      {item.HeadLine14}
                    </h4>
                    <p className="mt-5">{item?.DescriptionLine14}</p>


                    <h4 className="post-title leading-tight block capitalize font-bold text-[#353858] text-[20px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]">
                      {item.HeadLine15}
                    </h4>
                    <p className="mt-5">{item?.DescriptionLine15}</p>

                    <h4 className="post-title leading-tight block capitalize font-bold text-[#353858] text-[20px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]">
                      {item.HeadLine16}
                    </h4>
                    <p className="mt-5">{item?.DescriptionLine16}</p>



                    <h4 className="post-title leading-tight block capitalize font-bold text-[#353858] text-[20px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]">
                      {item.HeadLine17}
                    </h4>

                    <p className="mt-5 ">{item?.DescriptionLine17}</p>

                    <h4 className="post-title leading-tight block capitalize font-bold text-[#353858] text-[20px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]">
                      {item.HeadLine18}
                    </h4>
                    <p className="mt-5">{item?.DescriptionLine18}</p>



                    <h4 className="post-title leading-tight block capitalize font-bold text-[#353858] text-[20px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]">
                      {item.HeadLine19}
                    </h4>
                    <p className="mt-5">{item?.DescriptionLine19}</p>



                    <h4 className="post-title leading-tight block capitalize font-bold text-[#353858] text-[20px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]">
                      {item.HeadLine20}
                    </h4>
                    <p className="mt-5">{item?.DescriptionLine20}</p>

                    {/* <div className="post-info mt-[15px] pt-[15px] border-t-[1px] border-solid border-t-[#e1e1e1]">
                      <Link
                        className="capitalize text-[#353858] font-semibold text-[18px] first:mr-[35px]"
                        href={item.authorlink}
                      >
                        {item.author}
                      </Link>
                      <Link
                        className="capitalize text-[#353858] font-semibold text-[18px]"
                        href={item.commentlink}
                      >
                        {item.comment}
                      </Link>
                    </div> */}
                  </div>
                </div>
              ))}


              {/* <div className="merox-pagination my-[50px]">
                <ul className="pagination flex items-center text-center">
                  <li className="w-[50px] h-[50px] leading-[50px] border-[1px] border-solid border-[#eeeeee]  text-[#f90908] mr-4 hover:bg-[#f90908] hover:text-white transition-all duration-[0.3s] font-semibold font-poppins text-[18px] cursor-pointer">
                    <Link href="#">1</Link>
                  </li>
                  <li className="w-[50px] h-[50px] leading-[50px] border-[1px] border-solid border-[#eeeeee]  text-[#f90908] mr-4 hover:bg-[#f90908] hover:text-white transition-all duration-[0.3s] font-semibold font-poppins text-[18px] cursor-pointer">
                    <Link href="#">2</Link>
                  </li>
                  <li className="w-[50px] h-[50px] leading-[50px] border-[1px] border-solid border-[#eeeeee]  text-[#f90908] mr-4 hover:bg-[#f90908] hover:text-white transition-all duration-[0.3s] font-semibold font-poppins text-[18px] cursor-pointer">
                    <Link href="#">
                      <i className="fa fa-long-arrow-right"></i>
                    </Link>
                  </li>
                </ul>
              </div> */}
            </div>
            {/* <Sidewidget /> */}
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId={BlogData.videoid}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default News_1;
