"use client";
import React from "react";
import bgimg from "../../public/img/services/services-bg.jpg";
import icon1 from "../../public/img/services/1.png";
import icon2 from "../../public/img/services/2.png";
import icon3 from "../../public/img/services/3.png";
import icon4 from "../../public/img/services/4.png";
import icon5 from "../../public/img/services/5.png";
import icon6 from "../../public/img/services/6.png";
import location_icon from "../../public/img/icons/location.png";
import Image from "next/image";



const Locations = () => {
  return (
    <>
      <div
        id="merox-services-area"
        className="merox-services-area py-32 bg- relative z-[1] md:pb-20 sm:pb-20"
      >
        <div className="merox-services-area-img absolute right-0 top-0 h-full w-2/3 bg-no-repeat bg-center bg-cover -z-[1]">
          {/* <Image
            className="h-full w-full"
            src={ServicesData.bgimg}
            alt="bgimage"
          /> */}
        </div>

        <div className="container ">
          <p className="  font-medium text-[20px] relative pl-[30px] mb-[15px] before:bg-[#f90908] before:h-[2px] before:w-5 before:content-[''] before:absolute before:left-0 before:top-[11px]">
            Offices/Our Locations.
          </p>

          <h3 className=" text-indent text-[18px] ">Find the nearest <span className="text-red-500">Balagot & Emperado CPA’s Co.</span> location and the direct contact numbers of our offices to ensure a seamless and efficient communication experience. Our dedicated professionals are always here to help!
          </h3>


          <div className="xl:grid xl:grid-cols-4 xl:gap-x-8 xl:gap-y-8 gap-y-10">

            <div className="about-single-counter  border-[1px] border-solid border-[#f1f1f1] py-2 px-[10px] rounded-[20px] transition-all duration-[0.3s] cursor-pointer mb-[30px] hover:shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)] text-left services-box bg-white p-2 rounded sm:mb-10">
              <p className="font-bold  flex"><span className={`text-[#f90908]  mr-2`}>  <Image
                className="rounded-full w-[25px] h-[25px]"
                src={location_icon}
                alt="icon"
              /></span>Davao-Main</p>
              {/* <p><span className={`text-[#f90908]  fa fa-mobile mr-2`}></span> Address </p> */}
              <p><span className={`text-[#f90908]  mr-2`}></span>Davao East Head Corporate Office: 2F GDCI Building, F. Torres St., Davao City, 8000
              </p>
              <br />
              <iframe
                id="merox-map"
                className="w-full h-[200px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.372628222302!2d125.6092571757151!3d7.082727816410669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96da71cb5e95f%3A0x54abcc56c5caee02!2sBalagot%20%26%20Co.!5e0!3m2!1sen!2sph!4v1747107484426!5m2!1sen!2sph" allowFullScreen={true}
              ></iframe>
            </div>


            <div className="about-single-counter  border-[1px] border-solid border-[#f1f1f1] py-2 px-[10px] rounded-[20px] transition-all duration-[0.3s] cursor-pointer mb-[30px] hover:shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)] text-left services-box bg-white p-2 rounded sm:mb-10">
              <p className="font-bold  flex"><span className={`text-[#f90908]  mr-2`}><Image
                className="rounded-full w-[25px] h-[25px]"
                src={location_icon}
                alt="icon"
              /></span>Kidapawan</p>
              {/* <p><span className={`text-[#f90908]  fa fa-mobile mr-2`}></span> Address </p> */}
              <p><span className={`text-[#f90908]  mr-2`}></span>Kidapawan West Head Corporate Office: Purok 2, Brgy. Magsaysay, Kidapawan City, North Cotabato, 9400</p>
              <br />
              <iframe
                id="merox-map"
                className="w-full h-[200px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.973861412083!2d125.07657897571491!3d7.012356917288025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f8f90c50b1af31%3A0x57edc38516f6d49!2sBalagot%20%26%20Co.%20Kidapawan!5e0!3m2!1sen!2sph!4v1747107542041!5m2!1sen!2sph"
                allowFullScreen={true}
              ></iframe>
            </div>



            <div className="about-single-counter  border-[1px] border-solid border-[#f1f1f1] py-2 px-[10px] rounded-[20px] transition-all duration-[0.3s] cursor-pointer mb-[30px] hover:shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)] text-left services-box bg-white p-2 rounded sm:mb-10">
              <p className="font-bold  flex"><span className={`text-[#f90908]  mr-2`}><Image
                className="rounded-full w-[25px] h-[25px]"
                src={location_icon}
                alt="icon"
              /></span>Midsayap</p>
              {/* <p><span className={`text-[#f90908]  fa fa-mobile mr-2`}></span> Address </p> */}
              <p><span className={`text-[#f90908]  mr-2`}></span>Midsayap Corporate Office: 2F Triple A Building, Poblacion 2, Midsayap, Cotabato, 9410
              </p>
              <br />
              <iframe
                id="merox-map"
                className="w-full h-[200px]"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d494.8097025222825!2d124.5319772!3d7.1862135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f89d7de48bffdf%3A0xa317478e0da95754!2sMotorboy%20Marketing%20Midsayap!5e0!3m2!1sen!2sph!4v1752017802106!5m2!1sen!2sph"
                allowFullScreen={true}
              ></iframe>
            </div>



            <div className="about-single-counter  border-[1px] border-solid border-[#f1f1f1] py-2 px-[10px] rounded-[20px] transition-all duration-[0.3s] cursor-pointer mb-[30px] hover:shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)] text-left services-box bg-white p-2 rounded sm:mb-10">
              <p className="font-bold  flex"><span className={`text-[#f90908]  mr-2`}><Image
                className="rounded-full w-[25px] h-[25px]"
                src={location_icon}
                alt="icon"
              /></span>Koronadal</p>
              {/* <p><span className={`text-[#f90908]  fa fa-mobile mr-2`}></span> Address </p> */}
              <p><span className={`text-[#f90908]  mr-2`}></span>Koronadal Corporate Office: MB Building, Upper Balmores St., Brgy. GPS, Koronadal City, South Cotabato, 9506
              </p>
              <br />
              <iframe
                id="merox-map"
                className="w-full h-[200px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.174030930876!2d124.8536584!3d6.4996399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f81986031798a7%3A0x7863b05220af0806!2sBalagot%20%26%20Co.%20CPAs%20Marbel%20Branch!5e0!3m2!1sen!2sph!4v1747104875386!5m2!1sen!2sph"
                allowFullScreen={true}
              ></iframe>
            </div>




            <div className="about-single-counter  border-[1px] border-solid border-[#f1f1f1] py-2 px-[10px] rounded-[20px] transition-all duration-[0.3s] cursor-pointer mb-[30px] hover:shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)] text-left services-box bg-white p-2 rounded sm:mb-10">
              <p className="font-bold  flex"><span className={`text-[#f90908]  mr-2`}><Image
                className="rounded-full w-[25px] h-[25px]"
                src={location_icon}
                alt="icon"
              /></span>Bukidnon</p>
              {/* <p><span className={`text-[#f90908]  fa fa-mobile mr-2`}></span> Address </p> */}
              <p><span className={`text-[#f90908]  mr-2`}></span>Bukidnon Corporate Office: 2F, No. 0430 Zone 1, Brgy. 10 Impalambong, Malaybalay City, 8700
              </p>
              <br />
              <iframe
                id="merox-map"
                className="w-full h-[200px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.5187793543655!2d125.12332757571951!3d8.150370502121708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff01794fcd7095%3A0x9d1a4831c15e98b5!2sBalagot%20and%20Emperado%20CPA&#39;s%20Co!5e0!3m2!1sen!2sph!4v1747107670225!5m2!1sen!2sph"
                allowFullScreen={true}
              ></iframe>
            </div>


            <div className="about-single-counter  border-[1px] border-solid border-[#f1f1f1] py-2 px-[10px] rounded-[20px] transition-all duration-[0.3s] cursor-pointer mb-[30px] hover:shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)] text-left services-box bg-white p-2 rounded sm:mb-10">
              <p className="font-bold  flex"><span className={`text-[#f90908]  mr-2`}><Image
                className="rounded-full w-[25px] h-[25px]"
                src={location_icon}
                alt="icon"
              /></span>Samal</p>
              {/* <p><span className={`text-[#f90908]  fa fa-mobile mr-2`}></span> Address </p> */}
              <p><span className={`text-[#f90908]  mr-2`}></span>Samal Corporate Office:2F TMC Building, Sitio Kaimito, Brgy. Miranda-Pichon, Babak District, Island Garden City of Samal, Davao del Norte, 8119
              </p>
              <br />
              {/* <iframe
                id="merox-map"
                className="w-full h-[200px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.5187793543655!2d125.12332757571951!3d8.150370502121708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff01794fcd7095%3A0x9d1a4831c15e98b5!2sBalagot%20and%20Emperado%20CPA&#39;s%20Co!5e0!3m2!1sen!2sph!4v1747107670225!5m2!1sen!2sph"
                allowFullScreen={true}
              ></iframe> */}
            </div>





          </div>

        </div>

      </div>
    </>
  );
};

export default Locations;
