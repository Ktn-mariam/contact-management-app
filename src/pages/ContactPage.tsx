import React from 'react'
import SearchBar from '../components/SearchBar'
import ContactList from '../components/ContactList'

function ContactPage() {
  return (
    <div className="bg-gray-100 min-h-screen p-10 flex-col items-center justify-center">
      <SearchBar />
      <ContactList />
    </div>
  )
}

export default ContactPage
