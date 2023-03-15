import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useInView, useTrail, animated as a, useSpring } from 'react-spring'

const AboutUsContainer = () => {

    const [ref, inView, entry] = useInView({
        threshold: 0.5,
    });
    const [visited, setVisited] = useState(false);
    const trails = useTrail(5, {
        opacity: visited ? 1 : 0, transform: visited ? "translateY(0%)" :  "translateY(2%)",
        config: { mass: 5, tension: 500, friction: 80 },
    })

    const imageLeft = useSpring({
        opacity: visited ? 1 : 0,
        transform: visited ? "translateX(0%)" : "translateX(-10%)",
        config: { mass: 5, tension: 500, friction: 80},
        delay: 300 
    })
    const imageRight = useSpring({
        opacity: visited ? 1 : 0,
        transform: visited ? "translateX(0%)" : "translateX(10%)",
        config: { mass: 5, tension: 500, friction: 80},
        delay: 600 
    })


    useEffect(() => {
        if (inView)
            setVisited(true);
    }, [inView])

    const sectionText = [<p key={1} className="text-xs md:text-sm text-violet-800 font-light">MOVE AT THE SPEED OF INNOVATION, COMPROMISE NOTHING</p>,
    <h1 key={2} className="text-2xl md:text-3xl font-semibold">Business Logistics for the Digital Age</h1>,
    <hr key={3} className="mr-8 mt-2 b-2 border-violet-800"></hr>,
    <p key={4} className="text-xs font-regular leading-5 text-gray-700 mt-2">We are Gen Z Consulting, a Woman-Owned consulting company based in Gainesville, Florida. We specialize in providing a wide range of services to help businesses achieve their goals, including Talent Acquisition Services (TAS), Business Management, Financial Management, Government Contract Management, and Government Acquisition Support.</p>,
    <p key={5} className="text-xs font-regular leading-5 text-gray-700 mt-2">Our team of experienced consultants is dedicated to helping our clients navigate the complexities of the business world and achieve success. We take pride in our personalized approach, working closely with each client to develop customized solutions that meet their specific needs. At Gen Z Consulting, we are committed to delivering the highest level of service and building long-term relationships with our clients.</p>
    ];

  return (
    <div ref={ref} className="about-us-container w-full flex flex-col items-center mb-20">
        <div className="flex flex-col-reverse gap-y-8 md:flex-row justify-center w-full sm:w-full sm:max-w-[1280px] xl:max-w-[1400px]">
          <section className="relative w-full h-96 xl:h-[28rem] px-6 md:w-[40%] lg:w-2/5 gap-y-2">
            <a.div style={{opacity: imageLeft.opacity, transform: imageLeft.transform}}><Image className="flex rounded-md absolute object-cover w-64 h-64 xl:w-80 xl:h-80" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" width={531} height={354}/></a.div>
            <a.div style={imageRight} className="absolute right-8 bottom-4 "><Image className="flex rounded-md object-cover w-64 h-64 xl:w-80 xl:h-80"src="https://images.unsplash.com/photo-1573165706511-3ffde6ef1fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" width={531} height={354}/></a.div>
          </section>
          <section className="flex flex-col w-full px-6 md:w-[40%] lg:w-2/5 gap-y-2"> 
            <a.p style={{opacity: trails[0].opacity}} key={1} className="text-xs md:text-sm xl:text-base text-violet-800 font-light">MOVE AT THE SPEED OF INNOVATION, COMPROMISE NOTHING</a.p>
            <a.h1 style={{opacity: trails[1].opacity}}  key={2} className="text-2xl md:text-3xl xl:text-4xl font-semibold">Business Logistics for the Digital Age</a.h1>
            <a.hr style={{opacity: trails[2].opacity}} key={3} className="mr-8 mt-2 b-2 border-violet-800"></a.hr>
            <a.p  style={{opacity: trails[3].opacity}} key={4} className="text-xs xl:text-base font-regular leading-5 text-gray-700 mt-2">We are Gen Z Consulting, a Woman-Owned consulting company based in Gainesville, Florida. We specialize in providing a wide range of services to help businesses achieve their goals, including Talent Acquisition Services (TAS), Business Management, Financial Management, Government Contract Management, and Government Acquisition Support.</a.p>
            <a.p  style={{opacity: trails[4].opacity}} key={5} className="text-xs xl:text-base font-regular leading-5 text-gray-700 mt-2">Our team of experienced consultants is dedicated to helping our clients navigate the complexities of the business world and achieve success. We take pride in our personalized approach, working closely with each client to develop customized solutions that meet their specific needs. At Gen Z Consulting, we are committed to delivering the highest level of service and building long-term relationships with our clients.</a.p>
          </section>
        </div>
    </div>
  )
}

export default AboutUsContainer