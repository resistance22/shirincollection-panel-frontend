import { Skeleton } from '@mui/material'

export const Loading = () => {
  const loading = []
  for (let i = 0; i < 5; i++) {
    loading.push(
      <Skeleton
        variant='rectangular'
        sx={{
          marginBottom: "10px",
          borderRadius: "10px"
        }}
        height="50px"
      />
    )
  }
  return (
    <div>
      {loading}
    </div>
  )
}
