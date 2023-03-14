import Link from 'next/link'
import React from 'react'
import Spacer from './Spacer'

const HeroLanding = () => {
  return (
    <div className="flex flex-col w-full  px-8 md:px-20 items-center landing-hero">
      <section className="flex flex-col w-full w-max-[1200px] gap-y-8 md:gap-y-12">

        <h1 className="text-5xl md:text-7xl font-medium text-white mt-36 md:w-2/3">
          Scalable Business Solutions that Perform
        </h1>
        <p className=" text-base sm:text-xl text-white">Move at the Speed of Innovation, Compromise Nothing</p>
        <div className="flex gap-x-6">
          <Link href="/capabilities">
            <button className="capabilities-button">
              Capabilities
            </button>
          </Link>
          <Link href="/capabilities">
            <button className="contact-button">
              Contact Us
            </button>
          </Link>
        </div>

        <Spacer></Spacer>
      </section>

    </div>
  )
}

export default HeroLanding