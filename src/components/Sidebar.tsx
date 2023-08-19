import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const items = ['Contacts', 'Charts & Maps']
  return (
    <div className="bg-gray-800 text-white h-full w-1/5 p-6 fixed top-0 left-0">
      <h2 className="text-xl font-semibold mb-4">CovidSync</h2>
      <ul className="space-y-2">
        <Link to={'/'}>
          <li>Contacts</li>
        </Link>
        <Link to={'/covid-stats'}>
          <li>Charts & Maps</li>
        </Link>
      </ul>
    </div>
  )
}

export default Sidebar
