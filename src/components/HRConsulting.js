import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

const HRConsulting = () => {
  return (
    <div className="flex flex-col w-full xl:px-20 md:px-10 mb-16 mt-8 md:my-16 items-center">
        <section className="flex flex-row w-[85%] justify-center gap-x-8 lg:gap-x-12 2xl:gap-x-16 sm:px-4 xl:px-0 lg:w-max-[1300px] xl:max-w-[1400px] gap-y-2">
        <div className="flex flex-col sm:w-full md:w-5/12 gap-y-1">
                <p className="text-xs xl:text-base 2xl:text-lg md:text-sm text-violet-800 font-light">END-TO-END HR AUGMENTATION</p>
                <h1 className="text-2xl xl:text-4xl 2xl:text-5xl md:text-3xl  font-semibold">Human Resources Consulting</h1>
                <p className="text-sm xl:text-base 2xl:text-lg xl:mt-6 max-w-[1300px] md:text-sm text-gray-800 font-regular">Our HR consulting services provide businesses with customized solutions to manage their workforce effectively. Our experienced HR professionals can assist with:</p>
                
                <ul className="flex flex-col mt-8 gap-y-6 text-base md:text-base xl:text-base 2xl:text-xl font-medium">
                    <li className="flex gap-x-4 items-center"><div><FontAwesomeIcon icon={faSquareCheck} className="h-6 w-6" color={"rgba(144, 72, 226, 0.65)"}/></div>HR policy development and implementation</li>
                    <li className="flex gap-x-4 items-center"><div><FontAwesomeIcon icon={faSquareCheck} className="h-6 w-6" color={"rgba(144, 72, 226, 0.65)"}/></div>Employee relations and conflict resolution</li>
                    <li className="flex gap-x-4 items-center"><div><FontAwesomeIcon icon={faSquareCheck} className="h-6 w-6" color={"rgba(144, 72, 226, 0.65)"}/></div>Performance management and employee evaluations</li>
                    <li className="flex gap-x-4 items-center"><div><FontAwesomeIcon icon={faSquareCheck} className="h-6 w-6" color={"rgba(144, 72, 226, 0.65)"}/></div>Training and development programs</li>
                </ul>
            </div>
            <div className="hidden md:flex flex-col xl:h-full justify-center xl:w-[30%]">
                <Image className="object-contain w-[300px] xl:w-[350px]" src="https://images.pexels.com/photos/3746957/pexels-photo-3746957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={687} height={1031}/>
            </div>
        </section>
    </div>
  )
}

export default HRConsulting