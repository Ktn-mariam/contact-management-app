import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import AddContact from './components/AddContact'
import ContactCard from './components/ContactCard'

export default function App() {
  return (
    <div>
      <Navbar />
      {/* <SearchBar /> */}
      {/* <AddContact /> */}
      <ContactCard />
    </div>
  )
}
