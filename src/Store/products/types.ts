export interface NewEntryItem {
  Title: string,
  defaultValue: number
}

export interface EntryItem extends NewEntryItem {
  id: number,
  createdAt: string,
  updatedAt: string,
  publishedAt: null,
}

export interface NewProduct {
  Title: string
  Description: string,
  Percent: number,
  entry_items: NewEntryItem[]
}

export interface Product extends NewProduct {
  id: number,
  entry_items: EntryItem[],
  createdAt: string,
  updatedAt: string,
  publishedAt: null,
}

export interface initialStateType {
  products: { [id: number]: Product }
  loading: boolean,
  pagination: {
    page: number,
    pageCount: number
  }
}

export interface getProductsResponse {

  data:
  {
    id: number,
    attributes: {
      Title: string,
      Description: string,
      Percent: number,
      createdAt: string,
      updatedAt: string,
      entry_items: {
        data: {
          id: number,
          attributes: {
            Title: string,
            createdAt: string,
            updatedAt: string,
            defaultValue: number
          }
        }[]
      }
    },
  }[],
  meta: {
    pagination: {
      page: number,
      pageSize: number,
      pageCount: number,
      total: number
    }
  }

}