import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-full w-1/5 pt-6 fixed top-0 left-0">
      <h2 className="text-xl font-semibold my-3 text-center">CovidSync</h2>
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
