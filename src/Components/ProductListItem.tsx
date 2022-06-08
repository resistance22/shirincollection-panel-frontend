import { Grid, IconButton, Tooltip } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Product } from 'src/Store/products/types'
import { Edit } from '@mui/icons-material'
import { DeleteProductBtn } from 'src/Components'
import { useProduct } from 'src/hooks'

export const ProductListItem: FC<Product> = ({ Title, Percent, entry_items, id }) => {
  const { stateVal } = useProduct()
  return (
    <Grid className='product-list-item' container spacing={0.5} sx={{
      opacity: stateVal.deleting == id ? 0.5 : 1,
      pointerEvents: stateVal.deleting == id ? "none" : "auto"
    }}>
      <Grid item xs={1}>
        {id}
      </Grid>
      <Grid item xs={4}>
        {Title}
      </Grid>
      <Grid item xs={4}>
        {`${Percent}%`}
      </Grid>
      <Grid item xs={1}>
        {entry_items?.length}
      </Grid>
      <Grid item xs={2}>
        <Link to={`/panel/products/${id}`}>
          <Tooltip title="Edit">
            <IconButton
              color="info"
            >
              <Edit />
            </IconButton>
          </Tooltip>
        </Link>
        <DeleteProductBtn
          id={id}
        />
      </Grid>
    </Grid>
  )
}
