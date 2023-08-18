import { configureStore } from '@reduxjs/toolkit'
import contactsSliceReducer from './contacts'

export const store = configureStore({
  reducer: {
    allPosts: contactsSliceReducer,
  },
})
