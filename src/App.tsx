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
    const handleResize = () => {
      setShowSideBar(window.innerWidth > 640)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

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
