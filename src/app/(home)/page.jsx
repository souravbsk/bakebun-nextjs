import React from 'react';
import HeroSlider from './HeroSlider';
import LetYourHouse from "./LetYourHouse"
import ServiceSection from './ServiceSection';
import FixedBanner from './FixedBanner';
import WeOffer from './WeOffer';
import BeautyBlooms from './BeautyBlooms';
import Testimonial from './Testimonial';
const page = () => {
    return (
        <div>
          <HeroSlider></HeroSlider>
          <LetYourHouse></LetYourHouse>
          <ServiceSection></ServiceSection>
          <FixedBanner></FixedBanner>
          <WeOffer></WeOffer>
          <BeautyBlooms></BeautyBlooms>
          <Testimonial></Testimonial>
        </div>
    );
};

export default page;