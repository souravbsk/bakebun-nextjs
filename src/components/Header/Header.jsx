"use client";
import React, { useState } from "react";
import TopNavbar from "../TopNavbar/TopNavbar";
import Link from "next/link";

import brandLogo from "@/assets/logos/headerLogo.png";
import Image from "next/image";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isShow, setShow] = useState(false);

  const navBar = (
    <>
      <li>
        <Link className="text-lg font-medium" href="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-lg font-medium" href="/">
          About us
        </Link>
      </li>
      <li>
        <Link className="text-lg font-medium" href="/">
          Services
        </Link>
      </li>
      <li>
        <Link className="text-lg font-medium" href="/">
          Gallery
        </Link>
      </li>
      <li>
        <Link className="text-lg font-medium" href="/">
          Contact us
        </Link>
      </li>
      <li>
        <button className="bg-[#6A9620] text-lg font-medium text-white py-2 px-5 rounded-md">
          Get Started
        </button>
      </li>
    </>
  );
  return (
    <div>
      <TopNavbar></TopNavbar>
      <div className="flex py-4  items-center flex-col md:flex-row  w-full justify-between md:px-14">
        <div className=" flex-1 w-full px-3 md:px-0 flex items-center justify-between ">
          <Link href="/">
            <Image
              height={42}
              className="max-w-full w-20 md:w-40"
              width={169}
              src={brandLogo}
              alt="brandLogo"
              placeholder="blur"
            ></Image>
          </Link>

          <button onClick={() => setShow(!isShow)} className="text-2xl block md:hidden">
            <FaBars></FaBars>
          </button>
        </div>

        <ul className={`flex flex-col md:flex-row justify-end flex-1 items-center gap-5 absolute duration-300 bg-white left-0 right-0 z-[5000] md:static md:py-0 py-5 px-1 ${isShow ? "-top-96" : "top-16"}`}>{navBar}</ul>
      </div>
    </div>
  );
};

export default Header;
