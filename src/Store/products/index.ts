import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { initialStateType, NewProduct, Product, getProductsResponse, getSingleProductResponse } from './types'
import { toast } from 'react-toastify'
import { sanitizeGetProductResult } from 'src/utils'
import axios from 'axios'

const initialState = {
  products: {},
  loading: false,
  deleting: null,
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


export const deleteProduct = createAsyncThunk("products/delete", async (id: number) => {
  const response = await axios.delete<{ id: number }>(`http://localhost:1337/api/products/${id}`)
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
    reset: () => initialState
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
      const products: { [id: number]: Product } = action.payload.data.reduce((acc, productItem) => {
        return {
          ...acc,
          [productItem.id]: sanitizeGetProductResult(productItem)
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
    builder.addCase(deleteProduct.pending, (state, action) => {
      state.deleting = action.meta.arg
    })
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      delete state.products[action.payload.id]
      state.deleting = null
    })
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.deleting = null
      toast.error(action.error.message || "something went wrong")
    })
  }
})
