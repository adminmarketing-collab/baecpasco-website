"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Scrolltop from "@/components/Scrolltop";
import Article_4 from "@/components/article_4";

const Index = () => {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Breadcrumb title="Articles" />
        <Article_4 />
        <Footer />
      </main>
      <Scrolltop />
    </>
  );
};

export default Index;
