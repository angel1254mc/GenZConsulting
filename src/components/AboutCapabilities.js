import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useInView, animated as a, useTrail } from 'react-spring';
import { Navigation } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import CapabilityFlipCard from './CapabilityFlipCard';
import Spacer from './Spacer';
const AboutCapabilities = () => {

    const [visited, setVisited] = useState(false);
    const [ref, inView, entry] = useInView({
        threshold: 0.5,
    });
    const trails = useTrail(4, {
        opacity: visited ? 1 : 0, transform: visited ? "translateY(0%)" :  "translateY(2%)",
        config: { mass: 5, tension: 500, friction: 80 },
    })
    const cardTrails = useTrail(4, {
        opacity: visited ? 1 : 0, transform: visited ? "translateY(0%)" : "translateY(20%)",
        config: {mass:  5, tension: 500, friction: 80 },
        delay: 300
    })
    useEffect(() => {
      if (inView) {
        setVisited(true);
      }
    }, [inView])
  return (
    <div ref={ref} className="w-full mt-20 flex flex-col items-center">
        <div className="flex flex-col gap-y-2 w-full px-6 md:px-0 sm:max-w-[1280px] xl:max-w-[1400px]">
          <section className="flex mb-12 flex-col w-full items-center gap-y-2">
            <a.p style={trails[0]} className="text-xs xl:text-base md:text-sm text-violet-800 font-light">OUR HR AND BUSINESS OPERATION CAPABILITIES</a.p>
            <a.h1 style={trails[1]} className="text-2xl xl:text-4xl md:text-3xl font-semibold">What We Do</a.h1>
          </section>
          <div className="hidden sm:flex mb-16 flex-row sm:px-10 flex-wrap justify-center gap-2 sm:gap-4 md:gap-10 w-full items-center">
            <CapabilityFlipCard trail={cardTrails[0]} title="Human Resources & Talent Acquisition Consulting" image="/HRTASicon.png" description="Our team of experts can help you develop effective recruitment strategies, conduct candidate searches, and provide guidance on compensation and benefits to ensure that you are able to build the strongest team possible."/>
            <CapabilityFlipCard trail={cardTrails[1]} title="Financial Management" image="/FMicon.png" description="Our team of experts can help you develop and implement effective business strategies, streamline your operations, and provide guidance on everything from financial management to risk assessment."/>
            <CapabilityFlipCard trail={cardTrails[2]} title="Business Management" image="/BMicon.png" description="We offer a range of financial management services, including financial analysis, budgeting, forecasting, and reporting, to help you make informed decisions and manage your finances with confidence."/>
            <CapabilityFlipCard trail={cardTrails[3]} title="Contract Management & Acquisition Support" image="/CM&AS.png" description=" Our team of experts can help you manage all aspects of government contracting, from identifying opportunities to submitting proposals and managing contracts."/>
          </div>
          <div className="flex mb-20 sm:hidden w-full justify-center">
              <Swiper style={{width: "400px"}} className="center-swiper" navigation = {true} modules={[Navigation]}>
                <SwiperSlide className="flex">
                  <CapabilityFlipCard title="Human Resources & Talent Acquisition Consulting" image="/HRTASicon.png" description="Our team of experts can help you develop effective recruitment strategies, conduct candidate searches, and provide guidance on compensation and benefits to ensure that you are able to build the strongest team possible."/>
                </SwiperSlide>
                <SwiperSlide>
                  <CapabilityFlipCard title="Financial Management" image="/FMicon.png" description="Our team of experts can help you develop and implement effective business strategies, streamline your operations, and provide guidance on everything from financial management to risk assessment."/>
                </SwiperSlide>
               
                <SwiperSlide>
                  <CapabilityFlipCard title="Business Management" image="/BMicon.png" description="We offer a range of financial management services, including financial analysis, budgeting, forecasting, and reporting, to help you make informed decisions and manage your finances with confidence."/>
                </SwiperSlide>
                <SwiperSlide>
                <CapabilityFlipCard title="Contract Management & Acquisition Support" image="/CM&AS.png" description=" Our team of experts can help you manage all aspects of government contracting, from identifying opportunities to submitting proposals and managing contracts."/>
                </SwiperSlide>
              </Swiper>
          </div>
        </div>
    </div>
  )
}

export default AboutCapabilities