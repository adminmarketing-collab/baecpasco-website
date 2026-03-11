"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../public/img/logo-1.png";
import Link from "next/link";

const HeaderData = {
  logo: logo,
  btntext: "let's talk with us ",
  btnlink: "#",
  searchbtn: "search",
  Menu: [
    {
      title: "home",
      link: "/",
    },
    {
      title: "about",
      link: "/about",
    },
    {
      title: "services",
      link: "/services",
    },
      /*submenu: [
        {
          title: "Offices/Our Locations",
          link: "/locations",
        },
        {
          title: "Industries",
          link: "/industries",
        },
        {
          title: "History",
          link: "/history",
        },
        {
          title: "Careers",
          link: "/careers",
        },
        {
          title: "Vision & Mission",
          link: "/vision_mission",
        },
        {
          title: "testimonial",
          link: "/testimonial",
        },
        // {
        //   title: "error",
        //   link: "/error",
        // },
      ],
    },
    { 
  title: "Team",
  link: "/team",
},*/

    {
      title: "News & Articles",
      link: "#",
      submenu: [
        {
          title: "News",
          link: "/news",
        },
        {
          title: "Articles",
          link: "/articles",
        },
        // {
        //   title: "blog details",
        //   link: "/blog-details",
        // },
      ],
    },
    {
      title: "contact",
      link: "/contact",
    },
  ],
};

const Header = () => {
  //mobile menu function
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const toggleSubmenu = (item) => {
    setActiveSubmenu(activeSubmenu === item ? null : item);
  };

  
  const currentRoute = usePathname();
  
  //sticky menu function
  const [sticky, setSticky] = useState(false);
  const stickyHeader = () => {
    if (window.scrollY > 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
  let ticking = false;

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        setSticky(window.scrollY > 200);
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, []);

  //mobile menu
  const navLinksRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      const clickedLink = event.target;
      const clickedLinkId = clickedLink.href.split("#")[1];

      navLinksRef.current
        .querySelector("ul")
        .querySelectorAll("a")
        .forEach((link) => {
          link.parentNode.classList.remove("active");
          if (link.href.includes(clickedLinkId)) {
            link.parentNode.classList.add("active");
          }
        });

      const targetSection = document.getElementById(clickedLinkId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    };
  }, []);

  return ( 
    <>
      <header>
        <div
  className={`bg-[#0000004d] header-area absolute left-0 right-0 top-0 z-10 border-b-0 shadow-none ${
    sticky ? "header-fixed animated slideInDown" : ""
  } h-[72px] flex items-center`}
>
          <div className="container h-full">
  <div className="flex flex-wrap mx-[-12px] relative h-full items-center">
    {/* LOGO */}
    <div className="xl:w-28 lg:w-4/12 md:w-6/12 sm:w-6/12 xsm:w-6/12 px-[12px] flex-[0_0_auto] h-full flex items-center">
      <div className="header-logo">
        <Link className="block" href="/">
          <Image
            src={HeaderData.logo}
            alt="logo"
            className="block h-[46px] w-auto object-contain md:h-[50px] xl:h-[54px]"
            priority
            fetchPriority="high"
            sizes="(max-width: 767px) 112px, (max-width: 1279px) 124px, 136px"
          />
        </Link>
      </div>
    </div>

    {/* MENU */}
    <div className="xl:w-10/12 lg:w-8/12 md:w-6/12 sm:w-6/12 xsm:w-6/12 px-[12px] flex-[0_0_auto] h-full flex items-center justify-end">
      <div className="main-menu-area hidden h-full w-full items-center justify-center text-center xl:flex">
        <div className="main-menu w-full">
          <nav className="h-full flex items-center justify-center">
            <ul
              className="
                h-full flex items-center justify-center m-0 p-0
                [&>li]:h-full [&>li]:flex [&>li]:items-center
                [&>li>a]:h-full [&>li>a]:flex [&>li>a]:items-center
                [&>li>a]:!py-0 [&>li>a]:!leading-none
              "
            >
              {HeaderData.Menu.map((item, i) => (
                <li
                  key={i}
                  className={`${
                    item.link === currentRoute ||
                    (item.submenu &&
                      item.submenu.some(
                        (sub_m) => sub_m.link && sub_m.link === currentRoute
                      ))
                      ? "active"
                      : ""
                  }`}
                >
                  <Link href={item.link} prefetch className="px-4 2xl:px-5">
                    {item.title}
                    {item.submenu && (
                      <i className="fa fa-angle-down ml-[4px]"></i>
                    )}
                  </Link>

                  {item.submenu && (
                    <ul className="sub-menu text-left">
                      {item.submenu.map((subItem, j) => (
                        <li key={j}>
                          <Link href={subItem.link} prefetch>
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul> 
          </nav> 
        </div>
      </div>
    </div>

              <div className="mobile-menu dropdown visible absolute inset-x-0 top-full inline-block w-full xl:hidden">
                <div
                  tabIndex={0}
                  className="meanmenu-reveal block h-10 w-[45px] cursor-pointer border border-solid border-white px-[9px] py-2 text-white absolute right-0 top-[-56px] md:top-[-60px] xl:hidden"
                >
                  <span className="block h-[3px] relative mt-[3px] before:content-[''] before:absolute before:block before:h-[3px] before:mt-[3px] before:top-3 before:inset-x-0 after:content-[''] after:absolute after:block after:h-[3px] after:mt-[3px] after:top-1 after:inset-x-0 bg-white before:bg-white after:bg-white"></span>
                </div>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content absolute top-full inset-x-0 bg-[#0c1923] p-0"
                >
                  {HeaderData.Menu.map((item, i) => (
                    <li className="m-0" key={i}>
                      <Link
                        className="text-white uppercase text-sm m-0 px-[5%] py-[15px] "
                        href={item.link}
                        onClick={(e) => {
                          if (item.submenu) {
                            e.preventDefault();
                            toggleSubmenu(item);
                          }
                        }} 
                      >
                        {item.title}
                                {item.submenu && (
                                  <i className="fa fa-angle-down text-right"></i>
                                )}
                      </Link>
                      {item.submenu && (
                          <ul className={`p-0 m-0 before:bg-transparent menu-dropdown ${activeSubmenu === item ? 'menu-dropdown-show' : ''}`}>
                            {item.submenu.map((item, i) => (
                              <li className="m-0" key={i}>
                                <Link
                                  className="text-white uppercase text-sm m-0 px-[10%] py-[15px] "
                                  href={item.link}
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        
       
      </header>
    </>
  );
};

export default Header;

