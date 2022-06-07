import { useAppDispatch, useAppSelector } from 'src/Store/hooks'
import { NewProduct } from 'src/Store/products/types'
import { createProduct, getProducts, deleteProduct, productsSlice } from 'src/Store/products'

const useProduct = () => {
  const stateVal = useAppSelector((state) => state.products)
  const appDispatch = useAppDispatch()
  const dispatchCreateProduct = (newProduct: NewProduct) => appDispatch(createProduct(newProduct))
  const dispatchGetProducts = (page: number) => appDispatch(getProducts(page))
  const dispatchDeleteProduct = (id: number) => appDispatch(deleteProduct(id))
  const dispatchResetState = () => appDispatch(productsSlice.actions.reset())
  return { stateVal, dispatchCreateProduct, dispatchGetProducts, dispatchResetState, dispatchDeleteProduct }
}

export default useProduct