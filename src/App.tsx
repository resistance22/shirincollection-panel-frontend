import './App.css'
import { LoginPage } from 'src/Pages/Login'
import { PanelPage } from 'src/Pages/Admin'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ProtectedRoute from 'src/Components/ProtectedRoute'
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from 'src/hooks'
import { useEffect } from 'react'
function App() {
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
          <Route element={<ProtectedRoute />}>
            <Route path='/panel' element={<PanelPage />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
