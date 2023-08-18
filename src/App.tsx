import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import AddContact from './components/AddContact'

export default function App() {
  return (
    <div>
      <Navbar />
      {/* <SearchBar /> */}
      <AddContact />
    </div>
  )
}
