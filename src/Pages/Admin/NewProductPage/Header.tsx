import { Box, Typography } from '@mui/material'

export const Header = () => {
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
