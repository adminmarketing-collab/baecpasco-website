"use client";

import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeServices from "@/components/HomeServices";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import Scrolltop from "@/components/Scrolltop";

const SectionSkeleton = ({ height = 200 }) => (
  <div style={{ minHeight: height }} />
);

const About = dynamic(() => import("@/components/About"), {
  loading: () => <SectionSkeleton height={250} />,
});

const Industries = dynamic(() => import("@/components/Industries"), {
  loading: () => <SectionSkeleton height={250} />,
});

const Cta = dynamic(() => import("@/components/Cta"), {
  loading: () => <SectionSkeleton height={220} />,
});

export default function Index() {
  return (
    <>
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
