import { faBurger, faNavicon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const NavBar = () => {

  const [expand, toggleExpand] = useState(false);
  return (
    <>
    <div className={`max-w-full h-full fixed flex sm:hidden flex-col navbar ${expand ? "expand" : ""}`}>
      <Link href="/" className=" border-b-2 text-2xl">Home</Link>
      <Link href="/about" className=" border-b-2 text-2xl">About Us</Link>
      <Link href="/capabilities" className=" border-b-2 text-2xl">Capabilities</Link>
      <Link href="/insights" className=" border-b-2 text-2xl">Insights</Link>
      <Link href="/contact" className=" border-b-2 text-2xl">Contact Us</Link>
    </div>
    <nav id="navbar" className="navbar-custom fixed w-full flex justify-center px-4 py-2">
      <div className="flex w-full sm:px-8 max-w-[1300px] justify-between sm:justify-around">
        <Image src="/genz-logo.png" width="274" height="103" className="w-40 md:w-48"/>
        <div className="h-full flex sm:hidden items-center">
          <FontAwesomeIcon onClick={()=>{ toggleExpand(prev => !prev )}}className="w-8 text-primary burger" icon={faNavicon}/>
        </div>
        <div className="w-auto gap-x-6 h-full hidden sm:flex items-center text-base font-medium text-black">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/capabilities">Capabilities</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>
    </nav>
    </>
  )
}

export default NavBar