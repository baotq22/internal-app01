import { React, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import '../src/assets/css/sb-admin-2.min.css'
import '../src/components/scss/App.scss'
import App from './pages/App.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AppLayout from './components/layout/layout.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import useStore from "./store/index.js"
import ProtectedRoute from './components/reuseableComponents/ProtectedRoute.jsx'

export const token = "J2r2cmIrDT9p4YYQSog7EogCQSKwcD2g2DpZrt0ul2yuyW5BBzlruJjKrgHYJpE5"

function Main() {
  const { setIsAuthenticated } = useStore()

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsAuthenticated(!!token)
  }, [])
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index path='/login' element={<Login />} />
            <Route index path='/welcome' element={<ProtectedRoute element={<App/>} />} />
            <Route path='/register' element={<Register />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(
  <Main />
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  </React.StrictMode>,
)