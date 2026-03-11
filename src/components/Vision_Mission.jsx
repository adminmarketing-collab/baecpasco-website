"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";

const DESKTOP_BREAKPOINT = 1280;

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
        desc: "We do not just manage finances; we empower businesses to expand, innovate, and thrive in a competitive landscape.",
      },
      {
        key: "dedication",
        title: "Dedication",
        desc: "Our commitment to client success is unwavering, driving us to continuously improve and adapt to meet evolving needs.",
      },
    ],
    []
  );

  const [activeKey, setActiveKey] = useState("dedication");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateViewportMode = () => {
      setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT);
    };

    updateViewportMode();
    window.addEventListener("resize", updateViewportMode);

    return () => window.removeEventListener("resize", updateViewportMode);
  }, []);

  const active = coreValues.find((value) => value.key === activeKey) || coreValues[0];

  const tooltipPosition = {
    accountability: "left-1/2 top-[-42%] -translate-x-1/2 xl:top-[-52%]",
    sustainability: "right-[-56%] top-[10%] xl:right-[-84%] xl:top-[8%]",
    collaboration: "right-[-60%] bottom-[16%] xl:right-[-88%] xl:bottom-[15%]",
    excellence: "bottom-[-38%] left-1/2 -translate-x-1/2 xl:bottom-[-58%]",
    nurturing_growth: "bottom-[16%] left-[-60%] xl:left-[-88%] xl:bottom-[15%]",
    dedication: "left-[-56%] top-[10%] xl:left-[-92%] xl:top-[8%]",
  };

  const hotspotBaseClass = "absolute cursor-pointer rounded-[999px] bg-transparent select-none";

  const handleActivate = (key) => {
    setActiveKey(key);
  };

  const handleHover = (key) => {
    if (isDesktop) {
      setActiveKey(key);
    }
  };

  const handleKeyDown = (event, key) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveKey(key);
    }
  };

  const Hotspot = ({ className, valueKey, label }) => (
    <div
      role="button"
      tabIndex={0}
      aria-label={label}
      className={`${hotspotBaseClass} ${className}`}
      onMouseEnter={() => handleHover(valueKey)}
      onFocus={() => handleHover(valueKey)}
      onClick={() => handleActivate(valueKey)}
      onKeyDown={(event) => handleKeyDown(event, valueKey)}
    />
  );

  return (
    <section id="merox-services-area" className="relative z-[1] py-8 md:py-12">
      <div className="container">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="text-[34px] font-bold uppercase leading-tight md:text-[42px] xl:text-[50px]">
            Vision and Mission
          </h2>
        </div>

        <div className="space-y-10 text-left">
          <div>
            <p className="mb-4 text-center text-[18px] font-bold uppercase text-[#24262d] md:text-[20px]">
              Vision Statement
            </p>
            <p className="text-[16px] leading-7 text-[#4b5563] md:text-[18px] md:leading-8">
              Our vision is to be the <span className="text-[#f90908]">trusted partner in financial excellence</span>, known for our commitment to <span className="text-[#f90908]">trust, innovation, and holistic growth.</span> We aim to help businesses and individuals not just achieve financial stability but thrive with confidence, supported by strategic insights and sustainable solutions. Rooted in <span className="text-[#f90908]">integrity and long-term partnerships</span>, we strive to strengthen our foundation while expanding our reach, embracing opportunities beyond local markets. By upholding our ASCEND values, we transform the way businesses grow, ensuring success is measured not just in numbers but in lasting impact and shared prosperity. We see <span className="text-[#f90908]">Balagot &amp; Emperado CPAs Co.</span> as more than a financial firm, we are a force for progress, helping businesses elevate their potential, expand their horizons, and build a lasting legacy.
            </p>
          </div>

          <div>
            <p className="mb-4 text-center text-[18px] font-bold uppercase text-[#24262d] md:text-[20px]">
              Mission Statement
            </p>
            <p className="text-[16px] leading-7 text-[#4b5563] md:text-[18px] md:leading-8">
              At <span className="text-[#f90908]">Balagot &amp; Emperado CPAs Co.</span>, we go beyond numbers to help businesses and individuals achieve lasting success. Guided by our <span className="text-[#f90908]">ASCEND</span> values, we provide strategic financial solutions that support growth in every aspect. We are committed to building trust, fostering long-term relationships, and upholding integrity, ensuring a strong foundation for our clients. At the same time, we embrace innovation, expand beyond local markets, and provide insights that drive sustainable progress.
            </p>
          </div>

          <div className="pt-2 text-center">
            <p className="text-[18px] font-bold uppercase text-[#24262d] md:text-[20px]">
              Core Values
            </p>
            <p className="mt-3 text-[15px] font-semibold uppercase tracking-[0.28em] text-[#475569] md:text-[18px]">
              Ascend Onwards Center
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-center gap-8 md:gap-10">
              <div className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[440px]">
                <div className="relative aspect-square w-full overflow-visible">
                  <Image
                    src="/img/core-values-wheel.png"
                    alt="ASCEND Core Values Wheel"
                    fill
                    priority
                    className="select-none object-contain"
                    draggable={false}
                  />

                  {isDesktop ? (
                    <div
                      className={`absolute z-20 w-[250px] rounded-xl border border-black/10 bg-white p-4 shadow-lg lg:w-[280px] ${tooltipPosition[activeKey]}`}
                    >
                      <div className="text-center text-lg font-extrabold leading-tight text-[#24262d] lg:text-[22px]">
                        {active.title}
                      </div>
                      <div className="mt-2 text-center text-sm leading-relaxed text-[#24262d]/80 lg:text-[15px]">
                        {active.desc}
                      </div>
                    </div>
                  ) : null}

                  <Hotspot
                    className="left-1/2 top-[4%] h-[20%] w-[46%] -translate-x-1/2"
                    valueKey="accountability"
                    label="Accountability"
                  />
                  <Hotspot
                    className="right-[0%] top-[18%] h-[42%] w-[28%]"
                    valueKey="sustainability"
                    label="Sustainability"
                  />
                  <Hotspot
                    className="bottom-[22%] right-[6%] h-[26%] w-[36%] rotate-[22deg]"
                    valueKey="collaboration"
                    label="Collaboration"
                  />
                  <Hotspot
                    className="bottom-[5%] left-1/2 h-[22%] w-[52%] -translate-x-1/2"
                    valueKey="excellence"
                    label="Excellence"
                  />
                  <Hotspot
                    className="bottom-[14%] left-[4%] h-[40%] w-[30%] -rotate-[18deg]"
                    valueKey="nurturing_growth"
                    label="Nurturing Growth"
                  />
                  <Hotspot
                    className="left-[2%] top-[18%] h-[32%] w-[30%] -rotate-[25deg]"
                    valueKey="dedication"
                    label="Dedication"
                  />
                </div>
              </div>

              {!isDesktop ? (
                <div className="w-full">
                  <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
                    <div className="text-center text-[22px] font-extrabold leading-tight text-[#24262d]">
                      {active.title}
                    </div>
                    <div className="mt-3 text-center text-[15px] leading-7 text-[#475569]">
                      {active.desc}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <p className="text-[16px] leading-7 text-[#4b5563] md:text-[18px] md:leading-8">
            With <span className="font-bold text-[#f90908]">ASCEND</span> as our guiding principle, we do not just serve; we elevate. By staying accountable, fostering sustainability, collaborating with clients, delivering excellence, nurturing growth, and remaining dedicated to success, Balagot &amp; Emperado CPAs Co. continues to reach new heights while empowering businesses to grow not just financially, but strategically and sustainably.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision_Mission;
