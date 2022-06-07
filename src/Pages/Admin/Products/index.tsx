import { Header } from './header'
import { Page } from 'src/Components'
import { ProductList } from './ProductList'

export const ProductsPage = () => {
  return (
    <Page
      Header={<Header />}
      PageContent={<ProductList />}
    />

  )
}

