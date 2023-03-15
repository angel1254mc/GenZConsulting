import React, { useEffect, useState } from 'react'
import { useInView, useSpring, useTrail, animated as a, useSprings } from 'react-spring';
import CardElement from './CardElement';
import Spacer from './Spacer';

const CapabilitiesContainer = () => {

    
    const [ref, inView, entry] = useInView({
        threshold: 0.6,
    });
    const [visited, setVisited] = useState(false);
    const trails = useTrail(5, {
        opacity: visited ? 1 : 0, transform: visited ? "translateY(0%)" :  "translateY(2%)",
        config: { mass: 5, tension: 500, friction: 80 },
    })

    const cardTrail = useTrail(4, {
        opacity: visited ? 1 : 0, transform: visited ? "translateY(0%)" : "translateY(10%)",
        config: { mass: 5, tension: 2000, friction: 200 },
        delay:  200
    })

    useEffect(() => {
        if (inView)
            setVisited(true);
    }, [inView])

  return (
    <div className="svg-container w-full flex flex-col items-center">
          <Spacer></Spacer>
          <Spacer></Spacer>
          <div ref={ref} className="flex flex-col gap-y-8 md:flex-row justify-center w-full sm:w-full sm:max-w-[1280px] xl:max-w-[1400px]">
            <section className="flex flex-col w-full px-6 md:w-[40%] lg:w-1/3 gap-y-2">
              <a.p style={trails[0]} className="text-xs md:text-sm xl:text-base text-violet-800 font-light">MOVE AT THE SPEED OF INNOVATION, COMPROMISE NOTHING</a.p>
              <a.h1 style={trails[1]} className="text-2xl md:text-3xl xl:text-4xl font-semibold">Focus on Growth, While We Focus on Everything Else</a.h1>
              <a.hr style={trails[2]} className="mr-8 mt-2 b-2 border-violet-800"></a.hr>
              <a.p style={trails[3]} className="text-xs xl:text-base font-regular leading-5 text-gray-700 mt-2">Our multidisciplinary team of experts brings together diverse skill sets and perspectives to provide the highest level of service to our clients. From Talent Acquisition Services (TAS) to Financial Management, and Government Contract Management to Business Management, we offer customized solutions tailored to meet the unique needs of each client.</a.p>
            </section>
            <section className="flex flex-col px-6 md:p-0 gap-y-4 w-full md:w-[40%] lg:w-[55%]">
                  <div className="flex flex-row w-full gap-x-4">
                    <CardElement trail={cardTrail[0]} header={"Talent Acquisition Services"} link="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"/>
                    <CardElement trail={cardTrail[1]} header={"Contract and Acquisition Management"} link="https://images.unsplash.com/photo-1561930187-90c5428665af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
                  </div>
                  <div className="flex flex-row-reverse w-full gap-x-4">
                    <CardElement trail={cardTrail[2]} header={"Business Management"} link="https://images.unsplash.com/photo-1604933762161-67313106146c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                    <CardElement trail={cardTrail[3]}header={"Financial Management"} link="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                  </div>
            </section>
          </div>
          <Spacer></Spacer>
          <Spacer></Spacer>
        </div>
  )
}

export default CapabilitiesContainer