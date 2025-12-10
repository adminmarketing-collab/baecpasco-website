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

const BlogData = {
  videoid: "snvzakfcTmY",

  SliderpostList: [
    {
      date: "August 2025",
      posttitle: " Balagot & Emperado CPAs Co. Expands with the Opening of Samal Branch",
      postlink: "/article_1",
      HeadLine1: '',
      DescriptionLine1: "Island Garden City of Samal, August 8, 2025 — Growth, gratitude, and new beginnings marked the day as Balagot & Emperado CPAs Co. (BECC) officially opened and blessed its newest branch in the picturesque Island Garden City of Samal.",
      HeadLine2: '',
      DescriptionLine2: "The celebration began with a solemn blessing led by Rev. Fr. Fernando Cabilan Jr., FFM, filling the morning with heartfelt prayers and a sense of shared hope for the future. The occasion was graced by clients, partners, friends, and members of the BECC family, all of whom brought their warmth, support, and joy to the milestone event.",
      HeadLine3: '',
      DescriptionLine3: "",
      HeadLine4: '',
      DescriptionLine4: "The opening of the Samal branch is a significant step in BECC’s mission to bring trusted professional services closer to communities, while expanding its reach both locally and internationally. With this new office, BECC is not only investing in infrastructure but also strengthening its commitment to providing quality, client-focused, and globally competitive services.",
      HeadLine5: '',
      DescriptionLine5: "",
      HeadLine6: '',
      DescriptionLine6: "“This is more than just an office opening,” shared the BECC leadership team. “It is a symbol of our growth, our resilience, and our dedication to serving clients with excellence—whether here in Samal or across the globe.”",
      HeadLine7: '',
      DescriptionLine7: "As the company looks ahead, the Samal branch stands as a testament to BECC’s continuous journey of expansion, innovation, and service excellence.",
      HeadLine8: '',
      DescriptionLine8: "",
      HeadLine9: '',
      DescriptionLine9: "",
      HeadLine10: '',
      DescriptionLine10: "",
      HeadLine11: '',
      DescriptionLine11: "",
      HeadLine12: '',
      DescriptionLine12: "",
      HeadLine13: '',
      DescriptionLine13: "",
      HeadLine14: '',
      DescriptionLine14: "",
      HeadLine15: '',
      DescriptionLine15: "",
      HeadLine16: '',
      DescriptionLine16: "",
      HeadLine17: '',
      DescriptionLine17: "",
      HeadLine18: '',
      DescriptionLine18: "",
      HeadLine19: '',
      DescriptionLine19: "",
      HeadLine20: '',
      DescriptionLine20: "",
      author: "by admin",
      authorlink: "#",
      comment: "1 Comments",
      commentlink: "#",
      Sliderimg: [
        {
          img: article_1_picture_1,
        },
        {
          img: article_1_picture_2,
        },
        {
          img: article_1_picture_3,
        },
        {
          img: article_1_picture_4,
        },
      ],
    },
  ],
};

const BlogData2 = {
  videoid: "snvzakfcTmY",

  SliderpostList: [
    {
      date: "",
      posttitle: "",
      postlink: "/article_3",
      HeadLine1: '',
      DescriptionLine1: "",
      HeadLine2: '',
      DescriptionLine2: "",
      HeadLine3: '',
      DescriptionLine3: "",
      HeadLine4: '',
      DescriptionLine4: "",
      HeadLine5: '',
      DescriptionLine5: "",
      HeadLine6: '',
      DescriptionLine6: "",
      HeadLine7: '',
      DescriptionLine7: "",
      HeadLine8: '',
      DescriptionLine8: "",
      HeadLine9: '',
      DescriptionLine9: "",
      HeadLine10: '',
      DescriptionLine10: "",
      HeadLine11: '',
      DescriptionLine11: "",
      HeadLine12: '',
      DescriptionLine12: "",
      HeadLine13: '',
      DescriptionLine13: "",
      HeadLine14: '',
      DescriptionLine14: "",
      HeadLine15: '',
      DescriptionLine15: "",
      HeadLine16: '',
      DescriptionLine16: "",
      HeadLine17: '',
      DescriptionLine17: "",
      HeadLine18: '',
      DescriptionLine18: "",
      HeadLine19: '',
      DescriptionLine19: "",
      HeadLine20: '',
      DescriptionLine20: "",
      author: "by admin",
      authorlink: "#",
      comment: "1 Comments",
      commentlink: "#",
      Sliderimg: [
        {
          img: '',
        },
        {
          img: '',
        },
        {
          img: '',
        },
      ],
    },
  ],
};

const BlogData3 = {
  videoid: "snvzakfcTmY",

  SliderpostList: [
    {
      date: "",
      posttitle: "",
      postlink: "/article_3",
      HeadLine1: '',
      DescriptionLine1: "",
      HeadLine2: '',
      DescriptionLine2: "",
      HeadLine3: '',
      DescriptionLine3: "",
      HeadLine4: '',
      DescriptionLine4: "",
      HeadLine5: '',
      DescriptionLine5: "",
      HeadLine6: '',
      DescriptionLine6: "",
      HeadLine7: '',
      DescriptionLine7: "",
      HeadLine8: '',
      DescriptionLine8: "",
      HeadLine9: '',
      DescriptionLine9: "",
      HeadLine10: '',
      DescriptionLine10: "",
      HeadLine11: '',
      DescriptionLine11: "",
      HeadLine12: '',
      DescriptionLine12: "",
      HeadLine13: '',
      DescriptionLine13: "",
      HeadLine14: '',
      DescriptionLine14: "",
      HeadLine15: '',
      DescriptionLine15: "",
      HeadLine16: '',
      DescriptionLine16: "",
      HeadLine17: '',
      DescriptionLine17: "",
      HeadLine18: '',
      DescriptionLine18: "",
      HeadLine19: '',
      DescriptionLine19: "",
      HeadLine20: '',
      DescriptionLine20: "",
      author: "by admin",
      authorlink: "#",
      comment: "1 Comments",
      commentlink: "#",
      Sliderimg: [
        {
          img: '',
        },
        {
          img: '',
        },
        {
          img: '',
        },
      ],
    },
  ],
};

const Articles = () => {
  const [isOpen, setOpen] = useState(false);
    const [BlogData, setBlogData] = useState([]);
    const [BlogData2, setBlogData2] = useState([]);
    const [BlogData3, setBlogData3] = useState([]);
    useEffect(() => {


      fetch("https://adminmarketing-collab.github.io/becco-articles/articles/article_1.json")
        .then((res) => res.json())
        .then((json) =>{
         setBlogData(json);
        })
        .catch((err) => console.error("Error loading JSON:", err));

        fetch("https://adminmarketing-collab.github.io/becco-articles/articles/article_2.json")
        .then((res) => res.json())
        .then((json) =>{
         setBlogData2(json);
        })
        .catch((err) => console.error("Error loading JSON:", err));

        fetch("https://adminmarketing-collab.github.io/becco-articles/articles/article_3.json")
        .then((res) => res.json())
        .then((json) =>{
         setBlogData3(json);
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
                    {item.Sliderimg.map((item, ii) => (
                      <SwiperSlide key={ii}>
                        <Image
                          className="w-full"
                          src={item.img}
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

                    <a href="https://www.globalvatcompliance.com/globalvatnews/philippines-digital-vat-registration/" target="_blank" className="mt-5 text-[#f90908]">{item?.DescriptionLine3}</a>

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



              {BlogData2?.SliderpostList?.map((item, i) => (

                item?.date ? <div
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
                    {item.Sliderimg.map((item, ii) => (
                      <SwiperSlide key={ii}>
                        <Image
                          className="w-full"
                          src={item.img}
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

                    <p className="mt-5">{item?.DescriptionLine3}</p>
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
                    <p className="mt-5 ">{item?.DescriptionLine6}</p>

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

                    <p className="mt-5 p">{item?.DescriptionLine17}</p>

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


                    <h4 className="post-title leading-tight block capitalize font-bold text-[#353858] text-[20px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]">
                      {item.HeadLine21}
                    </h4>
                    <p className="mt-5">{item?.DescriptionLine21}</p>


                    <h4 className="post-title leading-tight block capitalize font-bold text-[#353858] text-[20px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]">
                      {item.HeadLine22}
                    </h4>
                    <p className="mt-5">{item?.DescriptionLine22}</p>


                    <h4 className="post-title leading-tight block capitalize font-bold text-[#353858] text-[20px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]">
                      {item.HeadLine23}
                    </h4>
                    <p className="mt-5">{item?.DescriptionLine23}</p>


                    <h4 className="post-title leading-tight block capitalize font-bold text-[#353858] text-[20px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]">
                      {item.HeadLine24}
                    </h4>
                    <p className="mt-5">{item?.DescriptionLine24}</p>


                    <h4 className="post-title leading-tight block capitalize font-bold text-[#353858] text-[20px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]">
                      {item.HeadLine25}
                    </h4>
                    <p className="mt-5">{item?.DescriptionLine25}</p>

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
                </div> : ''



              ))}

              {BlogData3.SliderpostList?.map((item, i) => (
                item?.date ? <div
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
                    {item.Sliderimg.map((item, ii) => (
                      <SwiperSlide key={ii}>
                        <Image
                          className="w-full"
                          src={item.img}
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

                    <p className="mt-5 ">{item?.DescriptionLine3}</p>

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
                </div> : ''
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

export default Articles;
