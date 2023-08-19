import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Contact, ContactsState } from '../types/dataTypes'

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    status: 'idle',
    error: null,
  } as ContactsState,
  reducers: {
    addContact: (state, action: PayloadAction<{ contact: Contact }>) => {
      state.contacts = [action.payload.contact, ...state.contacts]
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload,
      )
    },
    updateContact: (
      state,
      action: PayloadAction<{ id: number; updatedContact: Contact }>,
    ) => {
      const updatedIndex = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id,
      )
      if (updatedIndex !== -1) {
        state.contacts[updatedIndex] = action.payload.updatedContact
      }
    },
  },
})

export default contactsSlice.reducer
export const {
  addContact,
  deleteContact,
  updateContact,
} = contactsSlice.actions
