import React, { useEffect, useState } from 'react'
import ContactUsForm from './ContactUsForm'
import Spacer from './Spacer'
import { animated as a, useInView, useTrail } from 'react-spring'
const ContactUs = () => {

    const [visited, setVisited] = useState(false);
    const [ref, inView, entry] = useInView({
        threshold: 0.6,
    });
    const trails = useTrail(5, {
        opacity: visited ? 1 : 0, transform: visited ? "translateY(0%)" :  "translateY(2%)",
        config: { mass: 5, tension: 500, friction: 80 },
    })

    useEffect(() => {
        if (inView)
            setVisited(true);
    }, [inView])

  return (
    <div ref={ref} className="contact-background flex flex-col w-full items-center">
        <section className="flex flex-col gap-y-4 md:flex-row w-full sm:max-w-[1280px] xl:max-w-[1500px] justify-center">
          <section className="flex flex-col w-full px-6 md:w-[40%] lg:w-2/5 gap-y-2">
            <Spacer></Spacer>
            <Spacer></Spacer>
            <a.p style={trails[0]} className="text-xs md:text-sm xl:text-base text-violet-200 font-light">CONNECT WITH AN EXPERT</a.p>
            <a.h1 style={trails[1]} className="text-2xl md:text-3xl xl:text-4xl mb-1 font-semibold text-white">Get In Contact</a.h1>
            <a.hr style={trails[2]} className="mr-8 mt-2 b-2 border-violet-300"></a.hr>
            <a.p style={trails[3]} className="text-xs xl:text-base font-regular leading-5 text-white mt-2">Our team is committed to delivering exceptional service and results, and we take pride in building long-term relationships with our clients based on trust, integrity, and mutual respect. With Gen Z Consulting, you can rest assured that you have a partner who is invested in your success. </a.p>
            <a.p style={trails[4]} className="text-xs xl:text-base font-regular leading-5 text-white mt-2">If you would like to learn more about our services, discuss a potential project, or inquire about a career opportunity, please feel free to contact us. </a.p>
          </section>
          <section className="flex flex-col w-full px-6 md:px-2 md:w-[40%] lg:w-2/5 py-8 gap-y-2">
            <ContactUsForm></ContactUsForm>
          </section>
        </section>
    </div>
  )
}

export default ContactUs