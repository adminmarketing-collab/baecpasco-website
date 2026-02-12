"use client";

import React from "react";
import dynamic from "next/dynamic";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Scrolltop from "@/components/Scrolltop";
// If Preloader makes the site feel slow, you can remove it OR lazy-load it too:
import Preloader from "@/components/Preloader";

// ✅ Lightweight placeholder (keeps spacing so layout doesn't jump)
const SectionSkeleton = ({ height = 200 }) => (
  <div style={{ minHeight: height }} />
);

// ✅ Load these after initial paint (still renders on client; feels much faster)
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

// ⭐ Usually heavy (Swiper). Make this client-only so it won’t block build/SSR.
const Testimonial = dynamic(() => import("@/components/Testimonial"), {
  ssr: false,
  loading: () => <SectionSkeleton height={320} />,
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

        {/* Lazy sections */}
        <About />
        <Services />
        <Industries />
        <Cta />
        <Testimonial />
        <Footer />
      </main>

      <Scrolltop />
    </>
  );
}
