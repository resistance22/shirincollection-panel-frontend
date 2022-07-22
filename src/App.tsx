import './App.css'
import { LoginPage } from 'src/Pages/Login'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ProductListComponent } from 'src/Pages/Lists'
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from 'src/hooks'
import { useEffect } from 'react'
import config from 'src/config'
import axios from 'axios'

function App() {
  axios.defaults.baseURL = config.backend_url
  const { dispatchLoginWithToken } = useAuth()
  useEffect(() => {
    const token = localStorage.getItem("jwt")
    if (token != null) {
      dispatchLoginWithToken(token)
    }
  }, [])
  return (
    <>
      <ToastContainer />
      <div className="App">
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/lists/:id' element={<ProductListComponent />} />
        </Routes>
      </div>
    </>
  )
}

export default App
