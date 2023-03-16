import Image from 'next/image';
import React, { useState } from 'react'
import { useInView, animated as a, useTrail } from 'react-spring';

const AboutIntro = () => {

    const [visited, setVisited] = useState(true);
    const [ref, inView, entry] = useInView({
        threshold: 0.6,
    });
    const trails = useTrail(2, {
        opacity: visited ? 1 : 0, transform: visited ? "translateY(0%)" :  "translateY(2%)",
        config: { mass: 5, tension: 500, friction: 80 },
    })
  return (
    <div ref={ref} className="w-full svg-container-2 mt-20 flex flex-col items-center">
        <div className="flex flex-col gap-y-2 w-full px-6 md:px-0 sm:max-w-[1280px] xl:max-w-[1400px]">
          <section className="flex flex-col w-full items-center gap-y-2">
            <a.p style={trails[0]} className="text-xs xl:text-base md:text-sm text-violet-800 font-light">FORWARD-THINKING, FIELD-TESTED HR EXPERTS WITH A COMMITMENT TO EXCELLENCE</a.p>
            <a.h1 style={trails[1]} className="text-2xl xl:text-4xl md:text-3xl font-semibold">Who We are</a.h1>
          </section>
          <section className="flex mt-6 sm:mt-12 mb-10 flex-col gap-y-8 sm:flex-row w-full justify-center gap-x-12">
            <div className="w-full sm:w-1/3 flex flex-col gap-y-4 ">
                <p className="text-sm xl:text-base md:text-sm text-gray-800" >Welcome to Gen Z Consulting, a small woman-owned business specializing in Talent Acquisition Services (TAS), Business Management, Financial Management, Government Contract Management, and Government Acquisition Support. We help businesses succeed by providing high-quality, customized consulting services that address their specific needs. We are based in Gainesville, Florida and serve clients nationwide.</p>
                <h1 className="text-2xl xl:text-4xl md:text-3xl font-semibold">Our Mission</h1>
                <p className="text-sm xl:text-base md:text-sm text-gray-800">At Gen Z Consulting, our mission is to empower small businesses and non-profit organizations by providing all-encompassing HR solutions that enable them to focus on growth and achieve their full potential. We believe that businesses of all sizes deserve access to high-quality HR services, and we are committed to delivering customized solutions that meet the unique needs of each of our clients.</p>
            </div>
            <div className="sm:w-1/3 flex h-full justify-center items-center">
                <Image className="w-[80%] sm:w-full" src="/about-intro.png" height="868" width="942"/>
            </div>
          </section>
        </div>
    </div>
  )
}

export default AboutIntro