declare global {

  enum CostsTypes {
    SINGLE = "costs.single-cost",
    PLURAL = "costs.plural-cost"
  }

  interface SingleCostComponent {
    __component: CostsTypes.SINGLE,
    id: number
    cost: number
    single_cost: {
      id: number
      Title: string
      createdAt: string,
      updatedAt: string
    }
  }

  interface PluralCostComponent {
    __component: CostsTypes.PLURAL
    id: number,
    Quantity: number,
    plural_cost: {
      id: number,
      Title: string,
      createdAt: string,
      updatedAt: string,
      unit_price: number
    }
  }

  type costsTypes = SingleCostComponent | PluralCostComponent

  interface Product {
    id: number,
    Title: string,
    Description: string,
    createdAt: string,
    updatedAt: string,
    Costs: costsTypes[]
  }

  interface ProductList {
    id: number,
    list_title: string,
    profit_percent: 25,
    createdAt: string,
    updatedAt: string,
    description: string | null,
    protected: boolean,
    slug: string,
    products: Product[]
  }
}