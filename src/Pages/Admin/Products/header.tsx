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
          Product Management
        </Typography>
        <Button
          variant='contained'
          startIcon={<Add />}
          onClick={() => { navigate("/panel/new-product") }}
        >
          Add New Product
        </Button>
      </Box>
    </header>
  )
}
