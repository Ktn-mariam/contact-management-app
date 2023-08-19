import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import AddContact from './components/AddContact'
import ContactCard from './components/ContactCard'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import ContactList from './components/ContactList'
import NoContacts from './components/NoContacts'
import ContactPage from './pages/ContactPage'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import Dashboard from './pages/Dashboard'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Navbar />
        {/* <ContactPage /> */}
        <Dashboard />
      </Provider>
    </QueryClientProvider>
  )
}
