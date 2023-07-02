import Image from "next/image";
import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import BeautyBloomsImg from "@/assets/Home/gardener.png";

const BeautyBlooms = () => {
  return (
    <section className="bg-beautyBloom relative">
      <div className="container">
        <div className="hero">
          <div className="hero-content p-0 md:gap-16 items-stretch flex-col lg:flex-row">
            <div
              data-aos="fade-left"
              className="text-center py-16 md:py-28 flex-1 lg:text-left"
            >
              <span className="text-xl  text-[#26501A]">WHY CHOOSE US</span>
              <h1 className="text-3xltext-2xl  md:text-4xl mt-3 md:mt-6 font-bold">
                Beauty blooms in the heart as well as garden.md:
              </h1>
              <p className="py-3 md:py-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <ul className="space-y-8">
                <li className="flex items-start  gap-3 text-left">
                  <AiOutlineCheckCircle className="text-[#6C9723] text-8xl -mt-6"></AiOutlineCheckCircle>
                  <div>
                    <h3 className="text-xl md:text-2xl mb-2 font-semibold text-[#6A9620]">
                      The Best Local Lawn Care Services
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </p>
                  </div>
                </li>
                <li className="flex items-start  gap-3 text-left">
                  <AiOutlineCheckCircle className="text-[#6C9723] text-8xl -mt-6"></AiOutlineCheckCircle>
                  <div>
                    <h3 className="text-xl md:text-2xl mb-2 font-semibold text-[#6A9620]">
                      Save You Time and Money on Lawn Care
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </p>
                  </div>
                </li>
                <li className="flex items-start  gap-3 text-left">
                  <AiOutlineCheckCircle className="text-[#6C9723] text-8xl -mt-6"></AiOutlineCheckCircle>
                  <div>
                    <h3 className="text-xl md:text-2xl mb-2 font-semibold text-[#6A9620]">
                      24/7 Premium Support
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:-mt-36 h-full  flex-1">
              <Image
                data-aos="fade-up"
                alt="letYourHouseImg"
                className="w-full h-[600px] md:h-[1000px]"
                placeholder="blur"
                src={BeautyBloomsImg}
              ></Image>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r absolute bottom-0 left-0 right-0 from-[#143B03] to-[#608B1C]">
        <div className="container py-12 grid-cols-2 grid md:grid-cols-4 gap-3 md:gap-5">
          <div className="text-center md:border-r">
            <p className="text-2xl  md:text-4xl font-bold text-[#EAF722]">
              14K+
            </p>
            <p className="font-semibold text-[#F4F4F4] md:text-xl">
              Happy Customer
            </p>
          </div>
          <div className="text-center md:border-r">
            <p className="text-2xl  md:text-4xl font-bold text-[#EAF722]">
              27K+
            </p>
            <p className="font-semibold text-[#F4F4F4] md:text-xl">
              Project Done
            </p>
          </div>
          <div className="text-center md:border-r">
            <p className="text-2xl  md:text-4xl font-bold text-[#EAF722]">
              25K+
            </p>
            <p className="font-semibold text-[#F4F4F4] md:text-xl">
              Years Experience
            </p>
          </div>
          <div className="text-center ">
            <p className="text-2xl  md:text-4xl font-bold text-[#EAF722]">
              4.7
            </p>
            <p className="font-semibold text-[#F4F4F4] md:text-xl">
              Customer Reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeautyBlooms;
