"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
const Testimonial = () => {
  const [feedbacks, setFeedback] = useState([]);
  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => {
        setFeedback(data);
      });
  }, []);
  return (
    <div className="bg-[#F4F4F4]">
      <section className="container py-16 md:py-28">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-5xl font-bold">What they say</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper mt-12"
        >
          {feedbacks.map((review) => (
            <SwiperSlide key={review.id}>

                <div className="text-center md:h-72 px-12 bg-white h- py-12 flex flex-col gap-3">
                    <p>{review.feedback}</p>
                    <div className="flex flex-col md:flex-row justify-center mt-auto gap-3">
                        <Image alt={review.title} width={56} height={76} className="rounded-full w-9 h-9" src={review.image}></Image>
                        <div>
                            <h4 className="text-2xl font-semibold">{review.title}</h4>
                            <p className="text-xl font-medium">{review.designation}</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonial;
