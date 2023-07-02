"use client";
import Image from "next/image";
import React from "react";
import letYourHouseImg from "@/assets/Home/pretty-gardener.jpg";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { HiBadgeCheck } from "react-icons/hi";
const LetYourHouse = () => {
  return (
    <section className="py-16 md:py-28 bg-letYourHouse">
      <div className="container">
        <div className="hero">
          <div className="hero-content p-0 gap-16 items-start flex-col lg:flex-row">
            <div  data-aos="fade-left" className="text-center  flex-1 lg:text-left">
              <h1 className="text-3xl md:text-4xl font-bold">
                Let your house have a breath of fresh air.
              </h1>
              <p className="py-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <ul className="space-y-8">
                <li className="text-center flex items-start  gap-3">
                  <AiOutlineCheckCircle className="text-[#6C9723] text-8xl -mt-6"></AiOutlineCheckCircle>
                  <div>
                    <h3 className="text-2xl mb-2 font-semibold text-[#6A9620]">
                      Timely response guarantee
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </p>
                  </div>
                </li>
                <li className="text-center flex items-start  gap-3">
                  <AiOutlineCheckCircle className="text-[#6C9723] text-8xl -mt-6"></AiOutlineCheckCircle>
                  <div>
                    <h3 className="text-2xl mb-2 font-semibold text-[#6A9620]">
                      Status and quality reports delivered timely
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
            <div className="card relative flex-1">
              <Image
              data-aos="fade-up"
                alt="letYourHouseImg"
                className="w-full h-[600px]"
                placeholder="blur"
                height={600}
                src={letYourHouseImg}
              ></Image>
              <div className="max-w-full hidden md:block absolute -top-10 -right-10 -z-20 w-40 h-40 md:w-64 md:h-52 border-[6px] border-green-700">
                {" "}
              </div>
              <div className="inline-flex md:w-8/12 px-8 items-start shadow-md bg-white py-4 rounded-md z-20 md:absolute -bottom-10 -left-14 gap-3">
                <HiBadgeCheck className="text-6xl text-[#6A9620]"></HiBadgeCheck>
                <div>
                  <h2 className="text-[#6A9620] mb-2 text-xl font-semibold">
                    Certified Expert
                  </h2>
                  <p>
                    Placerat nostra torquent elementum donec nec urna pretium
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetYourHouse;
