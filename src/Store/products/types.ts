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
  loading: boolean
}
