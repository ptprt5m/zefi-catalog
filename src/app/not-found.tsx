import { MESSAGES } from '@/constants'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col gap-5 items-center justify-center h-full w-full m-auto">
            <p className="font-light text-lg">{MESSAGES.pageNotFound}</p>
            <Link
                href="/"
                className="bg-zefi-darkGrayBlue text-white py-1 px-3 transition hover:opacity-75 hover:scale-105"
            >
                На главную
            </Link>
        </div>
    )
}
