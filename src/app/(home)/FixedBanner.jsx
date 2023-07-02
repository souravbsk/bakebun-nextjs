import React from 'react';

const FixedBanner = () => {
    return (
        <section className=' py-16 md:py-28 home-fixedBanner'>

            <div  data-aos="zoom-in" className='text-white space-y-2 md:space-y-5 max-w-full md:w-6/12 mx-auto text-center'>
                <h2 className='text-4xl md:text-6xl font-bold'>Let’s make the world a better place.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <button className='btn bg-[#5B861A] text-white rounded'>Discover more</button>
            </div>
        </section>
    );
};

export default FixedBanner;