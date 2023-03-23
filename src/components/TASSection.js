import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

const TASSection = () => {
  return (
    <div className="flex flex-col w-full xl:px-20 md:px-10 my-18 items-center">
        <section className="flex flex-row w-[85%] justify-center gap-x-8 lg:gap-x-12 2xl:gap-x-16 sm:px-4 xl:px-0 lg:w-max-[1300px] xl:max-w-[1400px] gap-y-2">
            <div className="hidden md:flex flex-col xl:h-full justify-center md:w-2/5 xl:w-[30%]">
                <Image className="object-contain w-[300px] xl:w-[380px]" src="https://images.unsplash.com/photo-1598257006463-7c64a5a538cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" width={687} height={1031}/>
            </div>
            <div className="flex flex-col sm:w-full md:w-3/5 xl:w-6/12 gap-y-1">
                <p className="text-xs xl:text-base 2xl:text-lg md:text-sm text-violet-800 font-light">WE FIND TOP TALENT FASTER AND RETAIN THEM LONGER</p>
                <h1 className="text-2xl xl:text-4xl 2xl:text-5xl md:text-3xl  font-semibold">Talent Acquisition Services</h1>
                <p className="text-sm xl:text-base 2xl:text-lg xl:mt-6 max-w-[1300px] md:text-sm text-gray-800 font-regular">At Gen Z Consulting, we offer a comprehensive range of capabilities and services to help your business succeed. Our woman-owned consulting company specializes in various areas to ensure that we can address your unique needs and challenges. Here are the key services we provide:</p>
                
                <ul className="flex flex-col mt-8 gap-y-6 text-base md:text-base xl:text-base 2xl:text-xl font-medium">
                    <li className="flex gap-x-4 items-center"><FontAwesomeIcon icon={faSquareCheck}className="h-6" color={"rgba(144, 72, 226, 0.65)"}/> Job Description Development</li>
                    <li className="flex gap-x-4 items-center"><FontAwesomeIcon icon={faSquareCheck} className="h-6" color={"rgba(144, 72, 226, 0.65)"}/> Sourcing and Screening of Candidates</li>
                    <li className="flex gap-x-4 items-center"><FontAwesomeIcon icon={faSquareCheck} className="h-6" color={"rgba(144, 72, 226, 0.65)"}/> Interview Scheduling and Coordination</li>
                    <li className="flex gap-x-4 items-center"><FontAwesomeIcon icon={faSquareCheck} className="h-6" color={"rgba(144, 72, 226, 0.65)"}/> Offer Negotiation and Onboarding Assistance</li>
                </ul>
            </div>
        </section>
    </div>
  )
}

export default TASSection