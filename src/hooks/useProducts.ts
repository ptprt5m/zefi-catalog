'use client'

import { IProduct, IUseProductsResult } from '@/models'
import { useState, useEffect } from 'react'

export const useProducts = (): IUseProductsResult => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products.json')
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data: IProduct[] = await response.json()
                setProducts(data)
            } catch (error) {
                setError(error as Error)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    return { products, loading, error }
}
