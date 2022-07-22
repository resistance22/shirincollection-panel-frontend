import axios from "axios"
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { ProductListItem } from "./ProductListItem"
import { Grid } from '@mui/material'
const getProductList = async (id: string) => {
  return (await axios.get<ProductList>(`/api/product-lists/${id}`)).data
}

export const ProductListComponent = () => {
  let { id } = useParams()

  const { isLoading, data } = useQuery(['get-list', id], () => getProductList(id || "1"))



  if (data) {
    return (
      <>
        <header className="PageHeader">
          <h1>لیست محصول</h1>
        </header>
        <div className="product-list">
          <header className="table-header">
            <Grid container>
              <Grid item xs={3}>
                تصویر محصول
              </Grid>
              <Grid item xs={6}>
                نام محصول
              </Grid>
              <Grid item xs={3}>
                قیمت
              </Grid>
            </Grid>
          </header>
          {
            data.products.map(product => <ProductListItem key={product.id} product={product} percent={data.profit_percent} />)
          }
        </div>
      </>

    )

  } else {
    return (<h1>...loading</h1>)
  }
}