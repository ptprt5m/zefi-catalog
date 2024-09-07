import { IProduct } from '@/models'
import { cn, formatNumberWithDots, playfair, raleway } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'

export const ProductCard = ({
    name,
    description,
    price,
    time,
    image,
}: IProduct) => (
    <div className="flex flex-col gap-2 max-w-64 items-center shadow-md">
        <Image
            height={100}
            width={200}
            alt="lingerie"
            src={image}
            className="w-full object-cover"
        />
        <div className="flex flex-col gap-2 items-start px-5 flex-grow">
            <h2 className={cn('text-xl font-medium', playfair.className)}>
                {name}
            </h2>
            <p className={cn('text-sm', raleway.className)}>{description}</p>
            <p className={cn('text-sm', raleway.className)}>Срок: {time}</p>
        </div>
        <div className="flex gap-3 justify-between items-center p-5 w-full">
            <p className={cn('text-lg font-medium')}>
                {formatNumberWithDots(price)} ₽
            </p>
            <Link
                href={'/'}
                className="bg-zefi-darkGrayBlue text-white py-1 px-3 transition hover:opacity-75 hover:scale-105 font-medium"
            >
                Заказать
            </Link>
        </div>
    </div>
)
