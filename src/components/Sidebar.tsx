import React from 'react'
import { Link } from 'react-router-dom'

interface SidebarProps {
  showSideBar: boolean
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar: React.FC<SidebarProps> = ({ showSideBar, setShowSideBar }) => {
  return (
    <div
      className={`bg-gray-800 text-white h-full sm:w-1/5 w-1/2 pt-6 fixed top-0 left-0 ${
        showSideBar ? 'translate-x-0 z-50' : '-translate-x-full z-0'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold my-3 text-center">CovidSync</h2>
        <button
          className={`w-8 block sm:hidden`}
          onClick={() => {
            setShowSideBar((prevState) => {
              return !prevState
            })
          }}
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="white"
          >
            <path d="m4.12 6.137 1.521-1.52 7 7-1.52 1.52z" />
            <path d="m4.12 11.61 7.001-7 1.52 1.52-7 7z" />
          </svg>
        </button>
      </div>
      <ul className="space-y-2">
        <Link to={'/'}>
          <li className="hover:bg-slate-600 px-2 py-2 sm:px-10 sm:py-5">
            Contacts
          </li>
        </Link>
        <Link to={'/covid-stats'}>
          <li className="hover:bg-slate-600 px-2 py-2 sm:px-10 sm:py-5">
            Charts & Maps
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default Sidebar
