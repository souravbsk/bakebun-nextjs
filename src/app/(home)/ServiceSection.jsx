"use client";
import React from "react";
import { FaHourglassEnd, FaUsers } from "react-icons/fa";
import { GiLindenLeaf } from "react-icons/gi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";
import { SlDiamond } from "react-icons/sl";
const ServiceSection = () => {
  return (
    <section className="py-16 md:py-28">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-20">
          <h2 className="text-2xl md:text-4xl flex-1 font-bold">
            Make the earth cleaner, make the earth greener.
          </h2>
          <p className="flex-1">
            Lobortis purus augue auctor orci felis. Eu pede malesuada egestas
            sed laoreet aliquet fringilla. Platea cras fringilla mauris feugiat
            in iaculis nam rutrum consequat semper.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          <div className="flex md:px-8 items-start gap-3">
            <PiCertificateBold className="text-8xl md:text-6xl text-[#6A9620]"></PiCertificateBold>
            <div>
              <h2 className="text-[#6A9620] text-xl font-semibold">
                Certified Expert
              </h2>
              <p>
                Sed id netus pede ornare neque himenaeos pellentesque urna
                porttitor.
              </p>
            </div>
          </div>
          <div className="flex md:px-8 items-start gap-3">
            <FaUsers className="text-8xl md:text-6xl text-[#6A9620]"></FaUsers>
            <div>
              <h2 className="text-[#6A9620] text-xl font-semibold">
                Professional Team
              </h2>
              <p>
                Sed id netus pede ornare neque himenaeos pellentesque urna
                porttitor.
              </p>
            </div>
          </div>
          <div className="flex md:px-8 items-start gap-3">
            <GiLindenLeaf className="text-8xl md:text-6xl text-[#6A9620]"></GiLindenLeaf>
            <div>
              <h2 className="text-[#6A9620] text-xl font-semibold">
                Environmentally Friendly
              </h2>
              <p>
                Sed id netus pede ornare neque himenaeos pellentesque urna
                porttitor.
              </p>
            </div>
          </div>
          <div className="flex md:px-8 items-start gap-3">
            <SlDiamond className="text-8xl md:text-6xl text-[#6A9620]"></SlDiamond>
            <div>
              <h2 className="text-[#6A9620] text-xl font-semibold">
                More cost effective
              </h2>
              <p>
                Sed id netus pede ornare neque himenaeos pellentesque urna
                porttitor.
              </p>
            </div>
          </div>
          <div className="flex md:px-8 items-start gap-3">
            <FaHourglassEnd className="text-8xl md:text-6xl text-[#6A9620]"></FaHourglassEnd>
            <div>
              <h2 className="text-[#6A9620] text-xl font-semibold">
                Save Time and Money
              </h2>
              <p>
                Sed id netus pede ornare neque himenaeos pellentesque urna
                porttitor.
              </p>
            </div>
          </div>
          <div className="flex md:px-8 items-start gap-3">
            <MdOutlineSupportAgent className="text-8xl md:text-6xl text-[#6A9620]"></MdOutlineSupportAgent>
            <div>
              <h2 className="text-[#6A9620] text-xl font-semibold">
              24/7 Premium Support
              </h2>
              <p>
                Sed id netus pede ornare neque himenaeos pellentesque urna
                porttitor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
