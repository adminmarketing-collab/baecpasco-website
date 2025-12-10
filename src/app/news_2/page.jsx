"use client";
import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Scrolltop from "@/components/Scrolltop";
import Breadcrumb from "@/components/Breadcrumb";
import Bloglist from "@/components/News";
import News_1 from "@/components/news_1";
import News_2 from "@/components/news_2";

const Index = () => {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Breadcrumb title="News" />
        <News_2/>
        <Footer />
      </main>
      <Scrolltop />
    </>
  );
};
export default Index;
