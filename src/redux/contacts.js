import { createSlice } from '@reduxjs/toolkit'

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addContact: (state, action) => {
      state.posts = [action.payload.post, ...state.posts]
    },
    deleteContact: (state, action) => {
      state.posts = state.posts.filter((contact) => {
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
  },
})

export default contactsSlice.reducer
export const {
  addContact,
  deleteContact,
  updateContact,
} = contactsSlice.actions
