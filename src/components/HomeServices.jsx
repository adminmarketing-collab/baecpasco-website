"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Audit & Assurance",
    description:
      "Our audit services Mindanao businesses rely on are designed to enhance transparency, strengthen financial reporting, and ensure regulatory compliance.",
    image: "/img/services/audit.png",
  },
  {
    title: "Accounting & Financial Reporting",
    description:
      "We maintain structured financial records and provide clear reporting to support informed decision making and operational efficiency.",
    image: "/img/services/accounting.png",
  },
  {
    title: "Taxation & Compliance",
    description:
      "Our tax filing services help ensure timely submissions, accurate calculations, and full compliance with national regulations.",
    image: "/img/services/tax.png",
  },
  {
    title: "Bookkeeping",
    description:
      "We provide professional bookkeeping services that maintain accurate records, monitor cash flow, and support day to day financial management.",
    image: "/img/services/bookkeeping.png",
  },
  {
    title: "Payroll",
    description:
      "Our payroll services ensure accurate salary processing, statutory contributions, and government compliance requirements.",
    image: "/img/services/payroll.png",
  },
  {
    title: "Business & Financial Advisory",
    description:
      "Our business advisory services guide organizations through financial planning, risk management, and growth strategy development.",
    image: "/img/services/advisory.png",
  },
  {
    title: "Regulatory Compliance & Corporate Services",
    description:
      "We assist businesses with corporate documentation, regulatory filings, and compliance requirements to ensure smooth operations.",
    image: "/img/services/compliance.png",
  },
];

export default function HomeServices() {
  return (
    <section className="bg-[#24262d] py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold uppercase text-white md:text-4xl xl:text-5xl">
            Our Services
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-300 md:text-lg">
            We provide comprehensive accounting services throughout Mindanao,
            serving businesses in Kidapawan City, Midsayap, Koronadal City,
            Bukidnon, Davao, and Samal with solutions designed for sustainable
            growth and operational stability.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full max-w-[380px] md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)]"
            >
              <Link
                href="/services"
                className="flex h-full w-full flex-col overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_10px_24px_rgba(255,255,255,0.14)]"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="h-[200px] w-full object-cover"
                />

                <div className="flex flex-grow flex-col p-8">
                  <h3 className="mb-4 text-xl font-bold text-[#1f2a44]">
                    {service.title}
                  </h3>

                  <p className="mb-6 flex-grow leading-relaxed text-gray-600">
                    {service.description}
                  </p>

                  <span className="font-semibold text-[#f90908] hover:underline">
                    Read More
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
