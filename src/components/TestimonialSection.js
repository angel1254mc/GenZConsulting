import React, { useEffect, useState } from 'react'
import TestimonialSlider from './TestimonialSlider'
import {animated as a, useInView, useTrail} from 'react-spring'
const TestimonialSection = () => {
    const [visited, setVisited] = useState(false);
    const [ref, inView, entry] = useInView({
        threshold: 0.5,
    });
    const trails = useTrail(4, {
        opacity: visited ? 1 : 0, transform: visited ? "translateY(0%)" :  "translateY(2%)",
        config: { mass: 5, tension: 500, friction: 80 },
    })

    useEffect(() => {
        if (inView)
            setVisited(true);
    }, [inView])
  return (
    <div ref={ref} className="w-full flex flex-col items-center">
      <div className="flex flex-col gap-y-2 w-full px-6 md:px-0 sm:max-w-[1280px] xl:max-w-[1400px]">
          <section className="flex flex-col w-full items-center gap-y-2">
            <a.p style={trails[0]} className="text-xs xl:text-base md:text-sm text-violet-800 font-light">WE PRIDE OURSELVES IN DELIVERING THE HIGHEST LEVEL OF SERVICE</a.p>
            <a.h1 style={trails[1]} className="text-2xl xl:text-4xl md:text-3xl font-semibold">Our Clients</a.h1>
            <a.p style={trails[2]} className="text-xs xl:text-base max-w-[800px] text-center font-regular leading-5 text-gray-700 mt-2">Learn more about how Gen Z Consulting has been able to take the Business Operations of our Federal and Commercial clients alike to the next level.</a.p>
          </section>
          <a.section style={trails[3]} className="flex justify-center items-center overflow-x-hidden">
            <TestimonialSlider clientTestimonials={
              [
                {
                  logo:"/google-logo-png.png",
                  name: "Andrej Kumar",
                  role: "Principal SDVOSB Marketing and Communications, Google",
                  highlight: "“Thanks to Gen Z Consulting's assistance, we have been able to achieve significant improvements in our overall efficiency and productivity.”",
                  quote: "Before working with Gen Z Consulting, our Talent Acquisition consumed a lot of our time and resources. However, after partnering with Gen Z Consulting, we were able to consolidate and automate our entire Talent Acquisition process. Their expert consultants developed a customized solution that perfectly suited our needs, saving us countless hours and freeing up resources that we could now allocate to other areas of our business.",
                  image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                }, 
                {
                  logo: "/et-logo.png",
                  name: "Anton Salvador",
                  role: "Chief Marketing Officer, Emerging Tech LLC",
                  highlight: "“Gen Z Consulting has been an exceptional partner in helping our company handle Contract Procurement”",
                  quote: "Their team of experts provided us with invaluable guidance and support throughout the entire process, from the initial planning stage to the final contract negotiation. Their attention to detail ensured that we submitted competitive proposals that met all of the necessary requirements. ",
                  image: "https://media.licdn.com/dms/image/C4E03AQEWCtVoMAPX-Q/profile-displayphoto-shrink_400_400/0/1646962052814?e=1684368000&v=beta&t=gsQka-pCBRPvIOiiuni8FkIWpcHgc-TleK0emNxc1O4"
                }
              ]
            }/>
          </a.section>
      </div>
    </div>
  )
}

export default TestimonialSection