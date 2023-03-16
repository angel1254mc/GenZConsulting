import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import Spacer from './Spacer'

const AboutValues = () => {
  return (
    <div className="flex flex-col w-full xl:px-20 md:px-10 items-center">
      <section className="flex flex-col w-full w-max-[1300px] xl:max-w-[1400px] gap-y-8 md:gap-y-12">
            <div class="flex flex-wrap gap-6 md:gap-8 px-6 sm:px-8 2xl:pl-20 justify-center lg:justify-start w-full relative">
                <div class="flex flex-col md:full lg:mr-8 lg:w-1/3">
                <section className="flex flex-col w-full gap-y-4">
                   <p className="text-xs xl:text-base md:text-sm text-violet-800 font-light">WHAT WE VALUE IN AND OUT OF WORK</p>
                   <h1 className="text-2xl xl:text-4xl md:text-3xl font-semibold">Our Values</h1>
                   <p className="text-sm xl:text-base md:text-sm text-gray-800 font-regular">At Gen Z Consulting, we believe in embracing a modern, forward-thinking approach to consulting. It’s these values that enable us to provide our clients with exceptional service and help them achieve their goals in a way that is meaningful, effective, and sustainable. </p>
                   <p className="text-sm xl:text-base md:text-sm text-gray-800 font-regular">We are constantly striving to improve and innovate, and we believe that by staying true to our values, we can make a positive impact on the world around us and deliver more value.</p>
                 </section>
                </div>
                <div class="innovation-block flex flex-col p-6 sm:w-[270px] sm:h-[290px] md:h-[270px] 2xl:w-[300px] 2xl:h-[300px] gap-y-4">
                    <div className="flex justify-between md:text-lg font-semibold">
                        <p>Innovation</p>
                        <Image src="/innovation.svg" height={30} width={30}/>
                    </div>
                    <div className="md:text-sm 2xl:text-base">
                        <p>We are committed to staying ahead of the curve and providing our clients with cutting-edge solutions that drive results. We believe in thinking outside the box and pushing the boundaries of what's possible.</p>
                    </div>
                </div>
                <div class="collaboration-block flex flex-col p-6 gap-y-4 sm:w-[270px] sm:h-[290px] md:h-[270px] 2xl:w-[300px] 2xl:h-[300px]">
                <div className="flex w-full justify-between md:text-lg font-semibold">
                        <p className="w-2/3">Collaboration</p>
                        <Image src="/collaborate.svg" height={30} width={30}/>
                    </div>
                    <div className="md:text-sm 2xl:text-base">
                        <p>We believe that the best results come from working together. We work closely with our clients to understand their needs and develop customized solutions that meet their unique requirements.</p>
                    </div>
                </div>
                <div class="d-and-i-block xl:ml-20 flex flex-col p-6 sm:w-[270px] sm:h-[290px] md:h-[270px]  gap-y-4 2xl:w-[300px] 2xl:h-[300px]">
                    <div className="flex justify-between md:text-lg font-semibold">
                        <p className="w-2/3">Diversity and Inclusion</p>
                        <Image src="/together.svg" height={30} width={30}/>
                    </div>
                    <div className="md:text-sm 2xl:text-base">
                        <p>We are dedicated to creating a workplace that celebrates diversity and fosters inclusivity. We believe that diversity makes us stronger, and we are committed to creating a culture that respects and values differences.</p>
                    </div>
                </div>
                <div class="integrity-block flex flex-col p-6 gap-y-4 sm:w-[270px] sm:h-[290px] md:h-[270px]  2xl:w-[300px] 2xl:h-[300px]">
                <div className="flex justify-between md:text-lg font-semibold">
                        <p>Integrity</p>
                        <Image src="/honesty.svg" height={30} width={30}/>
                    </div>
                    <div className="md:text-sm 2xl:text-base">
                        <p>We believe that honesty and transparency are essential to building strong relationships with our clients. We hold ourselves to the highest ethical standards and are committed to doing the right thing, even when it's hard.</p>
                    </div>
                </div>
                <Image src={"/sticky_ntoes.png"} className="values-image hidden xl:flex absolute right-24 bottom-8 2xl:right-60 -z-10 w-96 h-96" height="868" width="1076"/>
            </div>
        </section>
        <Spacer></Spacer>
    </div>
  )
}

export default AboutValues