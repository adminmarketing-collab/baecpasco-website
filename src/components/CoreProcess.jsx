"use client";
import Image from "next/image";

const CoreProcess = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#24262d]">
            Our Working Process
          </h2>
        </div>

        {/* Image Version */}
        <div className="w-full flex justify-center">
          <Image
            src="/img/core-process.png"
            alt="Our Working Process"
            width={1600}
            height={1400}
            className="w-full max-w-6xl h-auto"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default CoreProcess;