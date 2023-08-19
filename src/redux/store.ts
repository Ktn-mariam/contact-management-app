import { configureStore } from '@reduxjs/toolkit'
import contactsSliceReducer from './contacts.js'

export interface RootState {
  allContacts: ReturnType<typeof contactsSliceReducer>
}

export const store = configureStore({
  reducer: {
    allContacts: contactsSliceReducer,
  },
})
