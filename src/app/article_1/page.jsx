"use client";
import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Scrolltop from "@/components/Scrolltop";
import Breadcrumb from "@/components/Breadcrumb";
import News from "@/components/News";
import Articles from "@/components/Articles";
import Article_1 from "@/components/article_1";

const Index = () => {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Breadcrumb title="Articles" />
        <Article_1/>
        <Footer />
      </main>
      <Scrolltop />
    </>
  );
};
export default Index;
