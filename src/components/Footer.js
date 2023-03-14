import { faFacebookSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full footer-background text-footer  px-4 py-8 md:px-0 flex flex-col justify-center items-center ">
        <section className="w-full md:max-w-[1280px] gap-x-4 gap-y-4 flex flex-col items-center md:items-start justify-center md:flex-row">
            <div className="w-4/5 md:w-1/4 flex flex-col gap-y-4">
                <Image src="/genz-logo.png" width="274" height="103" className=""/>
                <div>
                    <h1 className="text-xl font-bold mb-1">CERTIFICATIONS</h1>
                    <ul className="text-sm">
                        <li>Woman Owned Small Business</li>
                        <li>Disadvantaged Small Business</li>
                        <li>DCAA Compliant</li>
                    </ul>
                </div>
            </div>
            <div className="w-4/5 md:w-1/4 flex flex-col gap-y-4">
                <div>
                    <h1 className="text-xl font-bold mb-1">NAVIGATE</h1>  
                    <ul className="text-md flex flex-col gap-y-1">
                        <li>HOME</li>
                        <li>ABOUT US</li>
                        <li>TAS</li>
                        <li>BUSINESS MANAGEMENT</li>
                        <li>CONTRACT MANAGEMENT</li>
                        <li>ACQUISITION</li>
                        <li>CONTACT US</li>
                    </ul>  
                </div>
            </div>
            <div className="w-4/5 md:w-1/4 flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-1">
                    <h1 className="text-xl font-bold mb-2">CONTACT US</h1>  
                    <p>Email: collaborate@genzconsulting.us</p>
                    <p>Office: 106 SW 6th St. Gainesville, FL 32601</p>
                    <p>Phone: (707) 123-4567</p>
                </div>
                <div className="flex flex-col gap-y-1">
                    <h1 className="text-xl font-bold mb-2">FOLLOW US</h1>
                    <div className="text-md flex gap-x-2">
                        <FontAwesomeIcon className="w-8" icon={faFacebookSquare}/>
                        <FontAwesomeIcon className="w-8" icon={faLinkedin}/>
                        <FontAwesomeIcon className="w-8" icon={faInstagramSquare}/>
                        <FontAwesomeIcon className="w-8" icon={faTwitterSquare}/>
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full mt-8 text-sm md:max-w-[1280px] gap-x-4 flex flex-row justify-center">
            <p className="text-center">Copyright 2023 | Gen Z Consulting LLC | All Rights Reserved</p>
        </section>
    </footer>
  )
}

export default Footer