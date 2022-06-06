import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from 'src/Store/auth'
import { productsSlice } from 'src/Store/products'

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    products: productsSlice.reducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch