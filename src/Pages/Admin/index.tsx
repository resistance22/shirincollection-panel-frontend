import {
  AppBar,
  List,
  ListItem,
  Divider,
  Drawer,
  Toolbar,
  Typography,
  ListItemButton,
  ListItemText,
  Box,
  CssBaseline,
  ListItemIcon
} from "@mui/material"
import { LogoutBtn, NameAvatar } from "src/Components"
import { Inventory } from '@mui/icons-material'
import { ProductsPage } from './Products'
import { NewProduct } from './NewProductPage'
import { Routes, Route, Link } from "react-router-dom"

export const PanelPage = () => {
  return (
    <Box>
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
      <Box sx={{
        display: "flex"
      }}>
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
                <Link to={"/"}>
                  <ListItemText primary="Products" />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Inventory sx={{ color: "gray" }} />
                </ListItemIcon>
                <Link to={"/panel/expenses"}>
                  <ListItemText primary="Expenses" />
                </Link>
              </ListItemButton>
            </ListItem>

            <Divider />
          </List>
        </Drawer>
        <Box
          component="main"
          className="Panel-Area"
          sx={{ flex: "1 1 auto", height: "100vh" }}
        >
          <Toolbar />
          <Routes>
            <Route path='/' element={<ProductsPage />} />
            <Route path='expenses' element={<h1>Expenses</h1>} />
            <Route path='new-product' element={<NewProduct />} />
          </Routes>
        </Box>
      </Box>

    </Box>
  )
}