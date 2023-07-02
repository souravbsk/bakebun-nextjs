"use client"
import React from "react";
import {TbMailCheck} from "react-icons/tb"
const NewsLetter = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 container items-center">
      <h3 className="text-xl md:text-4xl  text-white font-bold">
        Signup our newsletter to get update information, news, insight or
        promotions.
      </h3>

      <div className="form-control  md:w-5/12 max-w-full ">
        <input
          type="email"
          placeholder="Email"
          className="input rounded input-bordered"
        />
        <div className="form-control mt-6">
          <button className="btn rounded text-white bg-[#6A9620] border-0"><TbMailCheck></TbMailCheck> SighUp</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
