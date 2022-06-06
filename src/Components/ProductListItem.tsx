import { Grid } from '@mui/material'
import { FC } from 'react'
import { Product } from 'src/Store/products/types'


export const ProductListItem: FC<Product> = ({ Title, Percent, entry_items }) => {
  return (
    <Grid className='product-list-item' container spacing={0.5}>
      <Grid item xs={6}>
        {Title}
      </Grid>
      <Grid item xs={4}>
        {`${Percent}%`}
      </Grid>
      <Grid item xs={2}>
        {entry_items.length}
      </Grid>
    </Grid>
  )
}
