import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Dashboard from './pages/Dashboard'
import ContactPage from './pages/ContactPage'
import AddContactPage from './pages/AddContactPage'
import EditContactPage from './pages/EditContactPage'
import React, { useState, useEffect } from 'react'

const queryClient = new QueryClient()

export default function App() {
  const [showSideBar, setShowSideBar] = useState(false)

  useEffect(() => {
    // Set initial value of showSideBar based on screen size
    const handleResize = () => {
      setShowSideBar(window.innerWidth > 640) // Change the breakpoint as needed
    }

    handleResize() // Call the function initially
    window.addEventListener('resize', handleResize) // Listen for resize events

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router>
          <div className="flex">
            <Sidebar
              showSideBar={showSideBar}
              setShowSideBar={setShowSideBar}
            />
            <div className="flex-col flex-1 sm:ml-[20%]">
              <Navbar setShowSideBar={setShowSideBar} />
              <Routes>
                <Route path="/" element={<ContactPage />} />
                <Route path="/covid-stats" element={<Dashboard />} />
                <Route path="/add-contact" element={<AddContactPage />} />
                <Route path="/edit-contact/:id" element={<EditContactPage />} />
              </Routes>
            </div>
          </div>
        </Router>
      </Provider>
    </QueryClientProvider>
  )
}
