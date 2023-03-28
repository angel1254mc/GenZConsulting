import Link from 'next/link'
import React from 'react'
import { animated as a, config, useTrail } from 'react-spring'
import Spacer from './Spacer'

const HeroLanding = () => {
  
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
    <div className="flex flex-col w-full  px-8 xl:px-20 md:px-20 items-center landing-hero">
      <section className="flex flex-col w-full w-max-[1200px] xl:max-w-[1400px] gap-y-8 md:gap-y-12">

        <a.h1 style={heroTrail[0]} className="text-5xl md:text-7xl font-medium text-white mt-36 md:w-2/3 xl:text-8xl xl:w-2/3">
          Scalable Business Solutions that Perform
        </a.h1>
        <a.p style={heroTrail[1]} className=" text-base sm:text-xl xl:text-2xl text-white">Move at the Speed of Innovation, Compromise Nothing.</a.p>
        <div className="flex gap-x-6 lg:text-lg">
          <Link href="/capabilities">
            <a.button style={heroTrail[2]} className="capabilities-button">
              Capabilities
            </a.button>
          </Link>
          <Link href="/contact-us">
            <a.button style={heroTrail[3]} className="contact-button">
              Contact Us
            </a.button>
          </Link>
        </div>

        <Spacer></Spacer>
      </section>

    </div>
  )
}

export default HeroLanding