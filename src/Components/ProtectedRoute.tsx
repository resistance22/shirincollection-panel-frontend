import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from 'src/hooks'

const ProtectedRoute = () => {
  const { stateVal } = useAuth()
  return stateVal.authenticated ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoute