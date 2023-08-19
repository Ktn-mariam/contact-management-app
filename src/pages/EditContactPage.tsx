import React from 'react'
import AddContact from '../components/AddContact'
import EditContact from '../components/EditContact'
import { useParams, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Contact } from '../types/dataTypes'

function EditContactPage() {
  const { id } = useParams()
  let intId: number | null = null

  if (id) {
    intId = parseInt(id, 10)
  }

  const contacts = useSelector((state: RootState) => state.allContacts.contacts)

  const contact =
    intId !== null
      ? contacts.find((contact: Contact) => contact.id === intId)
      : null

  return (
    <div className="flex-col">
      <div className="bg-gray-100 min-h-screen p-10 flex-col justify-center">
        {contact ? (
          <EditContact contact={contact} />
        ) : (
          <div>There does not exist a contact with the id: {id}</div>
        )}
      </div>
    </div>
  )
}

export default EditContactPage
