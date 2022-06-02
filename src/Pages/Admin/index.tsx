import { AppBar, Avatar, Toolbar, Typography } from "@mui/material"
import { LogoutBtn } from "src/Components"

export const PanelPage = () => {
  return (
    <AppBar position="static" >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          Admin Panel
        </Typography>
        <LogoutBtn />
      </Toolbar>
    </AppBar>
  )
}