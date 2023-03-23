import React, { useEffect, useState } from "react";
import { useInView, useTrail,animated as a } from "react-spring";

const ExcelSection = () => {

  const [ref, inView, entry] = useInView({
    threshold: 0.5,
});
const [visited, setVisited] = useState(false);
const trails = useTrail(3, {
    opacity: visited ? 1 : 0, transform: visited ? "translateY(0%)" :  "translateY(2%)",
    config: { mass: 5, tension: 500, friction: 80 },
})


useEffect(() => {
    if (inView)
        setVisited(true);
}, [inView])


  return (
    <div ref={ref} className="flex flex-col w-full xl:px-20 md:px-10 my-14 xl:my-16 2xl:my-28 items-center">
      <section id="talent-acquisition-services" className="flex flex-col w-[85%] items-center w-max-[1300px] xl:max-w-[1400px] gap-y-2">
        <a.p style={trails[0]} className="text-xs xl:text-base 2xl:text-lg md:text-sm text-violet-800 font-light">
          OUR CAPABILITIES
        </a.p>
        <a.h1 style={trails[0]} className="text-2xl xl:text-4xl 2xl:text-5xl md:text-3xl  font-semibold">
          What We Excel At
        </a.h1>
        <a.p style={trails[0]} className="text-sm xl:w-[90%] 2xl:w-auto xl:text-base 2xl:text-lg xl:mt-6 max-w-[1300px] md:text-sm text-gray-800 font-regular">
          At Gen Z Consulting, we offer a comprehensive range of capabilities
          and services to help your business succeed. Our woman-owned consulting
          company specializes in various areas to ensure that we can address
          your unique needs and challenges. Here are the key services we
          provide:
        </a.p>
      </section>
    </div>
  );
};

export default ExcelSection;
