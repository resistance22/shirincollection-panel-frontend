import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { initialStateType, NewProduct, Product, getProductsResponse, EntryItem } from './types'
import { toast } from 'react-toastify'
import axios from 'axios'

const initialState = {
  products: {},
  loading: false,
  pagination: {
    page: 0,
    pageCount: 0
  }
} as initialStateType



export const createProduct = createAsyncThunk("products/create", async (newProduct: NewProduct) => {
  const response = await axios.post<Product>("http://localhost:1337/api/products", { data: newProduct })
  return response.data
}, {
  serializeError: (err: any) => {
    return { message: err.response.data.error.message, code: err.response.status }
  }
})

export const getProducts = createAsyncThunk("products/getAll", async (page: number) => {
  const response = await axios.get<getProductsResponse>(`http://localhost:1337/api/products?pagination[page]=${page}&pagination[pageSize]=10&populate=entry_items`)
  return response.data
}, {
  serializeError: (err: any) => {
    return { message: err.response.data.error.message, code: err.response.status }
  }
})

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false
      state.products = initialState.products
      state.pagination = initialState.pagination
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createProduct.pending, (state) => {
      state.loading = true
    })
    builder.addCase(createProduct.fulfilled, (state) => {
      state.loading = false
      toast.success("Product Added successfully")
    })
    builder.addCase(createProduct.rejected, (state, action) => {
      state.loading = false
      toast.error(action.error.message || "something went wrong")
    })
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false
      console.log(action.payload.data)
      const products: { [id: number]: Product } = action.payload.data.reduce((acc, productItem) => {
        return {
          ...acc,
          [productItem.id]: {
            id: productItem.id,
            Title: productItem.attributes.Title,
            Description: productItem.attributes.Description,
            Percent: productItem.attributes.Percent,
            publishedAt: null,
            entry_items: productItem.attributes.entry_items.data.reduce((acc, entry_item) => {
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
      }, {})
      state.products = products
      state.pagination.page = action.payload.meta.pagination.page
      state.pagination.pageCount = action.payload.meta.pagination.pageCount
    })
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false
      toast.error(action.error.message || "something went wrong")
    })
  }
})
