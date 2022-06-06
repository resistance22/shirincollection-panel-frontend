import { useAppDispatch, useAppSelector } from 'src/Store/hooks'
import { NewProduct } from 'src/Store/products/types'
import { createProduct } from 'src/Store/products'

const useProduct = () => {
  const stateVal = useAppSelector((state) => state.products)
  const appDispatch = useAppDispatch()
  const dispatchCreateProduct = (newProduct: NewProduct) => appDispatch(createProduct(newProduct))
  return { stateVal, dispatchCreateProduct }
}

export default useProduct