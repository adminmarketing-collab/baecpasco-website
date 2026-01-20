"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/img/logo1-2.png";
import Link from "next/link";

const FooterData = {
  copyright:
    '© all right reserved by <a class="text-[#f90908] font-bold" href="#">theme_group</a>',
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
    { title: "Help Center", link: "#" },
    { title: "Privacy Policy", link: "#" },
    { title: "Support Policy", link: "#" },
    { title: "Terms & Condition", link: "#" },
    { title: "About Us", link: "https://www.baecpasco.com/about" },
    { title: "Contact", link: "https://www.baecpasco.com/contact" },
  ],
  title2: "Recent Post",
  RecentpostList: [
    { title: "How to build a company culture", link: "#", date: "Sep 30, 2019" },
    { title: "council announces recipients work", link: "#", date: "14 apr, 2021" },
    { title: "awards coveted people’s choice award", link: "#", date: "19 dec, 2030" },
  ],
  title3: "Contact Info",
  ContactinfoList: [
    { icon: "fa fa-mobile", title: "Mobile: 0954-341-3680" },
    { icon: "fa fa-phone", title: "Landline: 064-572-7648" },
    { icon: "fa fa-envelope-o", title: "balagotandemperadocpas@baecpasco.com" },
    { icon: "fa fa-envelope-o", title: "admin.marketing@baecpasco.com" },
  ],
};

const Footer = () => {
  return (
    <>
      <footer>
        <div
          id="merox-footer-area"
          className="merox-footer-area pt-[100px] pb-[70px] bg-[#24262d]"
        >
          <div className="container">
            <div className="flex flex-wrap mx-[-12px]">
              <div className="xl:w-3/12 lg:w-3/12 md:w-6/12 sm:w-full xsm:w-full px-[12px] flex-[0_0_auto]">
                <div className="footer-single-wedget mb-[30px]">
                  <div className="custom-html-widget">
                    <div className="footer-logo mb-[43px]">
                      <Link href="#">
                        <Image
                          src={FooterData.logo}
                          alt="footer-logo"
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <p className="text-[15px] text-white">{FooterData.brief}</p>
                    <ul className="footer-social pt-[30px] px-0 pb-0 mt-[25px] mx-0 mb-0 border-t-[1px] border-solid border-white list-none">
                      {FooterData.SocialList.map((item, i) => (
                        <li className="inline-block my-0 mr-[25px] ml-0" key={i}>
                          <Link
                            className="text-white text-[16px] hover:text-[#f90908]"
                            href={item.link}
                          >
                            <i className={`fa fa-${item.icon}`}></i>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="xl:w-3/12 lg:w-3/12 md:w-6/12 sm:w-full xsm:w-full px-[12px] flex-[0_0_auto]">
                <div className="footer-single-wedget mb-[30px]">
                  <div className="widget_nav_menu ml-[30px]">
                    <h3 className="font-medium text-white mb-10 capitalize text-[28px] relative before:absolute before:left-0 before:content-[''] before:-bottom-[15px] before:w-[70px] before:h-1 before:bg-[#f90908]">
                      {FooterData.title}
                    </h3>
                    <ul className="menu m-0 p-0 list-none">
                      {FooterData.QuicklinkList.map((item, i) => (
                        <li className="mb-2 pb-[7px] last:pb-0 last:mb-0" key={i}>
                          <Link
                            className="font-poppins text-white capitalize font-semibold text-[16px] relative p-[0_0_0_20px] hover:text-[#ff60a3] hover:font-poppins hover:ml-1 before:absolute before:left-0 before:content-['\f178'] before:top-0 before:font-fontawesome before:font-normal before:text-[16px] before:leading-[22px] hover:bg-transparent transition-all duration-[0.3s] leading-[1.5rem] focus:!ring-[none] focus:!border-0 focus:border-solid focus:!outline-offset-0 focus:outline-0 focus:shadow-transparent"
                            href={item.link}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="xl:w-3/12 lg:w-3/12 md:w-6/12 sm:w-full xsm:w-full px-[12px] flex-[0_0_auto]">
                <div className="footer-single-wedget mb-[30px]">
                  <div className="custom-html-widget">
                    <h3 className="font-medium text-white mb-10 capitalize text-[28px] relative before:absolute before:left-0 before:content-[''] before:-bottom-[15px] before:w-[70px] before:h-1 before:bg-[#f90908]">
                      {FooterData.title3}
                    </h3>

                   <ul className="contact-details m-0 p-0 list-none">
  {FooterData.ContactinfoList.map((item, i) => (
    <li
      key={i}
      className="flex items-center gap-3 py-2 font-medium leading-6 group"
    >
      {/* Icon circle (stable size, never squishes) */}
      <span className="w-[30px] h-[30px] rounded-full bg-white text-[#f90908] flex items-center justify-center flex-shrink-0 transition-all duration-[0.3s] group-hover:bg-[#f90908] group-hover:text-white">
        <i className={`${item.icon} text-[14px] leading-none`} />
      </span>

      {/* Text (keeps one line, but won’t break layout) */}
      <span className="text-white normal-case whitespace-nowrap">
        {item.title}
      </span>
    </li>
  ))}
</ul>


                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="merox-copyright-area py-[30px]">
          <div className="container">
            <div className="flex flex-wrap mx-[-12px]">
              <div className="w-full px-[12px] flex-[0_0_auto]">
                <div className="footer-copyright text-center">
                  <p
                    className="text-[#24262d] text-[16px] mb-0 capitalize"
                    dangerouslySetInnerHTML={{ __html: FooterData.copyright }}
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
