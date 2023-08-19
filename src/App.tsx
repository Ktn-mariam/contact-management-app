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

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router>
          <div className="flex">
            <Sidebar />
            <div className="flex-col flex-1 ml-[20%]">
              <Navbar />
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
