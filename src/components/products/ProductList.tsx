'use client'

import type { FC } from 'react'
import type { IProduct } from '@/models'
import { useProducts } from '@/hooks'
import { Animation } from '../Animation'
import { LoadingFallback } from './LoadingFallback'
import { ErrorFallback } from './ErrorFallback'
import { ProductCard } from './ProductCard'

export const ProductList: FC = () => {
    const { products, loading, error, refetch } = useProducts()

    if (loading) return <LoadingFallback />
    if (error) {
        console.error(error.message)
        return <ErrorFallback refetch={refetch} isLoading={loading} />
    }

    return (
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product: IProduct) => (
                <Animation
                    key={product.id}
                    className="flex"
                    speed={product.id * 0.5}
                >
                    <ProductCard {...product} />
                </Animation>
            ))}
        </div>
    )
}
