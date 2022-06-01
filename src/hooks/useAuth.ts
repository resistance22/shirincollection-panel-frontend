import { useAppDispatch, useAppSelector } from 'src/Store/hooks'
import { crudentials } from 'src/Store/auth/types'
import { login, loginWithStorageToken } from 'src/Store/auth'

const useAuth = () => {
  const stateVal = useAppSelector((state) => state.auth)
  const appDispatch = useAppDispatch()
  const disatchLogin = (crudentials: crudentials) => appDispatch(login(crudentials))
  const dispatchLoginWithToken = (token: string) => appDispatch(loginWithStorageToken(token))
  return { stateVal, disatchLogin, dispatchLoginWithToken }
}

export default useAuth