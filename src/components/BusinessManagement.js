import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

const BusinessManagement = () => {
  return (
    <div className="flex flex-col w-full xl:px-20 md:px-10  mb-20 md:my-20 items-center">
        <section className="flex flex-col gap-y-12 md:flex-row w-[85%] items-center md:justify-center gap-x-8 lg:gap-x-12 2xl:gap-x-16 sm:px-4 xl:px-0 lg:w-max-[1300px] xl:max-w-[1400px] ">
            <div className="md:flex flex-col xl:h-full justify-center w-4/5 md:w-[300px] xl:w-4/12">
                <Image className="object-cover md:h-[26rem]" src="https://images.pexels.com/photos/6457522/pexels-photo-6457522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={687} height={1031}/>
            </div>
            <div className="flex flex-col sm:w-full md:w-6/12 gap-y-1">
                <p className="text-xs xl:text-base 2xl:text-lg md:text-sm text-violet-800 font-light">WE KEEP YOUR BUSINESS OPERATING AT MAX EFFICIENCY</p>
                <h1 className="text-2xl xl:text-4xl 2xl:text-5xl md:text-3xl  font-semibold">Business Management</h1>
                <p className="text-sm xl:text-base 2xl:text-lg xl:mt-6 max-w-[1300px] md:text-sm text-gray-800 font-regular">Our Business Management services focus on helping businesses optimize their operations and achieve strategic objectives. We offer:</p>
                
                <ul className="flex flex-col mt-8 gap-y-6 text-base md:text-base xl:text-base 2xl:text-xl font-medium">
                    <li className="flex gap-x-4 items-center"><div><FontAwesomeIcon icon={faSquareCheck} className="h-6 w-6" color={"rgba(144, 72, 226, 0.65)"}/></div>Organizational structure analysis and design</li>
                    <li className="flex gap-x-4 items-center"><div><FontAwesomeIcon icon={faSquareCheck} className="h-6 w-6" color={"rgba(144, 72, 226, 0.65)"}/></div>Process improvement and optimization</li>
                    <li className="flex gap-x-4 items-center"><div><FontAwesomeIcon icon={faSquareCheck} className="h-6 w-6" color={"rgba(144, 72, 226, 0.65)"}/></div>Increase management and employee engagement</li>
                    <li className="flex gap-x-4 items-center"><div><FontAwesomeIcon icon={faSquareCheck} className="h-6 w-6" color={"rgba(144, 72, 226, 0.65)"}/></div>Strategic planning and execution</li>
                </ul>

            </div>
        </section>
    </div>
  )
}

export default BusinessManagement