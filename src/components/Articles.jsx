"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const article4 = {
  date: "September 2025",
  posttitle: "BECC Two-Day Employee Orientation & Team Building",
  postlink: "/article_4",
  HeadLine1: "",
  DescriptionLine1:
    "The BECC Two-Day Employee Orientation & Team Building held last September 25-26, 2025, at the Boylyn Pension House, Kidapawan City was truly a meaningful and inspiring milestone.",
  HeadLine2: "",
  DescriptionLine2:
    "We are proud to share that the event gathered our Midsayap, Koronadal, and Kidapawan teams, all united in learning, growth, and collaboration. We were also deeply honored by the presence of our leaders, Mrs. Rezyl Mae Emperado-Tero, CPA, Managing Director of the Kidapawan West Corporate Head Office, and Mr. Al B. Balagot, CPA, Managing Partner of the Davao East Head Corporate Office, whose guidance and support made the event even more impactful.",
  HeadLine3: "This event also marked two historic highlights:",
  DescriptionLine3:
    "- The launching of Business Edge Consulting Corporation (BECC International), a newly built corporation for international services.\n- The orientation of our new standardized HR Policies, aligned for both local and international operations, setting the path for professional growth and global opportunities.",
  HeadLine4: "Special thanks to our inspiring orientation speakers:",
  DescriptionLine4:
    "- Ms. Vee Hornoz, Training Manager at RAH Dallas\n- Ms. Kitty Ramos, RPM, Newly Registered Psychometrician\nfor sharing their expertise and encouraging us to embrace growth with confidence.",
  HeadLine5: "",
  DescriptionLine5:
    "This successful event was made possible through the leadership of our HR Team, headed by Jouie Kristian Tero, CPA, together with the creativity and production of Francis Leodel U. Ibot, Creative Director of Ideya Projects.",
  HeadLine6: "",
  DescriptionLine6:
    "With the new HR Manual, Employee Manual, and Company Policies now introduced, and the exciting launch of BECC International, this orientation has truly set a stronger foundation for career advancement, promotions, and long-term success.",
  HeadLine7: "",
  DescriptionLine7:
    "#BECCOrientation2025 #TeamBuilding #GlobalGrowth #BusinessEdgeConsulting #GrowthBeyondBorders #ThankYou",
  Sliderimg: [
    { img: "/img/articles/article_4/hr.jpg" },
    { img: "/img/articles/article_4/hr2.jpg" },
    { img: "/img/articles/article_4/hr3.jpg" },
    { img: "/img/articles/article_4/hr4.jpg" },
    { img: "/img/articles/article_4/hr5.jpg" },
    { img: "/img/articles/article_4/hr6.jpg" },
    { img: "/img/articles/article_4/hr7.jpg" },
    { img: "/img/articles/article_4/hr8.jpg" },
  ],
};

const octoberArticle = {
  date: "October 2025",
  posttitle:
    "Expanding Excellence Beyond Borders: The Story of Business Edge Consulting Corporation (BECC)",
  postlink: "/article_1",
  HeadLine1: "",
  DescriptionLine1:
    "Business Edge Consulting Corporation (BECC) marks a bold new chapter in the legacy of Balagot & Emperado CPAs Co. (BECC Local). This firm has built over 12 years of trusted expertise in accounting, taxation, and business advisory. As the international expansion of BECC Local, the corporation is designed to serve clients not just in the Philippines, but also in Canada, the United States, and beyond, bringing global standards of excellence to every engagement.",
  HeadLine2: "",
  DescriptionLine2:
    "At BECC, we believe in going beyond numbers. Our approach combines strategic financial management, data-driven insights, and innovative systems to help organizations make smarter decisions and achieve sustainable growth. With a team trained in international practices and cross-border compliance, we ensure our clients stay competitive and future-ready in today's fast-paced business world.",
  HeadLine3: "",
  DescriptionLine3: "",
  HeadLine4: "",
  DescriptionLine4:
    "At the heart of BECC's culture are our core values embodied in EDGE - Excellence, Dedication, Growth, and Empowerment. We strive for Excellence in every service we deliver, Dedication to the success of our clients, Growth through continuous learning and innovation, and Empowerment that uplifts both our people and partners to reach their full potential. These values define who we are and how we work - with integrity, purpose, and a vision to make a lasting global impact.",
  HeadLine5: "",
  DescriptionLine5: "",
  HeadLine6: "",
  DescriptionLine6:
    "Partner with BECC today and experience the global edge that drives success. From bookkeeping and payroll to business advisory and international financial reporting, we provide integrated solutions that empower your organization to thrive across borders.",
  HeadLine7: "",
  DescriptionLine7:
    "Visit www.baecpasco.com and discover how we can build your business advantage together.",
  Sliderimg: [
    { img: "/img/articles/article_1/1.png" },
    { img: "/img/articles/article_1/2.png" },
  ],
};

const articleSources = [
  "https://adminmarketing-collab.github.io/becco-articles/articles/article_1.json",
  "https://adminmarketing-collab.github.io/becco-articles/articles/article_2.json",
  "https://adminmarketing-collab.github.io/becco-articles/articles/article_3.json",
];

function getArticleSections(article) {
  return Array.from({ length: 25 }, (_, index) => {
    const lineNumber = index + 1;
    return {
      headline: article?.[`HeadLine${lineNumber}`],
      description: article?.[`DescriptionLine${lineNumber}`],
    };
  }).filter(({ headline, description }) => headline || description);
}

function getArticleImages(article) {
  return article?.Sliderimg?.map((slide) => slide?.img).filter(Boolean) || [];
}

function ArticleCard({ article }) {
  const sections = getArticleSections(article);
  const images = getArticleImages(article);
  const articleKey = article?.postlink || article?.posttitle;

  return (
    <div className="single-blog-wraper mb-[30px] cursor-pointer relative group wow fadeInUp">
      <Swiper
        key={articleKey}
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
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              className="w-full"
              src={image}
              alt={article.posttitle || "article image"}
              width={800}
              height={600}
              loading="eager"
              fetchPriority={index === 0 ? "high" : "auto"}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="single-blog-content p-[30px] shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)]">
        {article.date ? (
          <div className="blog-date text-white inline-block font-bold uppercase transition-all duration-[0.3s] bg-[#000000] py-[15px] px-[30px] text-[15px] group-hover:bg-[#f90908]">
            {article.date}
          </div>
        ) : null}

        <h4>
          <Link
            href={article.postlink}
            className="post-title leading-tight block capitalize font-bold text-[#353858] text-[28px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]"
          >
            {article.posttitle}
          </Link>
        </h4>

        {sections.map((section, index) => (
          <div key={index}>
            {section.headline ? (
              <h4 className="post-title leading-tight block capitalize font-bold text-[#353858] text-[20px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#f90908]">
                {section.headline}
              </h4>
            ) : null}
            {section.description ? (
              <p className="mt-5 whitespace-pre-line">{section.description}</p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

const Articles = () => {
  const [remoteArticles, setRemoteArticles] = useState([octoberArticle]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    Promise.all(
      articleSources.map((source) =>
        fetch(source)
          .then((res) => res.json())
          .then((json) => json?.SliderpostList?.[0])
          .catch((err) => {
            console.error("Error loading article JSON:", err);
            return null;
          })
      )
    ).then((articles) => {
      const datedArticles = articles.filter((article) => article?.date);
      setRemoteArticles([
        octoberArticle,
        ...datedArticles.filter(
          (article) => article.postlink !== octoberArticle.postlink
        ),
      ]);
    });
  }, []);

  const articles = useMemo(
    () => [article4, ...remoteArticles],
    [remoteArticles]
  );

  const activeArticle = articles[activeIndex] || articles[0] || article4;
  const preloadImages = articles.flatMap(getArticleImages);

  const goToPrevious = () => {
    setActiveIndex((current) => {
      if (articles.length <= 1) return current;
      return current === 0 ? articles.length - 1 : current - 1;
    });
  };

  const goToNext = () => {
    setActiveIndex((current) => {
      if (articles.length <= 1) return current;
      return current === articles.length - 1 ? 0 : current + 1;
    });
  };

  return (
    <div id="merox-blog-area" className="merox-blog-area my-[100px]">
      <div className="container">
        <div className="flex flex-wrap justify-center">
          <div className="xl:w-8/12 lg:w-8/12 md:w-7/12 sm:w-full xl:pr-[30px] lg:pr-[30px] md:pr-[30px] px-[12px]">
            <div className="relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0"
              >
                {preloadImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt=""
                    width={80}
                    height={60}
                    loading="eager"
                    fetchPriority={index < 4 ? "high" : "auto"}
                  />
                ))}
              </div>

              <button
                type="button"
                aria-label="Previous article"
                onClick={goToPrevious}
                className="absolute left-[-70px] top-1/2 z-10 hidden h-[50px] w-[50px] -translate-y-1/2 items-center justify-center bg-[#f90908] shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)] transition-all duration-[0.3s] hover:bg-[#c30606] lg:flex xl:flex"
              >
                <span
                  aria-hidden="true"
                  className="block h-0 w-0"
                  style={{
                    borderTop: "10px solid transparent",
                    borderBottom: "10px solid transparent",
                    borderRight: "15px solid #ffffff",
                  }}
                />
              </button>

              <ArticleCard article={activeArticle} />

              <button
                type="button"
                aria-label="Next article"
                onClick={goToNext}
                className="absolute right-[-70px] top-1/2 z-10 hidden h-[50px] w-[50px] -translate-y-1/2 items-center justify-center bg-[#f90908] shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)] transition-all duration-[0.3s] hover:bg-[#c30606] lg:flex xl:flex"
              >
                <span
                  aria-hidden="true"
                  className="block h-0 w-0"
                  style={{
                    borderTop: "10px solid transparent",
                    borderBottom: "10px solid transparent",
                    borderLeft: "15px solid #ffffff",
                  }}
                />
              </button>

              <div className="mt-4 flex justify-center gap-4 lg:hidden xl:hidden">
                <button
                  type="button"
                  aria-label="Previous article"
                  onClick={goToPrevious}
                  className="flex h-[50px] w-[50px] items-center justify-center bg-[#f90908] transition-all duration-[0.3s] hover:bg-[#c30606]"
                >
                  <span
                    aria-hidden="true"
                    className="block h-0 w-0"
                    style={{
                      borderTop: "10px solid transparent",
                      borderBottom: "10px solid transparent",
                      borderRight: "15px solid #ffffff",
                    }}
                  />
                </button>
                <button
                  type="button"
                  aria-label="Next article"
                  onClick={goToNext}
                  className="flex h-[50px] w-[50px] items-center justify-center bg-[#f90908] transition-all duration-[0.3s] hover:bg-[#c30606]"
                >
                  <span
                    aria-hidden="true"
                    className="block h-0 w-0"
                    style={{
                      borderTop: "10px solid transparent",
                      borderBottom: "10px solid transparent",
                      borderLeft: "15px solid #ffffff",
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
