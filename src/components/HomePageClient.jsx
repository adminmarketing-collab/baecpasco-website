"use client";

import React from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeServices from "@/components/HomeServices";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import Scrolltop from "@/components/Scrolltop";
import Preloader from "@/components/Preloader";

const SectionSkeleton = ({ height = 200 }) => (
  <div style={{ minHeight: height }} />
);

const About = dynamic(() => import("@/components/About"), {
  loading: () => <SectionSkeleton height={250} />,
});

const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <SectionSkeleton height={300} />,
});

const Industries = dynamic(() => import("@/components/Industries"), {
  loading: () => <SectionSkeleton height={250} />,
});

const Cta = dynamic(() => import("@/components/Cta"), {
  loading: () => <SectionSkeleton height={220} />,
});

const Careers = dynamic(() => import("@/components/Careers"), {
  loading: () => <SectionSkeleton height={250} />,
});

export default function Index() {
  return (
    <>
      <Preloader />
      <Header />

      <main className="overflow-x-hidden pb-0 mb-0">
        <Hero />

        <About />
        <HomeServices />
        <Industries />
        <Cta />
        <Testimonial />
        <Footer />
      </main>

      <Scrolltop />
    </>
  );
}
