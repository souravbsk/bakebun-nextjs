"use client"
import React from "react";
import NewsLetter from "../NewsLetter/NewsLetter";
import Link from "next/link";
import FooterLogo from "@/assets/logos/footerLogo.png";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLeaf, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="footer-clip-path pt-20 md:pt-12 pb-12 md:pb-24 bg-[#0A3000]">
      <div className=" pb-8 border-b border-slate-500">
        <NewsLetter></NewsLetter>
      </div>

      <footer className=" flex flex-col md:flex-row gap-5 pt-8 container">
        <div>
          <Link href="/">
            <Image
              width={169}
              height={42}
              src={FooterLogo}
              alt="FooterLogo"
              ></Image>
          </Link>
          <p className="text-white mt-2 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <ul className="flex gap-3 mt-8 items-center">
            <li className="hover:text-[#6A9620] cursor-pointer hover:scale-110 duration-300 bg-[#6A9620] text-white hover:bg-white text-xl p-2"><Link  href="/"><FaFacebookF></FaFacebookF></Link></li>
            <li className="hover:text-[#6A9620] cursor-pointer hover:scale-110 duration-300 bg-[#6A9620] text-white hover:bg-white text-xl p-2"><Link  href="/"><FaInstagram></FaInstagram></Link></li>
            <li className="hover:text-[#6A9620] cursor-pointer hover:scale-110 duration-300 bg-[#6A9620] text-white hover:bg-white text-xl p-2"><Link  href="/"><FaTwitter></FaTwitter></Link></li>
            <li className="hover:text-[#6A9620] cursor-pointer hover:scale-110 duration-300 bg-[#6A9620] text-white hover:bg-white text-xl p-2"><Link  href="/"><FaYoutube></FaYoutube></Link></li>
          </ul>
        </div>
        <div className="footer grid-cols-2 md:grid-cols-3 text-white">
          <div>
            <span className="text-xl font-bold mb-2 text-white">Services</span>
            <Link
              href="/"
              className="link text-base flex items-center gap-2 link-hover"
              >
              <FaLeaf className="text-green-600"></FaLeaf> Branding
            </Link>
            <Link
              href="/"
              className="link text-base flex items-center gap-2 link-hover"
              >
              <FaLeaf className="text-green-600"></FaLeaf> Design
            </Link>
            <Link
              href="/"
              className="link text-base flex items-center gap-2 link-hover"
            >
              <FaLeaf className="text-green-600"></FaLeaf> Marketing
            </Link>
            <Link
              href="/"
              className="link text-base flex items-center gap-2 link-hover"
              >
              <FaLeaf className="text-green-600"></FaLeaf> Advertisement
            </Link>
          </div>
          <div>
            <span className="text-xl font-bold mb-2 text-white">Support</span>
            <Link
              href="/"
              className="link text-base flex items-center gap-2 link-hover"
              >
              <FaLeaf className="text-green-600"></FaLeaf> About us
            </Link>
            <Link
              href="/"
              className="link text-base flex items-center gap-2 link-hover"
              >
              <FaLeaf className="text-green-600"></FaLeaf> Contact
            </Link>
            <Link
              href="/"
              className="link text-base flex items-center gap-2 link-hover"
              >
              <FaLeaf className="text-green-600"></FaLeaf> Jobs
            </Link>
            <Link
              href="/"
              className="link text-base flex items-center gap-2 link-hover"
              >
              <FaLeaf className="text-green-600"></FaLeaf> Press kit
            </Link>
          </div>
          <div>
            <span className="text-xl font-bold mb-2 text-white">Company</span>
            <Link
              href="/"
              className="link text-base flex items-center gap-2 link-hover"
            >
              <FaLeaf className="text-green-600"></FaLeaf> Terms of use
            </Link>
            <Link
              href="/"
              className="link text-base flex items-center gap-2 link-hover"
              >
              <FaLeaf className="text-green-600"></FaLeaf> Privacy policy
            </Link>
            <Link
              href="/"
              className="link text-base flex items-center gap-2 link-hover"
              >
              <FaLeaf className="text-green-600"></FaLeaf> Cookie policy
            </Link>
          </div>
        </div>
      </footer>
      
    </div>
    <div className="bg-[#0D3C00]">
    <footer className="footer gap-4 items-center py-6 container text-white ">
  <div className="items-center grid-flow-col">
    <p>Copyright © 2022 bakebun, All rights reserved. Powered by MoxCreative.</p>
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <Link href="/"> Term of use
    </Link> 
    <Link href="/">Privacy policy</Link>
    <Link href="/">Cookie policy</Link>
  </div>
</footer>
    </div>
              </>
  );
};

export default Footer;
