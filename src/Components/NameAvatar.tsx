import { Avatar } from "@mui/material"
import { useAuth } from "src/hooks"


const NameAvatar = () => {
  const { stateVal } = useAuth()
  return (
    <Avatar>
      {`${stateVal.user?.firstName[0]} ${stateVal.user?.lastName[0]}`}
    </Avatar>
  )
}

export default NameAvatar