import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Contact, ContactsState } from '../types/dataTypes'

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      {
        id: 0,
        firstName: 'Hazel',
        lastName: 'Santana',
        email: 'hazelsantana45@gmail.com',
        phoneNo: '1234567',
        status: 'active',
      },
      {
        id: 1,
        firstName: 'Laurie',
        lastName: 'Keith',
        email: 'lauriekeith902@yahoo.com',
        phoneNo: '879387932',
        status: 'active',
      },
      {
        id: 2,
        firstName: 'Charley',
        lastName: 'Dalton',
        email: 'charleydalton73@gmail.com',
        phoneNo: '89734289',
        status: 'inactive',
      },
    ],
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
