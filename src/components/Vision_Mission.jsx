"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";

const Vision_Mission = () => {
  const coreValues = useMemo(
    () => [
      {
        key: "accountability",
        title: "Accountability",
        desc: "We take full ownership of our work, ensuring that every decision and service reflects our commitment to integrity and excellence.",
      },
      {
        key: "sustainability",
        title: "Sustainability",
        desc: "We go beyond short-term gains, focusing on long-term financial stability and fostering lasting relationships with our clients.",
      },
      {
        key: "collaboration",
        title: "Collaboration",
        desc: "We believe success is built through strong partnerships, working closely with businesses and individuals to help them grow.",
      },
      {
        key: "excellence",
        title: "Excellence",
        desc: "We hold ourselves to the highest standards, delivering precise, insightful, and effective financial solutions.",
      },
      {
        key: "nurturing_growth",
        title: "Nurturing Growth",
        desc: "We don’t just manage finances; we empower businesses to expand, innovate, and thrive in a competitive landscape.",
      },
      {
        key: "dedication",
        title: "Dedication",
        desc: "Our commitment to client success is unwavering, driving us to continuously improve and adapt to meet evolving needs.",
      },
    ],
    []
  );

  const [activeKey, setActiveKey] = useState("accountability");
  const active = coreValues.find((v) => v.key === activeKey) || coreValues[0];

  return (
    <>
      <div
        id="merox-services-area"
        className="merox-services-area relative z-[1] md:pb-20 sm:pb-20"
      >
        <div className="container text-center mt-20 mb-16">
          <h2 className="text-[50px] font-bold leading-[49px] uppercase">
            Vision and Mission
          </h2>
        </div>

        <div className="container">
          {/* Vision */}
          <p className="font-bold mt-16 uppercase text-[20px] pl-[30px] mb-[15px] relative before:bg-[#f90908] before:h-[2px] before:w-5 before:content-[''] before:absolute before:left-0 before:top-[11px]">
            Vision Statement
          </p>

          <p className="text-left text-[18px]">
            Our vision is to be the{" "}
            <span className="text-[#f90908]">
              trusted partner in financial excellence
            </span>
            , known for our commitment to{" "}
            <span className="text-[#f90908]">
              trust, innovation, and holistic growth.
            </span>{" "}
            We aim to help businesses and individuals not just achieve financial
            stability but thrive with confidence, supported by strategic insights
            and sustainable solutions. Rooted in{" "}
            <span className="text-[#f90908]">
              integrity and long-term partnerships
            </span>
            , we strive to strengthen our foundation while expanding our reach,
            embracing opportunities beyond local markets. By upholding our ASCEND
            values, we transform the way businesses grow, ensuring success is
            measured not just in numbers but in lasting impact and shared
            prosperity. We see{" "}
            <span className="text-[#f90908]">
              Balagot &amp; Emperado CPAs Co.
            </span>{" "}
            as more than a financial firm, we are a force for progress, helping
            businesses elevate their potential, expand their horizons, and build
            a lasting legacy.
          </p>

          {/* Mission */}
          <p className="font-bold mt-16 uppercase text-[20px] pl-[30px] mb-[15px] relative before:bg-[#f90908] before:h-[2px] before:w-5 before:content-[''] before:absolute before:left-0 before:top-[11px]">
            Mission Statement
          </p>

          <p className="text-left text-[18px]">
            At{" "}
            <span className="text-[#f90908]">
              Balagot &amp; Emperado CPAs Co.
            </span>
            , we go beyond numbers to help businesses and individuals achieve
            lasting success. Guided by our{" "}
            <span className="text-[#f90908]">ASCEND</span> values, we provide
            strategic financial solutions that support growth in every aspect. We
            are committed to building trust, fostering long-term relationships,
            and upholding integrity, ensuring a strong foundation for our
            clients. At the same time, we embrace innovation, expand beyond local
            markets, and provide insights that drive sustainable progress.
          </p>

          {/* CORE VALUES HEADER */}
<div className="mt-20 mb-14 text-center">
  <h2 className="text-[50px] font-bold leading-[49px] uppercase">
    Core Values
  </h2>

  {/* Red line */}
  <div className="flex justify-center mt-4 mb-3">
    <span className="block w-[70px] h-[3px] bg-[#f90908]" />
  </div>

  <p className="uppercase font-semibold tracking-widest text-[18px]">
    Ascend Onwards Center
  </p>
</div>

         
         {/* ✅ Core Values (Desktop: left wheel, right description. Mobile: stacked) */}
<div className="mt-10 w-full text-left">
  <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-14 text-left">

    {/* LEFT: Wheel */}
    <div className="w-full lg:w-[380px] max-w-[340px] lg:max-w-none shrink-0 mx-auto lg:mx-0">
  <div className="relative w-full aspect-square">
    <Image
      src="/img/core-values-wheel.png"
      alt="ASCEND Core Values Wheel"
      fill
      priority
      className="object-contain select-none"
      draggable={false}
    />

        {/* Hotspots */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-[4%] w-[46%] h-[20%] rounded-[999px] cursor-pointer"
          onMouseEnter={() => setActiveKey("accountability")}
          onClick={() => setActiveKey("accountability")}
          tabIndex={0}
          aria-label="Accountability"
        />
        <div
          className="absolute right-[0%] top-[18%] w-[28%] h-[42%] rounded-[999px] cursor-pointer"
          onMouseEnter={() => setActiveKey("sustainability")}
          onClick={() => setActiveKey("sustainability")}
          tabIndex={0}
          aria-label="Sustainability"
        />
        <div
          className="absolute right-[6%] bottom-[22%] w-[36%] h-[26%] rounded-[999px] cursor-pointer rotate-[22deg]"
          onMouseEnter={() => setActiveKey("collaboration")}
          onClick={() => setActiveKey("collaboration")}
          tabIndex={0}
          aria-label="Collaboration"
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-[5%] w-[52%] h-[22%] rounded-[999px] cursor-pointer"
          onMouseEnter={() => setActiveKey("excellence")}
          onClick={() => setActiveKey("excellence")}
          tabIndex={0}
          aria-label="Excellence"
        />
        <div
          className="absolute left-[4%] bottom-[14%] w-[30%] h-[40%] rounded-[999px] cursor-pointer -rotate-[18deg]"
          onMouseEnter={() => setActiveKey("nurturing_growth")}
          onClick={() => setActiveKey("nurturing_growth")}
          tabIndex={0}
          aria-label="Nurturing Growth"
        />
        <div
          className="absolute left-[2%] top-[18%] w-[30%] h-[32%] rounded-[999px] cursor-pointer -rotate-[25deg]"
          onMouseEnter={() => setActiveKey("dedication")}
          onClick={() => setActiveKey("dedication")}
          tabIndex={0}
          aria-label="Dedication"
        />
      </div>
    </div>

    {/* RIGHT: Description */}
    <div className="w-full lg:flex-1 min-w-0">
  <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-sm text-center">
    
    <h4 className="text-[#24262d] text-2xl sm:text-3xl font-extrabold">
      {active.title}
    </h4>

    <p className="text-[#24262d]/80 text-base sm:text-lg mt-4 leading-relaxed max-w-[720px] mx-auto">
      {active.desc}
    </p>

  </div>
</div>
  </div>
</div>

          {/* Closing paragraph */}
          <p className="text-left mt-20 text-[18px]">
            With{" "}
            <span className="text-[#f90908] font-bold">ASCEND</span> as our guiding
            principle, we don’t just serve; we elevate. By staying accountable,
            fostering sustainability, collaborating with clients, delivering
            excellence, nurturing growth, and remaining dedicated to success,
            Balagot &amp; Emperado CPAs Co. continues to reach new heights while
            empowering businesses to grow not just financially, but strategically
            and sustainably.
          </p>
        </div>
      </div>
    </>
  );
};

export default Vision_Mission;
