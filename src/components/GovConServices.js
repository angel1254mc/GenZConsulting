import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

const GovConServices = () => {
  return (
    <div className="flex flex-col w-full xl:px-20 md:px-10 mb-16 mt-8 md:my-16 items-center">
        <section id="govcon-services" className="flex flex-row w-[85%] justify-center gap-x-8 lg:gap-x-12 2xl:gap-x-16 sm:px-4 xl:px-0 lg:w-max-[1300px] xl:max-w-[1400px] gap-y-2">
        <div className="flex flex-col sm:w-full md:w-6/12 gap-y-6 sm:gap-y-4 md:gap-y-1">
                <p className="text-xs xl:text-base 2xl:text-lg md:text-sm text-violet-800 font-light">LEVERAGE OUR EXPERTISE IN THE GOVCON LANDSCAPE</p>
                <h1 className="text-2xl xl:text-4xl 2xl:text-5xl md:text-3xl  font-semibold">Government Contract Management and Acquisition Services</h1>
                <div className=" flex justify-center md:hidden">
                <Image className="object-cover rounded-lg shadow-xl w-full sm:w-4/5 h-80 object-center md:hidden" src="https://images.pexels.com/photos/62318/washington-d-c-statue-sculpture-the-peace-monument-62318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={687} height={1031}/>
                </div>
                <p className="text-sm xl:text-base 2xl:text-lg xl:mt-6 max-w-[1300px] md:text-sm text-gray-800 font-regular">Our Business Management services focus on helping businesses optimize their operations and achieve strategic objectives. We offer:</p>
                
                <ul className="flex flex-col mt-2 md:mt-6 gap-y-4 text-sm sm:text-base md:text-base xl:text-base 2xl:text-base font-medium">
                    <li className="flex gap-x-4 items-center"><div><FontAwesomeIcon icon={faSquareCheck} className="h-6 w-6" color={"rgba(144, 72, 226, 0.65)"}/></div>Proposal Writing and Submission</li>
                    <li className="flex gap-x-4 items-center"><div><FontAwesomeIcon icon={faSquareCheck} className="h-6 w-6" color={"rgba(144, 72, 226, 0.65)"}/></div>Market Research and Opportunity Identification</li>
                    <li className="flex gap-x-4 items-center"><div><FontAwesomeIcon icon={faSquareCheck} className="h-6 w-6" color={"rgba(144, 72, 226, 0.65)"}/></div>Compliance with Government Regulations and Requirements</li>
                    <li className="flex gap-x-4 items-center"><div><FontAwesomeIcon icon={faSquareCheck} className="h-6 w-6" color={"rgba(144, 72, 226, 0.65)"}/></div>Post-award Contract Management</li>
                    <li className="flex gap-x-4 items-center"><div><FontAwesomeIcon icon={faSquareCheck} className="h-6 w-6" color={"rgba(144, 72, 226, 0.65)"}/></div>Contract nengotiation and dispute resolution</li>
                    <li className="flex gap-x-4 items-center"><div><FontAwesomeIcon icon={faSquareCheck} className="h-6 w-6" color={"rgba(144, 72, 226, 0.65)"}/></div>Subcontractor management</li>
                </ul>
            </div>
            <div className="hidden md:flex flex-col xl:h-full justify-center xl:w-[30%]">
                <Image className="object-cover w-[350px] h-[500px] xl:w-[400px] xl:h-[550px]" src="https://images.pexels.com/photos/62318/washington-d-c-statue-sculpture-the-peace-monument-62318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={687} height={1031}/>
            </div>
        </section>
    </div>
  )
}

export default GovConServices