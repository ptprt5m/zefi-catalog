import { cn, playfair } from '@/utils'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col gap-5 items-center justify-center h-full w-full m-auto">
            <p className={cn('font-light text-xl', playfair.className)}>
                Такой страницы не существует
            </p>
            <Link
                href="/"
                className="bg-zefi-darkGrayBlue text-white py-1 px-3 transition hover:opacity-75 hover:scale-105"
            >
                На главную
            </Link>
        </div>
    )
}
