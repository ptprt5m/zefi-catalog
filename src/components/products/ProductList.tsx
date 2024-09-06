'use client'

import { useProducts } from '@/hooks'
import { ProductCard } from '.'
import { IProduct } from '@/models'

export const ProductList: React.FC = () => {
    const { products, loading, error } = useProducts()

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div className="grid grid-cols-4 gap-5">
            {products.map((product: IProduct) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    )
}
