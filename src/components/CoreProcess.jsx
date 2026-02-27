"use client";
import React from "react";

const processSteps = [
  {
    number: "01",
    title: "Understand & Align",
    description:
      "Define needs and expectations clearly.",
  },
  {
    number: "02",
    title: "Secure & Gather",
    description:
      "Collect essential information efficiently.",
  },
  {
    number: "03",
    title: "Execute & Deliver",
    description:
      "Perform services to the highest standards.",
  },
  {
    number: "04",
    title: "Assure & Enhance",
    description:
      "Ensure quality and continuously improve.",
  },
  {
    number: "05",
    title: "Communicate & Grow",
    description:
      "Build relationships through open dialogue.",
  },
];

const CoreProcess = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#24262d]">
            Our Working Process
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <div key={index} className="flex items-start gap-6">
              
              {/* Number */}
              <div className="text-[#f90908] text-4xl font-bold min-w-[60px]">
                {step.number}.
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-[#24262d] mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreProcess;
