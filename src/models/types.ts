export interface IProduct {
    id: number
    name: string
    description: string
    price: number
    image: string[]
    time: string
}

export interface IUseProductsResult {
    products: IProduct[]
    loading: boolean
    error: Error | null
    refetch: () => void
}
