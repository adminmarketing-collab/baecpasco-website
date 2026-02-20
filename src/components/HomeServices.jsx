"use client";

import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Audit & Assurance",
    description:
      "Reliable audit and assurance services to ensure financial transparency, compliance, and credibility.",
  },
  {
    title: "Accounting & Financial Reporting",
    description:
      "Comprehensive accounting solutions to maintain accurate records and support data-driven decisions.",
  },
  {
    title: "Taxation & Compliance",
    description:
      "Expert guidance to help businesses manage tax obligations efficiently while maximizing savings.",
  },
  {
    title: "Bookkeeping & Payroll Services",
    description:
      "Reliable bookkeeping and payroll solutions to ensure seamless financial management.",
  },
  {
    title: "Business & Financial Consultancy",
    description:
      "Strategic consultancy services to help businesses navigate financial challenges and grow sustainably.",
  },
  {
    title: "Regulatory Compliance & Corporate Services",
    description:
      "Professional support to ensure compliance with SEC, BIR, and other regulatory requirements.",
  },
];

export default function HomeServices() {
  return (
    <section className="bg-[#24262d] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-white uppercase text-lg tracking-wide mb-4">
            Our
          </h4>

          <h2 className="text-white text-5xl font-bold uppercase">
            Services
          </h2>

          <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
            At <span className="text-[#f90908] font-semibold">Balagot & Emperado CPA’s Co.</span>, 
            we provide professional accounting, audit, tax, and advisory services 
            tailored to your business needs.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
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
