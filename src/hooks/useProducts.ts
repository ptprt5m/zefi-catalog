'use client'

import type { IProduct, IUseProductsResult } from '@/models'
import { useState, useEffect } from 'react'

export const useProducts = (): IUseProductsResult => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    const fetchProducts = async () => {
        setLoading(true)
        try {
            const response = await fetch('/api/products.json')
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data: IProduct[] = await response.json()
            setProducts(data)
            setError(null)
        } catch (error) {
            setError(error as Error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return { products, loading, error, refetch: fetchProducts }
}
