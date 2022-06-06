import { Header } from './Header'
import { Page } from 'src/Components'
import { NewProductFrom } from './NewProductForm'
export const NewProduct = () => {
  return (
    <Page
      Header={<Header />}
      PageContent={<NewProductFrom />}
    />

  )
}
