"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/img/logo1-2.png";
import Link from "next/link";

const FooterData = {
  logo: logo,
  brief:
    "Balagot & Emperado CPA’s Co. is a trusted firm that offers accounting and financial services. With years of experience, we help clients make smart and honest financial decisions. We focus on giving clear advice, practical solutions, and excellent service.",
  SocialList: [
    {
      icon: "facebook",
      link: "https://www.facebook.com/share/19iAMdsZ65/",
    },
  ],
  title: "Quick Link",
  QuicklinkList: [
    { title: "About Us", link: "https://www.baecpasco.com/about" },
    { title: "Contact", link: "https://www.baecpasco.com/contact" },
  ],
  title3: "Contact Info",
  ContactinfoList: [
    { icon: "fa fa-mobile", title: "0954-341-3680" },
    { icon: "fa fa-phone", title: "064-572-7648" },
    { icon: "fa fa-envelope-o", title: "balagotandemperadocpas@baecpasco.com" },
    { icon: "fa fa-envelope-o", title: "admin.marketing@baecpasco.com" },
  ],
};

const Footer = () => {
  return (
    <footer className="m-0 p-0 bg-white">
      {/* DARK FOOTER CONTENT */}
      <div id="merox-footer-area" className="bg-[#24262d] pt-[35px] pb-[25px]">
        <div className="container">
          {/* Desktop: 12-col grid for better balance */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-x-10 gap-y-10 items-start">

            {/* LEFT BLOCK (Logo + brief + social) */}
            <div className="xl:col-span-5">
              <div className="flex items-start gap-5">
                {/* Bigger logo */}
                <Link href="/" aria-label="Go to homepage" className="flex-shrink-0">
                  <Image
                    src={FooterData.logo}
                    alt="logo"
                    width={80}
                    height={80}
                    className="h-auto w-auto cursor-pointer"
                    priority={false}
                  />
                </Link>

                {/* Brief moved slightly left by being beside logo */}
                <div className="w-full">
                  <p className="text-[14px] text-white/90 leading-[22px] max-w-[360px]">
                    {FooterData.brief}
                  </p>

                  <div className="mt-4 pt-4 border-t border-white/20 max-w-[360px]">
                    {FooterData.SocialList.map((item, i) => (
                      <Link
                        key={i}
                        className="inline-flex items-center justify-center text-white text-[16px] hover:text-[#f90908] transition"
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Facebook"
                      >
                        <i className={`fa fa-${item.icon}`} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="xl:col-span-3 xl:pl-2">
              <h3
                className="font-semibold text-white mb-5 capitalize text-[18px] relative
                before:absolute before:left-0 before:content-[''] before:-bottom-[10px]
                before:w-[55px] before:h-[3px] before:bg-[#f90908]"
              >
                {FooterData.title}
              </h3>

              <ul className="m-0 p-0 list-none space-y-2">
                {FooterData.QuicklinkList.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.link}
                      className="flex items-center gap-3 text-white font-semibold text-[14px] hover:text-[#ff60a3] transition"
                    >
                      <span className="w-[16px] text-white/80">→</span>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT INFO */}
            <div className="xl:col-span-4 xl:pl-2">
              <h3
                className="font-semibold text-white mb-5 capitalize text-[18px] relative
                before:absolute before:left-0 before:content-[''] before:-bottom-[10px]
                before:w-[55px] before:h-[3px] before:bg-[#f90908]"
              >
                {FooterData.title3}
              </h3>

              <ul className="m-0 p-0 list-none space-y-3">
                {FooterData.ContactinfoList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-[28px] h-[28px] rounded-full bg-white text-[#f90908] flex items-center justify-center flex-shrink-0">
                      <i className={`${item.icon} text-[13px]`} />
                    </span>
                    <span className="text-white text-[14px] leading-[20px] break-all">
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
