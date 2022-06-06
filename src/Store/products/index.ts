import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { initialStateType, NewProduct, Product } from './types'
import { toast } from 'react-toastify'
import axios from 'axios'

const initialState = {
  products: {},
  loading: false
} as initialStateType



export const createProduct = createAsyncThunk("auth/login", async (newProduct: NewProduct) => {
  const response = await axios.post<Product>("http://localhost:1337/api/products", newProduct)
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
    })
    builder.addCase(createProduct.rejected, (state, action) => {
      state.loading = false
      toast.error(action.error.message || "something went wrong")
    })
  }
})
