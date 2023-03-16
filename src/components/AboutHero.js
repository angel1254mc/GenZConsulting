import Link from 'next/link'
import React from 'react'
import { animated as a, config, useTrail } from 'react-spring'
import Spacer from './Spacer'


const AboutHero = () => {
  
    const heroTrail = useTrail(4, {
      from: {
        opacity: 0,
        transform: "translateY(-20%)"
      },
      to: {
        opacity: 1,
        transform: "translateY(0%)"
      },
      delay: 300,
      config: config.molasses
    })
    return (
      <div className="flex flex-col w-full  px-8 xl:px-20 md:px-20 items-center about-hero">
        <section className="flex flex-col w-full w-max-[1200px] xl:max-w-[1400px] gap-y-8 md:gap-y-12">
  
          <spacer></spacer>   
          <a.h1 style={heroTrail[0]} className="text-4xl md:text-6xl font-medium text-white mt-36 md:w-3/5 xl:text-7xl 2xl:text-8xl xl:w-2/3">
            Transform Your Business Operations with Gen Z Consulting
          </a.h1>
          <a.p style={heroTrail[1]} className="hero-subtitle-text text-lg sm:text-2xl xl:text-3xl text-white">Talent Acquisition and Management Experts</a.p>
          <Spacer></Spacer>
        </section>
  
      </div>
    )
  }
  
  export default AboutHero