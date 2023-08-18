import React from 'react'
import Logo from './Logo'

export default function Navbar() {
  return (
    <div className="mx-auto flex flex-wrap items-center justify-between shadow-xs mr-7 ml-1 md:mr-13 md:ml-7">
      <Logo colour="black" />
      <ul className="flex flex-wrap items-center text-base justify-center">
        <li className="mr-5 md:mr-7">About</li>
        <li className="mr-5 md:mr-7">Contact</li>
        <li>
          <button className="inline-flex items-center text-white bg-black py-2 rounded-md px-5">
            Sign In
          </button>
        </li>
      </ul>
    </div>
  )
}
