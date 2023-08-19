import { createSlice } from '@reduxjs/toolkit'

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    // editContactId: 0,
    status: 'idle',
    error: null,
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts = [action.payload.contact, ...state.contacts]
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter((contact) => {
        return contact.id !== action.payload
      })
    },
    updateContact: (state, action) => {
      const updatedIndex = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id,
      )
      if (updatedIndex !== -1) {
        state.contacts[updatedIndex] = action.payload.updatedContact
      }
    },
    // updateEditContactId: (state, action) => {
    //   state.editContactId = action.payload.contactId
    // },
  },
})

export default contactsSlice.reducer
export const {
  addContact,
  deleteContact,
  updateContact,
  // updateEditContactId,
} = contactsSlice.actions
