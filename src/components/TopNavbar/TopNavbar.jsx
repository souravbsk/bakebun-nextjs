"use client"
import React from 'react';
import {FaMapMarkerAlt, FaPhone} from "react-icons/fa"
import {MdEmail} from "react-icons/md"

const TopNavbar = () => {
    return (
        <div className='px-14 hidden md:flex items-center justify-between border-b'>
<p className='flex items-center gap-2'>
<FaMapMarkerAlt className='text-[#6A9620]'></FaMapMarkerAlt> 
Jalan Cempaka Wangi No 22
    </p>     
    <ul className='flex items-center gap-3'>
        <li className='flex items-center border-l px-5 py-4 gap-2'><MdEmail className='text-[#6A9620]'></MdEmail> support@yourdomain.tld</li>
        <li className='flex items-center border-l px-5 py-4 gap-2'><FaPhone className='text-[#6A9620]'></FaPhone> 888-700-234</li>
    </ul>
       </div>
    );
};

export default TopNavbar;