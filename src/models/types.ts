export interface IProduct {
    id: number
    name: string
    description: string
    price: number
    images: string[]
    time: string
}

export interface IUseProductsResult {
    products: IProduct[]
    loading: boolean
    error: Error | null
    refetch: () => void
}
