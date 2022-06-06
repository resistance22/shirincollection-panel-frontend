export interface NewProduct {
  Title: string
  Descriptoin: string,
  entry_items: []
}

export interface Product extends NewProduct {
  id: number
}

export interface initialStateType {
  products: { [id: number]: Product }
  loading: boolean
}
