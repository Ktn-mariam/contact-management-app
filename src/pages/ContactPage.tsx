import React from 'react'
import SearchBar from '../components/SearchBar'
import ContactList from '../components/ContactList'

function ContactPage() {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen p-10 flex-col items-center">
        <SearchBar />
        <ContactList />
      </div>
    </div>
  )
}

export default ContactPage
