import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { initialStateType, NewProduct, Product } from './types'
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

export const getProducts = createAsyncThunk("products/getAll", async () => {
  const response = await axios.get<Product>("http://localhost:1337/api/products?pagination[page]=2&pagination[pageSize]=1")
  return response.data
}, {
  serializeError: (err: any) => {
    return { message: err.response.data.error.message, code: err.response.status }
  }
})

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createProduct.pending, (state) => {
      state.loading = true
    })
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.products = {
        ...state.products,
        [action.payload.id]: action.payload
      }
      state.loading = false
      toast.success("Product Added successfully")
    })
    builder.addCase(createProduct.rejected, (state, action) => {
      state.loading = false
      toast.error(action.error.message || "something went wrong")
    })
  }
})
