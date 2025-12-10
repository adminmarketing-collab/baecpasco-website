"use client"
import React from 'react'
import aboutimg1 from "../../public/img/team/7.png"
import Image from 'next/image'
import Link from 'next/link'

const AboutData = {
  aboutimg1: aboutimg1,
  title: "MEROX OVERVIEW",
  title2: 'about <span class="text-[#f90908]">merox</span> pro',
  brief: "Balagot & Emperado CPA’s Co. is a trusted firm that offers accounting and financial services. With years of experience, we help clients make smart and honest financial decisions. We focus on giving clear advice, practical solutions, and excellent service.",
  btntext: "about us",
  btnlink: "/history",
  AboutList: [
    {
      title: "Branch Operations & Client Engagement",
    },
    {
      title: " Local Business & Financial Consultancy",
    },
    {
      title: " Accounting & Tax Compliance",
    },
  ],
}

const Profile_7 = () => {
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
                <h4 className="uppercase font-medium text-[20px] relative pl-[30px] mb-[15px] before:bg-[#f90908] before:h-[2px] before:w-5 before:content-[''] before:absolute before:left-0 before:top-[11px]">Profile overview</h4>
                <h3 className="text-[50px] font-bold leading-[49px] uppercase">Rey N. Cabilan</h3>
              </div>
              <div className="about-content">
                <p><span className={`text-[#f90908]  fa fa-bookmark mr-2`}></span>Branch Manager</p>
                <p><span className={`text-[#f90908]  fa fa-map-pin mr-2`}></span> Bukidnon Corporate Office</p>
                <p><span className={`text-[#f90908]  fa fa-map-marker mr-2`}></span> Address: 2F, No. 0430 Zone 1, Barangay 10, Impalambong, Malaybalay City, 8700</p>

                <br/>
                <p><span className={`text-[#f90908]  fa fa-mobile mr-2`}></span> Mobile:  0994-586-7478</p>
                <p><span className={`text-[#f90908]  fa fa-phone mr-2`}></span> Landline: 088-314-1713</p>
                <p><span className={`text-[#f90908]  fa fa-envelope-o mr-2`}></span> Email:  rey.cabilan@baecpasco.com</p>

                <br/>
               
                <p className='text-2xl '><span className={` text-[#f90908]  fa fa-suitcase mr-2`}></span>  Specialty & How He Can Assist You:</p>
                <ul className="about-content-list p-0 mt-[25px] mb-[30px] mx-0 list-none">
                  {AboutData.AboutList.map((item, i) => (
                    <li className="text-[18px] text-[#24262d] font-semibold mb-[15px]" key={i}>
                      <i className="fa fa-check text-[#f90908] mr-[10px]"></i>{item.title}
                    </li>
                  ))}
                </ul>

                <br/>
              <h1 className='mb-10 text-2xl'> <span className='fa fa-id-card-o text-[#f90908]'></span> Contact  for branch-specific concerns, accounting solutions, and local compliance assistance.</h1>
                <Link href={AboutData.btnlink} className="btn btn-4">{AboutData.btntext}</Link>
              </div>
            </div>
          </div>
        </div>
      </div></>
  )
}

export default Profile_7