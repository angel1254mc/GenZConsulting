import React, { useEffect, useState } from 'react'
import Spacer from './Spacer'
import { animated as a, useInView, useTrail } from 'react-spring'
import Link from 'next/link';
import Image from 'next/image';
const CallToActionCapabilities = () => {
    const [visited, setVisited] = useState(true);
    const [ref, inView, entry] = useInView({
        threshold: 0.6,
    });
    const trails = useTrail(2, {
        opacity: visited ? 1 : 0, transform: visited ? "translateY(0%)" :  "translateY(2%)",
        config: { mass: 5, tension: 500, friction: 80 },
    })
  return (
    <div ref={ref} className="w-full contact-capabilities  border-2 border-gray-200 mt-10 flex flex-col items-center">
        <div className="flex flex-col gap-y-2 w-full md:px-0 sm:max-w-[1280px] xl:max-w-[1400px]">
            <div className="flex flex-col items-center md:flex-row justify-center gap-x-10 gap-y-4 p-6 lg:p-8">
            <section className="w-full h-[300px] md:w-2/5 md:h-[400px] contact-image-section">
                <Image quality={90} className="w-full h-full object-cover object-center"src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" height={929} width={619}/>
            </section>
            <section className="flex gap-y-4 py-4 flex-col w-[90%] md:w-1/3">
                <a.p style={trails[0]} className="text-base xl:text-base md:text-sm text-violet-800 font-light">GET IN TOUCH WITH US, AND SEE HOW WE CAN HELP ENHANCE YOUR BUSINESS</a.p>
                <a.h1 style={trails[1]} className="text-2xl xl:text-4xl md:text-3xl font-semibold">Reach Out To Us</a.h1>
                <a.p style={trails[0]} className="text-base xl:text-lg md:text-sm text-gray-800 font-regular">We understand that every business has unique needs and challenges. Our multidisciplinary team of experts is dedicated to providing tailored solutions and personalized service to help you achieve your goals. Contact us today to learn more about how we can help your business succeed.</a.p>
                <div className="w-full flex justify-center">
                    <Link href="/contact-us">
                        <button className="font-medium px-6 py-2  rounded-md sm:text-base text-lg contact-about-button">Contact Us</button>
                    </Link>
                </div>
            </section>
            </div>
        </div>
    </div>
  )
}

export default CallToActionCapabilities