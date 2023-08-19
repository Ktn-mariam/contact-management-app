import React from 'react'
import { Link } from 'react-router-dom'

function SearchBar() {
  return (
    <div className="flex justify-center mx-6 items-center mb-3">
      <Link to={'/add-contact'}>
        <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center whitespace-nowrap">
          <div className="w-5 absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              xmlSpace="preserve"
            >
              <path
                d="M12.25 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                fill="white"
              />
              <path
                d="M18.104 32H4.308A4.062 4.062 0 0 1 .25 27.942c0-6.616 5.383-12 12-12 2.268 0 4.477.638 6.388 1.843a1 1 0 1 1-1.067 1.691 9.96 9.96 0 0 0-5.321-1.534c-5.514 0-10 4.486-10 10A2.06 2.06 0 0 0 4.308 30h13.796a1 1 0 0 1 0 2z"
                fill="white"
              />
              <path
                d="M24.75 32c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                fill="white"
              />
              <path
                d="M24.75 19a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm2 7h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2z"
                fill="white"
              />
            </svg>
          </div>
          <span className="ml-8">Add Contact</span>
        </button>
      </Link>
      <div className="relative ml-5 w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          className="block w-full p-2 pl-10 text-md outline-none focus:border-gray-500"
          placeholder="Search Contact..."
        ></input>
      </div>
    </div>
  )
}

export default SearchBar
