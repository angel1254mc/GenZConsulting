import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper'
import NameCard from '@/components/NameCard'
import Image from 'next/image'

const TestimonialSlider = ({clientTestimonials}) => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="max-w-[750px] xl:max-w-[1000px] w-[90%] py-4 px-4">
        {
            clientTestimonials.map(({name, role, highlight, quote, image, logo}, index) => {
                return (
                    <SwiperSlide key={"testimonial-" + index}>
                        <div className="mx-10 md:mx-20 my-10 px-4 md:px-8 py-8 slider-card flex flex-col-reverse items-center sm:items-start sm:flex-row">
                          <div className="card-col-1 flex flex-col w-full sm:w-2/5 mt-4 sm:mt-0">
                            <NameCard name={name} role={role} image={image}/>
                          </div>
                          <div className="card-col-2 flex flex-col w-full sm:w-3/5 gap-y-4 px-1">
                            <h4 className="testimonial-highlight leading-4 font-semibold text-sm xl:text-lg">{highlight}</h4>
                            <p className="testimonial-quote leading-4 text-justify font-regular text-xs xl:text-base">{quote}</p>
                          </div>
                        </div>
                    </SwiperSlide>
                )
            })
        }
    </Swiper>
  )
}

export default TestimonialSlider