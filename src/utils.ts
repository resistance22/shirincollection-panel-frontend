import {
  unsanitizedProduct,
  EntryItem,
  Product,
  getSingleProductResponse
} from 'src/Store/products/types'
import axios from 'axios'
import { toast } from 'react-toastify'


export const sanitizeGetProductResult = (productResponse: unsanitizedProduct): Product => {
  return {
    id: productResponse.id,
    Title: productResponse.attributes.Title,
    Description: productResponse.attributes.Description,
    createdAt: productResponse.attributes.createdAt,
    updatedAt: productResponse.attributes.updatedAt,
    Percent: productResponse.attributes.Percent,
    publishedAt: null,
    entry_items: productResponse.attributes.entry_items.data.reduce((acc, entry_item) => {
      const obj: EntryItem = {
        id: entry_item.id,
        Title: entry_item.attributes.Title,
        createdAt: entry_item.attributes.createdAt,
        updatedAt: entry_item.attributes.updatedAt,
        publishedAt: null,
        defaultValue: entry_item.attributes.defaultValue,
      }
      return [...acc, obj]
    }, [] as EntryItem[])
  }

}


export const getSingleProduct = async (id: number) => {
  try {
    const response = await axios.get<getSingleProductResponse>(`http://localhost:1337/api/products/${id}?populate=entry_items`)
    return sanitizeGetProductResult(response.data.data)
  } catch (err: any) {
    toast.error(err.response.data.error.message)
  }

}