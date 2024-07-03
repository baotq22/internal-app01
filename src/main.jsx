import { React } from 'react'
import ReactDOM from 'react-dom/client'
import '../src/assets/css/sb-admin-2.min.css'
import '../src/components/scss/App.scss'
import App from './pages/App.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './components/layout/layout.jsx'

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<App />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
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