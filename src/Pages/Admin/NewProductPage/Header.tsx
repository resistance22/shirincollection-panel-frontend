import { Box, Button, Typography } from '@mui/material'
import { Add } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
export const Header = () => {
  const navigate = useNavigate()
  return (
    <header className="products-header">
      <Box
        sx={{
          display: "flex",
          padding: "30px 10px"
        }}
      >
        <Typography
          variant='h6'
          sx={{
            flexGrow: 1,
            textAlign: "left",
          }}
        >
          New Product
        </Typography>
      </Box>
    </header>
  )
}
