import { Box, Typography } from '@mui/material'

export const Header = () => {
  return (
    <header className="update-product-header">
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
          Edit Product
        </Typography>
      </Box>
    </header>
  )
}
