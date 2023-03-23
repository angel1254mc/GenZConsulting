import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

const TASSuccesses = () => {
  return (
    <div className="flex flex-col w-full xl:px-20 md:px-10  my-10 py-10 items-center bg-pink-200">
    <section className="flex flex-col md:flex-row w-full justify-between items-center xl:justify-center gap-x-8 2xl:gap-x-16 w-max-[1300px] xl:max-w-[1400px] gap-y-8">
        <div className="successes-image-container md:w-1/3">
            <Image className="rounded-lg shadow-xl" src="https://images.pexels.com/photos/5839465/pexels-photo-5839465.jpeg?auto=compress&cs=tinysrgb&w=800" width={407} height={271}/>
        </div>
        <div className="flex flex-col w-[85%] md:w-3/5 gap-y-4">
                <h1 className="text-2xl xl:text-4xl 2xl:text-5xl md:text-3xl  font-semibold">Some of Our Talent Acquisition Successes:</h1>
                
                <ul className="list-disc flex flex-col mt-2 gap-y-3 text-sm md:text-base xl:text-base 2xl:text-lg font-normal">
                    <li className="flex gap-x-4 items-center"><FontAwesomeIcon icon={faCircle} className="h-2"/>Successfully placed over 200 candidates across various industries</li>
                    <li className="flex gap-x-4 items-center"><FontAwesomeIcon icon={faCircle} className="h-2"/>85% client satisfaction rate in talent acquisition services</li>
                    <li className="flex gap-x-4 items-center"><FontAwesomeIcon icon={faCircle} className="h-2"/>Average time-to-fill of 40 days for specialized positions</li>
                    <li className="flex gap-x-4 items-center"><FontAwesomeIcon icon={faCircle} className="h-2"/>Achieved a 70% employee retention rate for placements within the first year</li>
                    <li className="flex gap-x-4 items-center"><FontAwesomeIcon icon={faCircle} className="h-2"/>Established a recruitment network of over 5,000 professionals nationwide</li>
                </ul>
            </div>
    </section>
    </div>
  )
}

export default TASSuccesses