import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { initialStateType, crudentials, loginSuccessResponse, user } from './types'
import { toast } from 'react-toastify'
import axios from 'axios'

const initialState = {
  authenticated: false,
  user: null,
  loading: false
} as initialStateType



export const login = createAsyncThunk("auth/login", async (crudentials: crudentials) => {
  const response = await axios.post<loginSuccessResponse>("http://localhost:1337/api/auth/local", crudentials)
  return response.data
}, {
  serializeError: (err: any) => {
    return { message: err.response.data.error.message, code: err.response.status }
  }
})

export const loginWithStorageToken = createAsyncThunk("auth/storageLogin", async (jwt: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
  const response = await axios.get<user>("http://localhost:1337/api/users/me")
  return response.data
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("jwt")
      delete axios.defaults.headers.common['Authorization']
      state.user = null
      state.authenticated = false
      state.loading = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true
    })
    builder.addCase(login.fulfilled, (state, action) => {
      localStorage.setItem("jwt", action.payload.jwt)
      axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.jwt}`
      state.user = action.payload.user
      state.authenticated = true
      state.loading = false
    })
    builder.addCase(login.rejected, (state, action) => {
      state.user = null
      state.authenticated = false
      state.loading = false
      toast.error(action.error.message || "something went wrong")
    })
    builder.addCase(loginWithStorageToken.fulfilled, (state, action) => {
      state.user = action.payload
      state.authenticated = true
      state.loading = false
    })
    builder.addCase(loginWithStorageToken.pending, (state) => {
      state.loading = true
    })
    builder.addCase(loginWithStorageToken.rejected, (state, action) => {
      delete axios.defaults.headers.common['Authorization']
      localStorage.removeItem("jwt")
      state.user = null
      state.authenticated = false
      state.loading = false
      toast.error(action.error.message || "something went wrong")
    })
  }
})
