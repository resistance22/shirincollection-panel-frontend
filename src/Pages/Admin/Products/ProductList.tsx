import { Grid, Pagination, Box } from '@mui/material'
import { useProduct } from 'src/hooks'
import { ProductListItem } from 'src/Components/ProductListItem'
import { useEffect } from "react"
import { Loading } from './Loading'

export const ProductList = () => {
  const { stateVal, dispatchGetProducts, dispatchResetState } = useProduct()
  useEffect(() => {
    dispatchGetProducts(1)
    return () => {
      dispatchResetState()
    }
  }, [])


  return (
    <>
      <Grid className='product-list-header' container spacing={0.5}>
        <Grid item xs={1}>
          {"ID"}
        </Grid>
        <Grid item xs={4}>
          {"Product Title"}
        </Grid>
        <Grid item xs={4}>
          {"Profit Percent"}
        </Grid>
        <Grid item xs={1}>
          {"Costs length"}
        </Grid>
        <Grid item xs={2}>
          {"Actions"}
        </Grid>
      </Grid>
      {stateVal.loading ? <Loading /> : Object.keys(stateVal.products).map((productID) => {
        const product = stateVal.products[parseInt(productID)]
        return (<ProductListItem
          key={productID}
          {...product}
        />)
      })}
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px"
      }}>
        <Pagination
          page={stateVal.pagination.page}
          count={stateVal.pagination.pageCount}
          onChange={(evnt, page) => {
            dispatchGetProducts(page)
          }}
        />
      </Box>

    </>

  )
}
