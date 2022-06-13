import { useParams } from "react-router-dom"
import { Page } from "src/Components"
import { UpdateProductForm } from './UpdateProductPage'

export const UpdateProduct = () => {
  const { productID } = useParams()
  return (
    <Page
      Header="<Header />"
      PageContent={
        <UpdateProductForm
          id={parseInt(productID as string)}
        />}
    />
  )
}
