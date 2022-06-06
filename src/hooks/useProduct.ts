import { useAppDispatch, useAppSelector } from 'src/Store/hooks'
import { NewProduct } from 'src/Store/products/types'
import { createProduct, getProducts } from 'src/Store/products'

const useProduct = () => {
  const stateVal = useAppSelector((state) => state.products)
  const appDispatch = useAppDispatch()
  const dispatchCreateProduct = (newProduct: NewProduct) => appDispatch(createProduct(newProduct))
  const dispatchGetProducts = () => appDispatch(getProducts())
  return { stateVal, dispatchCreateProduct, dispatchGetProducts }
}

export default useProduct