import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import ContactCard from './ContactCard'
import { Contact } from '../types/dataTypes'
import NoContacts from './NoContacts'

function ContactList() {
  const contacts = useSelector((state: RootState) => {
    return state.allContacts.contacts
  })

  if (contacts.length === 0) {
    return <NoContacts />
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {contacts.map((contact: Contact) => {
        return <ContactCard contact={contact} />
      })}
    </div>
  )
}

export default ContactList
