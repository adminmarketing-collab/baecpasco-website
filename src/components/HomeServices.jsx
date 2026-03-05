"use client";

import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Audit & Assurance",
    description:
      "Our audit services Mindanao businesses rely on are designed to enhance transparency, strengthen financial reporting, and ensure regulatory compliance.",
  },
  {
    title: "Accounting & Financial Reporting",
    description:
      "We maintain structured financial records and provide clear reporting to support informed decision making and operational efficiency.",
  },
  {
    title: "Taxation & Compliance",
    description:
      "Our tax filing services depend on help ensure timely submissions, accurate calculations, and full compliance with national regulations.",
  },
  {
    title: "Bookkeeping",
    description:
      "We provide professional bookkeeping services that maintain accurate records, monitor cash flow, and support day to day financial management.",
  },
  {
   title: "Payroll",
    description:
      "Our payroll services ensure accurate salary processing, statutory contributions, and government compliance requirements.",
  },
  {
    title: "Business & Financial Advisory",
    description:
      "Our business advisory services guide organizations through financial planning, risk management, and growth strategy development.",
  },
  {
    title: "Regulatory Compliance & Corporate Services",
    description:
      "We assist businesses with corporate documentation, regulatory filings, and compliance requirements to ensure smooth operations.",
  },
];

export default function HomeServices() {
  return (
    <section className="bg-[#24262d] py-8">
      <div className="flex flex-wrap justify-center mx-[40px]">

        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-white text-5xl font-bold uppercase">
            Our Services
          </h2>

          <p className="text-gray-300 mt-6 max-w-3xl mx-auto mb-10">
            We provide comprehensive accounting services throughout Mindanao, serving businesses in Kidapawan City, Midsayap, Koronadal City, Bukidnon, Davao, and Samal with solutions designed for sustainable growth and operational stability.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mx-[40px] w-full">

          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition duration-300
              ${index === services.length - 1 ? "xl:col-span-2 xl:max-w-[600px] xl:mx-auto" : ""}`}
            >
              <h3 className="text-2xl font-bold text-[#1f2a44] mb-5">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <Link
                href="/services"
                className="text-[#f90908] font-semibold hover:underline"
              > 
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
