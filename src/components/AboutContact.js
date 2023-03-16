import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { useInView, useTrail, animated as a} from 'react-spring';

const AboutContact = () => {
    const [visited, setVisited] = useState(true);
    const [ref, inView, entry] = useInView({
        threshold: 0.6,
    });
    const trails = useTrail(2, {
        opacity: visited ? 1 : 0, transform: visited ? "translateY(0%)" :  "translateY(2%)",
        config: { mass: 5, tension: 500, friction: 80 },
    })
  return (
    <div ref={ref} className="w-full bg-white  border-2 border-gray-200 mt-10 flex flex-col items-center">
        <div className="flex flex-col gap-y-2 w-full md:px-0 sm:max-w-[1280px] xl:max-w-[1400px]">
            <div className="flex flex-col items-center md:flex-row justify-center gap-x-10 gap-y-4 p-6 lg:p-8">
            <section className="w-full h-[300px] md:w-[400px] md:h-[400px] contact-image-section">
                <Image quality={90} className="w-full h-full object-cover object-center"src="https://images.pexels.com/photos/8067767/pexels-photo-8067767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height={929} width={619}/>
            </section>
            <section className="flex gap-y-4 py-4 flex-col w-[90%] md:w-1/3">
                <a.p style={trails[0]} className="text-xs xl:text-base md:text-sm text-violet-800 font-light">GET IN TOUCH WITH US, AND SEE HOW WE CAN HELP ENHANCE YOUR BUSINESS</a.p>
                <a.h1 style={trails[1]} className="text-2xl xl:text-4xl md:text-3xl font-semibold">Reach Out To Us</a.h1>
                <a.p style={trails[0]} className="text-sm xl:text-base md:text-sm text-gray-800 font-light">We are passionate about what we do and are committed to helping businesses of all sizes achieve their full potential. If you&apos;re interested in learning more about our services or how we can help your business grow, please don&apos;t hesitate to get in touch. Our team of experts is here to answer any questions you may have and help you develop a customized solution that meets your unique needs.</a.p>
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

export default AboutContact