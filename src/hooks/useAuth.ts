import { useAppDispatch, useAppSelector } from 'src/Store/hooks'
import { crudentials } from 'src/Store/auth/types'
import { login, loginWithStorageToken, authSlice } from 'src/Store/auth'

const useAuth = () => {
  const stateVal = useAppSelector((state) => state.auth)
  const appDispatch = useAppDispatch()
  const disatchLogin = (crudentials: crudentials) => appDispatch(login(crudentials))
  const dispatchLoginWithToken = (token: string) => appDispatch(loginWithStorageToken(token))
  const dispatchLogout = () => appDispatch(authSlice.actions.logout)
  return { stateVal, disatchLogin, dispatchLoginWithToken, dispatchLogout }
}

export default useAuth