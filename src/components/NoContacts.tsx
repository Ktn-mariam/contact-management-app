import React from 'react'

function NoContacts() {
  return (
    <div className="bg-white p-6 rounded shadow-md m-20 max-w-md">
      <div className="flex items-center">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22">
            <path
              d="M22 11a11 11 0 1 0-11 11 11 11 0 0 0 11-11zm-6.051 3.536-1.414 1.414L11 12.414 7.465 15.95l-1.414-1.414L9.586 11 6.051 7.465l1.414-1.414L11 9.586l3.535-3.535 1.414 1.414L12.414 11z"
              fill="red"
            />
          </svg>
        </div>
        <div className="ml-5 tex">
          No Contacts to display yet. Click on 'Add Contact' to add contacts!
        </div>
      </div>
    </div>
  )
}

export default NoContacts
