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
    <div className="flex flex-col gap-2 max-w-64 border border-zefi-lightGray items-center shadow-md">
        <Image height={100} width={180} alt="lingerie" src={image} />
        <div className="flex flex-col gap-2 items-start px-5 flex-grow">
            <h2 className={cn('text-xl', playfair.className)}>{name}</h2>
            <p className={cn('text-sm', raleway.className)}>{description}</p>
            <p className={cn('text-sm', raleway.className)}>Срок: {time}</p>
        </div>
        <div className="flex gap-3 justify-between items-center p-5 w-full">
            <p className={cn('text-lg')}>{formatNumberWithDots(price)} ₽</p>
            <Link
                href={'/'}
                className="bg-zefi-darkGrayBlue text-white py-1 px-3 transition hover:opacity-75 hover:scale-105"
            >
                Заказать
            </Link>
        </div>
    </div>
)
