import Image from 'next/image'
import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'

const CapabilityFlipCard = ({image, title, description, trail}) => {

    /**
     * Spring-flip-card script from react-spring examples! animates a vertical card flip that reveals content on the other side
     * https://codesandbox.io/s/spring-flip-card-g30zr?file=/src/App.tsx:166-204
     */
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
      })
    
  return (
    <a.div style={trail} className="flex cursor-pointer w-[180px] h-[250px] sm:w-[250px] sm:h-[340px] flex-col items-center relative" onClick={() => set(state => !state)}>
        <a.div style={{opacity: opacity.to(o => 1 - o), transform}} className="flip-card w-full h-full flex flex-col items-center">
            <div className="w-full h-[140px] sm:h-[230px] flex justify-center items-center">
                <Image height="270" width="272" className="w-[75px] h-[75px] sm:w-[136px] sm:h-[136px]" src={image}/>
            </div>
            <div className="w-full h-auto text-base sm:text-lg px-2 font-medium text-center">
                {title}
            </div>
        </a.div>
        <a.div style={{opacity, transform, rotateX:'180deg',}} className="flip-card-back absolute w-[180px] h-[250px] sm:w-[250px] sm:h-[340px] p-4 text-left flex flex-col items-center justify-center">
            <p className="text-xs sm:text-base">{description}</p>
            <button onClick={(e) =>  {if (flipped) e.stopPropagation()} } className="p-2 px-8 mt-4 flip-card-button text-sm sm:text-base rounded-md">
                Read More
            </button>
        </a.div>
    </a.div>
  )
}

export default CapabilityFlipCard