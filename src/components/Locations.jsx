"use client";
import React from "react";
import location_icon from "../../public/img/icons/location.png";
import Image from "next/image";

const Locations = () => {
  return (
    <>
      <div
        id="merox-services-area"
        className="merox-services-area py-32 relative z-[1] md:pb-20 sm:pb-20"
      >
        <div className="container">
          <div className="text-center">
            <h1 className="text-[50px] font-bold leading-[49px] uppercase pb-16">
              Offices/Our Locations
            </h1>

            <h3 className="text-[18px] pb-10 max-w-4xl mx-auto">
              Find the nearest{" "}
              <span className="text-red-500">Balagot & Emperado CPA’s Co.</span>{" "}
              location and the direct contact numbers of our offices to ensure a
              seamless and efficient communication experience. Our dedicated
              professionals are always here to help!
            </h3>
          </div>

          {/* ✅ FIX: Make it a grid on ALL breakpoints (not XL only) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* DAVAO */}
            <div className="about-single-counter h-full border border-[#f1f1f1] rounded-[20px] transition-all duration-[0.3s] cursor-pointer hover:shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)] text-left bg-white p-4">
              <p className="font-bold flex items-center">
                <span className="text-[#f90908] mr-2">
                  <Image
                    className="rounded-full w-[25px] h-[25px]"
                    src={location_icon}
                    alt="icon"
                  />
                </span>
                Davao-Main
              </p>

              <p className="mt-2">
                Davao East Head Corporate Office: 2F GDCI Building, F. Torres St.,
                Davao City, 8000
              </p>

              <div className="mt-4">
                <iframe
                  className="w-full h-[200px] rounded-[12px]"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.372628222302!2d125.6092571757151!3d7.082727816410669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96da71cb5e95f%3A0x54abcc56c5caee02!2sBalagot%20%26%20Co.!5e0!3m2!1sen!2sph!4v1747107484426!5m2!1sen!2sph"
                  allowFullScreen={true}
                  loading="lazy"
                />
              </div>
            </div>

            {/* KIDAPAWAN */}
            <div className="about-single-counter h-full border border-[#f1f1f1] rounded-[20px] transition-all duration-[0.3s] cursor-pointer hover:shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)] text-left bg-white p-4">
              <p className="font-bold flex items-center">
                <span className="text-[#f90908] mr-2">
                  <Image
                    className="rounded-full w-[25px] h-[25px]"
                    src={location_icon}
                    alt="icon"
                  />
                </span>
                Kidapawan
              </p>

              <p className="mt-2">
                Kidapawan West Head Corporate Office: Purok 2, Brgy. Magsaysay,
                Kidapawan City, North Cotabato, 9400
              </p>

              <div className="mt-4">
                <iframe
                  className="w-full h-[200px] rounded-[12px]"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.973861412083!2d125.07657897571491!3d7.012356917288025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f8f90c50b1af31%3A0x57edc38516f6d49!2sBalagot%20%26%20Co.%20Kidapawan!5e0!3m2!1sen!2sph!4v1747107542041!5m2!1sen!2sph"
                  allowFullScreen={true}
                  loading="lazy"
                />
              </div>
            </div>

            {/* MIDSAYAP */}
            <div className="about-single-counter h-full border border-[#f1f1f1] rounded-[20px] transition-all duration-[0.3s] cursor-pointer hover:shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)] text-left bg-white p-4">
              <p className="font-bold flex items-center">
                <span className="text-[#f90908] mr-2">
                  <Image
                    className="rounded-full w-[25px] h-[25px]"
                    src={location_icon}
                    alt="icon"
                  />
                </span>
                Midsayap
              </p>

              <p className="mt-2">
                Midsayap Corporate Office: 2F Triple A Building, Poblacion 2,
                Midsayap, Cotabato, 9410
              </p>

              <div className="mt-4">
                <iframe
                  className="w-full h-[200px] rounded-[12px]"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d494.8097025222825!2d124.5319772!3d7.1862135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f89d7de48bffdf%3A0xa317478e0da95754!2sMotorboy%20Marketing%20Midsayap!5e0!3m2!1sen!2sph!4v1752017802106!5m2!1sen!2sph"
                  allowFullScreen={true}
                  loading="lazy"
                />
              </div>
            </div>

            {/* KORONADAL */}
            <div className="about-single-counter h-full border border-[#f1f1f1] rounded-[20px] transition-all duration-[0.3s] cursor-pointer hover:shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)] text-left bg-white p-4">
              <p className="font-bold flex items-center">
                <span className="text-[#f90908] mr-2">
                  <Image
                    className="rounded-full w-[25px] h-[25px]"
                    src={location_icon}
                    alt="icon"
                  />
                </span>
                Koronadal
              </p>

              <p className="mt-2">
                Koronadal Corporate Office: MB Building, Upper Balmores St., Brgy.
                GPS, Koronadal City, South Cotabato, 9506
              </p>

              <div className="mt-4">
                <iframe
                  className="w-full h-[200px] rounded-[12px]"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.174030930876!2d124.8536584!3d6.4996399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f81986031798a7%3A0x7863b05220af0806!2sBalagot%20%26%20Co.%20CPAs%20Marbel%20Branch!5e0!3m2!1sen!2sph!4v1747104875386!5m2!1sen!2sph"
                  allowFullScreen={true}
                  loading="lazy"
                />
              </div>
            </div>

            {/* BUKIDNON */}
            <div className="about-single-counter h-full border border-[#f1f1f1] rounded-[20px] transition-all duration-[0.3s] cursor-pointer hover:shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)] text-left bg-white p-4">
              <p className="font-bold flex items-center">
                <span className="text-[#f90908] mr-2">
                  <Image
                    className="rounded-full w-[25px] h-[25px]"
                    src={location_icon}
                    alt="icon"
                  />
                </span>
                Bukidnon
              </p>

              <p className="mt-2">
                Bukidnon Corporate Office: 2F, No. 0430 Zone 1, Brgy. 10
                Impalambong, Malaybalay City, 8700
              </p>

              <div className="mt-4">
                <iframe
                  className="w-full h-[200px] rounded-[12px]"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.5187793543655!2d125.12332757571951!3d8.150370502121708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff01794fcd7095%3A0x9d1a4831c15e98b5!2sBalagot%20and%20Emperado%20CPA&#39;s%20Co!5e0!3m2!1sen!2sph!4v1747107670225!5m2!1sen!2sph"
                  allowFullScreen={true}
                  loading="lazy"
                />
              </div>
            </div>

            {/* SAMAL (NO MAP) */}
            <div className="about-single-counter h-full border border-[#f1f1f1] rounded-[20px] transition-all duration-[0.3s] cursor-pointer hover:shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)] text-left bg-white p-4">
              <p className="font-bold flex items-center">
                <span className="text-[#f90908] mr-2">
                  <Image
                    className="rounded-full w-[25px] h-[25px]"
                    src={location_icon}
                    alt="icon"
                  />
                </span>
                Samal
              </p>

              <p className="mt-2">
                Samal Corporate Office: 2F TMC Building, Sitio Kaimito, Brgy.
                Miranda-Pichon, Babak District, Island Garden City of Samal,
                Davao del Norte, 8119
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Locations;
