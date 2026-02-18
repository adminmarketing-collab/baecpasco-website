"use client";
import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Scrolltop from "@/components/Scrolltop";
import Breadcrumb from "@/components/Breadcrumb";
import News from "@/components/News";
import Articles from "@/components/Articles";

export default function ArticlesPageClient() {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Breadcrumb title="Articles" />
        <Articles/>
        <Footer />
      </main>
      <Scrolltop />
    </>
  );
}
