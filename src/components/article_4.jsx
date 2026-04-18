"use client";

import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const article = {
  date: "September 2025",
  posttitle: "BECC Two-Day Employee Orientation & Team Building",
  images: [
    "/img/articles/article_4/hr.jpg",
    "/img/articles/article_4/hr2.jpg",
    "/img/articles/article_4/hr3.jpg",
    "/img/articles/article_4/hr4.jpg",
    "/img/articles/article_4/hr5.jpg",
    "/img/articles/article_4/hr6.jpg",
    "/img/articles/article_4/hr7.jpg",
    "/img/articles/article_4/hr8.jpg",
  ],
  sections: [
    {
      description:
        "The BECC Two-Day Employee Orientation & Team Building held last September 25-26, 2025, at the Boylyn Pension House, Kidapawan City was truly a meaningful and inspiring milestone.",
    },
    {
      description:
        "We are proud to share that the event gathered our Midsayap, Koronadal, and Kidapawan teams, all united in learning, growth, and collaboration. We were also deeply honored by the presence of our leaders, Mrs. Rezyl Mae Emperado-Tero, CPA, Managing Director of the Kidapawan West Corporate Head Office, and Mr. Al B. Balagot, CPA, Managing Partner of the Davao East Head Corporate Office, whose guidance and support made the event even more impactful.",
    },
    {
      headline: "This event also marked two historic highlights:",
      description:
        "- The launching of Business Edge Consulting Corporation (BECC International), a newly built corporation for international services.\n- The orientation of our new standardized HR Policies, aligned for both local and international operations, setting the path for professional growth and global opportunities.",
    },
    {
      headline: "Special thanks to our inspiring orientation speakers:",
      description:
        "- Ms. Vee Hornoz, Training Manager at RAH Dallas\n- Ms. Kitty Ramos, RPM, Newly Registered Psychometrician\nfor sharing their expertise and encouraging us to embrace growth with confidence.",
    },
    {
      description:
        "This successful event was made possible through the leadership of our HR Team, headed by Jouie Kristian Tero, CPA, together with the creativity and production of Francis Leodel U. Ibot, Creative Director of Ideya Projects.",
    },
    {
      description:
        "With the new HR Manual, Employee Manual, and Company Policies now introduced, and the exciting launch of BECC International, this orientation has truly set a stronger foundation for career advancement, promotions, and long-term success.",
    },
    {
      description:
        "#BECCOrientation2025 #TeamBuilding #GlobalGrowth #BusinessEdgeConsulting #GrowthBeyondBorders #ThankYou",
    },
  ],
};

const Article_4 = () => {
  return (
    <div id="merox-blog-area" className="merox-blog-area my-[100px]">
      <div className="container">
        <div className="flex flex-wrap mx-[-12px]">
          <div className="xl:w-8/12 lg:w-8/12 md:w-7/12 sm:w-full xl:pr-[30px] lg:pr-[30px] md:pr-[30px] px-[12px]">
            <div className="single-blog-wraper mb-[30px] cursor-pointer relative group wow fadeInUp">
              <Swiper
                className="blog-img-slider"
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                autoplay
                allowTouchMove
                loop={false}
                pagination={{
                  clickable: true,
                }}
                speed={1000}
              >
                {article.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      className="w-full"
                      src={image}
                      alt={article.posttitle}
                      width={800}
                      height={600}
                      loading="eager"
                      fetchPriority={index === 0 ? "high" : "auto"}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="single-blog-content p-[30px] shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)]">
                <div className="blog-date text-white inline-block font-bold uppercase transition-all duration-[0.3s] bg-[#000000] py-[15px] px-[30px] text-[15px] group-hover:bg-[#f90908]">
                  {article.date}
                </div>

                <h4>
                  <Link
                    href="/article_4"
                    className="post-title leading-tight block capitalize font-bold text-[#353858] text-[28px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]"
                  >
                    {article.posttitle}
                  </Link>
                </h4>

                {article.sections.map((section, index) => (
                  <div key={index}>
                    {section.headline ? (
                      <h4 className="post-title leading-tight block capitalize font-bold text-[#353858] text-[20px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]">
                        {section.headline}
                      </h4>
                    ) : null}
                    <p className="mt-5 whitespace-pre-line">
                      {section.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Sidebar intentionally remains omitted to match existing article pages. */}
        </div>
      </div>
    </div>
  );
};

export default Article_4;
