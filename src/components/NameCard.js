import Image from 'next/image'
import React from 'react'

const NameCard = ({name, role, image}) => {
  return (
    <div className="client-info w-full flex">
      <Image height={70} width={70} src={image} className="testimonial-image w-36 h-36"/>
      <div className="flex flex-col gap-y-2 ml-3 justify-center items-start w-full">
        <h5 className="text-sm xl:text-lg">{name}</h5>
        <hr className="w-full border-violet-800"></hr>
        <p className="w-full text-left text-[10px] xl:text-base">{role}</p>
      </div>
    </div>
  )
}

export default NameCard