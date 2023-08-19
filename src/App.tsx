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

export default function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <ContactPage />
    </Provider>
  )
}
