"use client"
import React from 'react'
import about from "../../public/img/about/about.png"
import Image from 'next/image'
import Link from 'next/link'
const AboutData = {
  aboutimg1: about,
  title: "MEROX OVERVIEW",
  title2: 'about <span class="text-[#f90908]">merox</span> pro',
  brief: "Balagot & Emperado CPA’s Co. is a trusted firm that offers accounting and financial services. With years of experience, we help clients make smart and honest financial decisions. We focus on giving clear advice, practical solutions, and excellent service.",
  btntext: "about us",
  btnlink: "/history",
  AboutList: [
    {
      title: "There are many variations of passages of Lorem",
    },
    {
      title: "Majority have suffered alteration in some",
    },
    {
      title: "Sure there isn't anything embarrassing hidden in the",
    },
    {
      title: "All the Lorem Ipsum generators on the Internet tend to",
    },
  ],
}

const About = () => {
  return (
    <>
      <div id="merox-about-area" className="merox-about-area mt-[100px] mb-[70px]">
        <div className="container">
          <div className="flex flex-wrap mx-[-12px]">
            <div className="xl:w-5/12 lg:w-6/12 md:w-full sm:w-full xsm:w-full px-[12px] wow fadeInLeft">
              <div className="about-img-area relative before:absolute before:right-full before:top-0 before:bottom-0 before:m-auto before:h-[68%] before:opacity-[0.30] before:-z-[1] before:animate-[leftright_3s_infinite_alternate] before:content-[url('../../public/img/about/about.png')]">
                <Image className="w-full" src={AboutData.aboutimg1} alt="about" />
              </div>
            </div>
            <div className="xl:ml-[8.33333333%] xl:w-6/12 lg:w-6/12 md:w-full sm:w-full xsm:w-full px-[12px] wow fadeInRight">
              <div className="section-title mb-10 md:mt-10 sm:mt-10">
                <h4 className="uppercase font-medium text-[20px] relative pl-[30px] mb-[15px] before:bg-[#f90908] before:h-[2px] before:w-5 before:content-[''] before:absolute before:left-0 before:top-[11px]">overview</h4>
                <h3 className="text-[50px] font-bold leading-[49px] uppercase">about <span className="text-[#f90908]">Balagot & Emperado CPA’s Co</span> </h3>
              </div>
              <div className="about-content">
                <p className='font-bold text-black text-2xl'>Experience at Balagot & Emperado CPA’s Co.</p>
               

                <p className='mb-2'>At Balagot & Emperado CPA’s Co., we believe that our people are the driving force behind our success. We cultivate a culture of professionalism, collaboration, and continuous learning, where every team member is empowered to grow, innovate, and make a meaningful impact.</p>
               

                <p className='mb-2'>Our firm fosters an environment of mentorship and expertise, where knowledge is shared, achievements are celebrated, and growth opportunities are abundant. Whether through industry-leading training programs, leadership development, or hands-on experience, we ensure that our professionals are equipped to thrive in an evolving financial landscape.</p>

                <p className='mb-2'>Beyond work, we value work-life balance and camaraderie, encouraging a supportive community that uplifts and inspires. At Balagot & Emperado CPA’s Co., we don’t just build careers—we build futures.</p>


                <p className='mb-2'>Be part of a team that values excellence, integrity, and innovation. Your journey to professional success starts here.</p>
          

                {/* <ul className="about-content-list p-0 mt-[25px] mb-[30px] mx-0 list-none">
                  {AboutData.AboutList.map((item, i) => (
                    <li className="text-[18px] text-[#24262d] font-semibold mb-[15px]" key={i}>
                      <i className="fa fa-check text-[#f90908] mr-[10px]"></i>{item.title}
                    </li>
                  ))}
                </ul> */}
                <Link href={AboutData.btnlink} className="btn btn-4">{AboutData.btntext}</Link>
              </div>
            </div>
          </div>
        </div>
      </div></>
  )
}

export default About