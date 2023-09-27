import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import ContactList from '../components/ContactList'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import NoContacts from '../components/NoContacts'

function ContactPage() {
  const [search, setSearch] = useState<string | null>(null)
  const allContacts = useSelector((state: RootState) => {
    return state.allContacts.contacts
  })

  const contacts =
    search === null
      ? allContacts
      : allContacts.filter((contact) => {
          return (
            contact.firstName.toLowerCase().includes(search.toLowerCase()) ||
            contact.lastName.toLowerCase().includes(search.toLowerCase())
          )
        })

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5 sm:px-10 flex-col items-center justify-center">
      <SearchBar setSearch={setSearch} />
      {allContacts.length === 0 ? (
        <NoContacts />
      ) : (
        <ContactList contacts={contacts} />
      )}
    </div>
  )
}

export default ContactPage
