import { Grid } from "@mui/material"
import { FC } from "react"
import config from "src/config"
import { CostsTypes } from 'src/types'


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const calculateCost = (product: Product, profit: number) => {
  const cost: number = product.Costs.reduce((acc: number, cost) => {
    if (cost.__component == CostsTypes.PLURAL) {
      return acc + cost.Quantity * cost.plural_cost.unit_price
    }
    if (cost.__component == CostsTypes.SINGLE) {
      return acc + cost.cost
    }
  }, 0)
  return cost + (cost * (profit / 100))
}

interface props {
  product: Product
  percent: number
}

export const ProductListItem: FC<props> = ({ product, percent }) => {
  const featured_image = product.featured_image
  return (
    <div className="product-item">
      <Grid container>
        <Grid item xs={3}>
          {featured_image && (
            <div className="product-image">
              <img className="featured-image" alt={`${product.Title}-image`} src={`${config.backend_url}${featured_image.url}`} />
            </div>
          )}
        </Grid>
        <Grid item xs={6}>
          <div className="product-title">
            <p>
              {product.Title}
            </p>
          </div>

        </Grid>
        <Grid item xs={3}>
          <div className="product-price">
            <p>
              {numberWithCommas(calculateCost(product, percent))}
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}