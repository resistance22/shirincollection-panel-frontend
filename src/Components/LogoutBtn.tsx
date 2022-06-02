import { Button } from "@mui/material"
import { useAuth } from 'src/hooks'

export const LogoutBtn = () => {
  const { dispatchLogout } = useAuth()
  return (
    <Button
      variant="contained"
      color="error"
      onClick={dispatchLogout}
    >
      Logout
    </Button>)
}
