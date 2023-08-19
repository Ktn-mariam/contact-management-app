import React from 'react'
import { Contact } from '../types/dataTypes'

interface ContactCardProp {
  contact: Contact
}

const ContactCard: React.FC<ContactCardProp> = ({ contact }) => {
  const firstName = contact.firstName
  const lastName = contact.lastName
  const status = contact.status === 'active' ? false : true
  const email = contact.email
  const phoneNo = contact.phoneNo

  return (
    <div
      className={`bg-${
        status ? 'red' : 'green'
      }-100 p-6 flex-col rounded shadow-md mx-5 my-5`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{`${firstName} ${lastName}`}</h1>
        {status ? (
          <div className="w-8 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="red"
                d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"
              />
            </svg>
          </div>
        ) : (
          <div className="mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22">
              <path
                fill="green"
                d="M22 11a11 11 0 1 0-11 11 11 11 0 0 0 11-11zm-6.051 3.536-1.414 1.414L11 12.414 7.465 15.95l-1.414-1.414L9.586 11 6.051 7.465l1.414-1.414L11 9.586l3.535-3.535 1.414 1.414L12.414 11z"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="flex items-center mt-1">
        <div className="w-9">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            id="email"
          >
            <path d="M34.05 50 9 66.31V33.69L34.05 50zm31.9 0L91 66.31V33.69L65.95 50zm-3.66 2.39-11.2 7.29c-.33.21-.71.32-1.09.32s-.76-.11-1.09-.32l-11.2-7.29L10.66 70l-1.57 1.02C9.58 73.84 12.04 76 15 76h70c2.96 0 5.42-2.15 5.91-4.98L89.33 70 62.29 52.39zM50 55.61 89.33 30l1.58-1.02C90.42 26.15 87.96 24 85 24H15c-2.96 0-5.42 2.16-5.91 4.98L10.66 30 50 55.61z"></path>
          </svg>
        </div>
        <div className="ml-2">{email}</div>
      </div>
      <div className="flex items-center mt-1">
        <div className="w-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" />
          </svg>
        </div>
        <div className="ml-4">{phoneNo}</div>
      </div>
      <div className="flex">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mt-3 rounded inline-flex items-center">
          <div className="w-6 mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20.548 3.452a1.542 1.542 0 0 1 0 2.182l-7.636 7.636-3.273 1.091 1.091-3.273 7.636-7.636a1.542 1.542 0 0 1 2.182 0zM4 21h15a1 1 0 0 0 1-1v-8a1 1 0 0 0-2 0v7H5V6h7a1 1 0 0 0 0-2H4a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1z" />
            </svg>
          </div>
          <span>Edit</span>
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mt-3 ml-2 rounded inline-flex items-center">
          <div className="w-6 mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22 5a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h5V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h5a1 1 0 0 1 1 1zM4.934 21.071 4 8h16l-.934 13.071a1 1 0 0 1-1 .929H5.931a1 1 0 0 1-.997-.929zM15 18a1 1 0 0 0 2 0v-6a1 1 0 0 0-2 0zm-4 0a1 1 0 0 0 2 0v-6a1 1 0 0 0-2 0zm-4 0a1 1 0 0 0 2 0v-6a1 1 0 0 0-2 0z" />
            </svg>
          </div>
          <span>Delete</span>
        </button>
      </div>
    </div>
  )
}

export default ContactCard
