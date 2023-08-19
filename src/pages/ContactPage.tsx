import React from 'react'
import SearchBar from '../components/SearchBar'
import ContactList from '../components/ContactList'

function ContactPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5 sm:px-10 flex-col items-center justify-center">
      <SearchBar />
      <ContactList />
    </div>
  )
}

export default ContactPage
