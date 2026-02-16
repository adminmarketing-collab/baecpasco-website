"use client";
import React from "react";
import location_icon from "../../public/img/icons/location.png";
import Image from "next/image";

const Card = ({ title, desc, mapSrc }) => (
  <div className="locationCard about-single-counter border border-[#f1f1f1] rounded-[20px] transition-all duration-[0.3s] cursor-pointer hover:shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)] text-left bg-white p-3 flex flex-col">
    <p className="font-bold flex items-center">
      <span className="mr-2 shrink-0">
        <Image
          className="rounded-full w-[25px] h-[25px]"
          src={location_icon}
          alt="icon"
        />
      </span>
      {title}
    </p>

    <p className="mt-2 min-h-[90px] lg:min-h-[110px]">{desc}</p>

    {mapSrc ? (
      <div className="mt-4 w-full overflow-hidden rounded-[12px] border border-black/5 mt-auto">
        <iframe
          className="block w-full h-[200px] border-0"
          src={mapSrc}
          allowFullScreen
          loading="lazy"
        />
      </div>
    ) : null}
  </div>
);

const Locations = () => {
  return (
    <>
      <div
        id="merox-services-area"
        className="merox-services-area py-8 md:py-12 relative z-[1]"
      >
        <div className="container mx-auto px-2">
          <div className="text-center">
             <h1 className="text-[50px] font-bold leading-[1.1] uppercase mb-8">
              Offices/Our Locations
            </h1>

            <h3 className="text-[18px] pb-10">
              Find the nearest{" "}
              <span className="text-red-500">Balagot & Emperado CPA’s Co.</span>{" "}
              location and the direct contact numbers of our offices to ensure a
              seamless and efficient communication experience. Our dedicated
              professionals are always here to help!
            </h3>
          </div>

          {/* ✅ DESKTOP-ONLY CUSTOM LAYOUT (no Tailwind breakpoints needed) */}
          <div className="locationsGrid">
            <Card
              title="Davao-Main"
              desc="Davao East Head Corporate Office: 2F GDCI Building, F. Torres St., Davao City, 8000"
              mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.372628222302!2d125.6092571757151!3d7.082727816410669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96da71cb5e95f%3A0x54abcc56c5caee02!2sBalagot%20%26%20Co.!5e0!3m2!1sen!2sph!4v1747107484426!5m2!1sen!2sph"
            />

            <Card
              title="Kidapawan"
              desc="Kidapawan West Head Corporate Office: Purok 2, Brgy. Magsaysay, Kidapawan City, North Cotabato, 9400"
              mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.973861412083!2d125.07657897571491!3d7.012356917288025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f8f90c50b1af31%3A0x57edc38516f6d49!2sBalagot%20%26%20Co.%20Kidapawan!5e0!3m2!1sen!2sph!4v1747107542041!5m2!1sen!2sph"
            />

            <Card
              title="Midsayap"
              desc="Midsayap Corporate Office: 2F Triple A Building, Poblacion 2, Midsayap, Cotabato, 9410"
              mapSrc="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d494.8097025222825!2d124.5319772!3d7.1862135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f89d7de48bffdf%3A0xa317478e0da95754!2sMotorboy%20Marketing%20Midsayap!5e0!3m2!1sen!2sph!4v1752017802106!5m2!1sen!2sph"
            />

            <Card
              title="Koronadal"
              desc="Koronadal Corporate Office: MB Building, Upper Balmores St., Brgy. GPS, Koronadal City, South Cotabato, 9506"
              mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.174030930876!2d124.8536584!3d6.4996399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f81986031798a7%3A0x7863b05220af0806!2sBalagot%20%26%20Co.%20CPAs%20Marbel%20Branch!5e0!3m2!1sen!2sph!4v1747104875386!5m2!1sen!2sph"
            />

            <Card
              title="Bukidnon"
              desc="Bukidnon Corporate Office: 2F, No. 0430 Zone 1, Brgy. 10 Impalambong, Malaybalay City, 8700"
              mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.5187793543655!2d125.12332757571951!3d8.150370502121708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff01794fcd7095%3A0x9d1a4831c15e98b5!2sBalagot%20and%20Emperado%20CPA&#39;s%20Co!5e0!3m2!1sen!2sph!4v1747107670225!5m2!1sen!2sph"
            />

            <Card
              title="Samal"
              desc="Samal Corporate Office: 2F TMC Building, Sitio Kaimito, Brgy. Miranda-Pichon, Babak District, Island Garden City of Samal, Davao del Norte, 8119"
              mapSrc="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d561.14091213977!2d125.69016533441177!3d7.140626118220857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sBrgy.%20Miranda-Pichon%2C%20Babak%20District%2C%20Island%20Garden%20City%20of%20Samal%2C%20Davao%20del%20Norte%2C%208119!5e0!3m2!1sen!2sph!4v1770730305227!5m2!1sen!2sph"
            />
          </div>
        </div>
      </div>

      {/* ✅ CSS MEDIA QUERIES: 1 col mobile, 2 cols tablet, 3 cols desktop */}
      <style jsx>{`
        .locationsGrid {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          align-items: stretch;
        }

        .locationCard {
          width: 100%;
          min-width: 0;
        }

        @media (min-width: 640px) {
          .locationCard {
            width: calc((100% - 24px) / 2);
          }
        }

        @media (min-width: 1024px) {
          .locationCard {
            width: calc((100% - 48px) / 3);
          }
        }
      `}</style>
    </>
  );
};

export default Locations;
