"use client";
import { useEffect, useState } from "react";
import OfferCard from "./OfferCard";

const WeOffer = () => {
  const [offers, setOffer] = useState([]);
  useEffect(() => {
    fetch("/offer.json")
      .then((res) => res.json())
      .then((data) => {
        setOffer(data);
      });
  }, []);

  return (
    <div className="bg-[#F4F4F4]">
      <section className="container py-16 md:py-28">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xl text-[#26501A]">WHAT WE OFFER</span>
          <h2 className="text-3xl md:text-5xl font-bold">
            Let your house have a breath of fresh air.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-8">
          {offers?.map((offer) => (
            <OfferCard key={offer.id} offers={offer}></OfferCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WeOffer;
