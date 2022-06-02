import { AppBar, List, ListItem, Divider, Drawer, Toolbar, Typography, ListItemButton, ListItemText, Box, CssBaseline, ListItemIcon } from "@mui/material"
import { LogoutBtn, NameAvatar } from "src/Components"
import { Inventory } from '@mui/icons-material'


export const PanelPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={
        { zIndex: (theme) => theme.zIndex.drawer + 1 }
      }>
        <Toolbar>
          <NameAvatar />
          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
          >
            Admin Panel
          </Typography>
          <LogoutBtn />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Inventory sx={{ color: "gray" }} />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItemButton>
          </ListItem>
          <Divider />

        </List>
      </Drawer>
    </Box>
  )
}