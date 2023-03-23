import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const FinancialCard = ({content = ""}) => {
  return (
    <div className="financial-info-card relative w-52 h-36">
        <div className="checkmark absolute bg-pink-300">
            <FontAwesomeIcon icon={faCheck} height={40} width={40}/>
        </div>
        <div className="mt-8 text-[#481584] px-4 text-center text-xl font-semibold w-full flex justify-center items-center">
            {content}
        </div>
    </div>
  )
}

export default FinancialCard