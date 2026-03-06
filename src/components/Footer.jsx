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
    { icon: "fa fa-envelope-o", title: "admin.marketing@baecpasco.com" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="bg-[#24262d] pt-[35px] pb-[25px]">
        <div className="max-w-6xl mx-auto px-6">

          {/* GRID */}
          <div className="footer-layout">

            {/* LOGO + DESCRIPTION */}
            <div className="footer-col logo-col">
              <div className="flex items-start gap-4">

                <Link href="/">
                  <Image
                    src={FooterData.logo}
                    alt="logo"
                    width={120}
                    height={120}
                    className="footer-logo"
                  />
                </Link>

                <div className="max-w-[420px]">
                  <p className="text-[14px] text-white leading-[22px]">
                    {FooterData.brief}
                  </p>

                  <div className="mt-4 pt-4 border-t border-white/20">
                    {FooterData.SocialList.map((item, i) => (
                      <Link
                        key={i}
                        className="inline-flex text-white text-[16px] hover:text-[#f90908] active:text-[#f90908] transition-colors duration-200 mr-3"
                        href={item.link}
                        target="_blank"
                      >
                        <i className={`fa fa-${item.icon}`} />
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="footer-col quick-col">
              <h3 className="footer-title">{FooterData.title}</h3>

              <ul className="space-y-2">
                {FooterData.QuicklinkList.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.link}
                      className="flex items-center gap-3 text-white text-[14px] font-semibold hover:text-[#f90908] active:text-[#f90908] transition"
>
                    <span className="font-bold">→</span>
                    <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div className="footer-col contact-col">
              <h3 className="footer-title">{FooterData.title3}</h3>

              <ul className="space-y-3">
                {FooterData.ContactinfoList.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="icon-circle">
                      <i className={`${item.icon}`} />
                    </span>

                    <span className="text-white text-[14px] break-words">
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