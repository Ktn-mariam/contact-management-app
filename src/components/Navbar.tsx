import React from 'react'
import Logo from './Logo'

interface NavBarProps {
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar: React.FC<NavBarProps> = ({ setShowSideBar }) => {
  return (
    <div className="mx-auto flex flex-wrap items-center justify-between shadow-xs mr-7 ml-1 md:mr-13 md:ml-7">
      <button
        className={`w-10 block sm:hidden`}
        onClick={() => {
          setShowSideBar((prevState) => {
            return !prevState
          })
        }}
      >
        <svg
          data-name="Layer 3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
        >
          <path d="M97.092 36.078H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222zM97.092 61.889H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222zM97.092 87.7H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222z" />
        </svg>
      </button>
      <Logo colour="black" />
      <ul className="flex flex-wrap items-center text-base justify-center">
        {/* <li className="mr-5 md:mr-7">About</li>
        <li className="mr-5 md:mr-7">Contact</li> */}
        <li>
          <button className="inline-flex items-center text-white bg-black py-2 rounded-md px-5">
            Sign In
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
