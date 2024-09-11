import type { Metadata } from 'next'

import './globals.css'
import { cn, open_sans } from '@/utils'
import { FlowerLeftSVG, FlowerRightSVG, Footer, Header } from '@/components'

export const metadata: Metadata = {
    title: 'Интернет-витрина ZEFI — нижнее белье по индивидуальным меркам',
    description:
        'ZEFI — это уникальный бренд нижнего белья, предлагающий изделия по индивидуальному пошиву. Ознакомьтесь с эксклюзивными моделями или создайте своё идеальное белье с помощью собственных мерок и пожеланий.',
    keywords: [
        'ZEFI',
        'нижнее белье',
        'индивидуальный пошив',
        'эксклюзивное белье',
        'женское белье',
        'онлайн-витрина',
        'каталог нижнего белья',
        'белье на заказ',
        'ZEFI белье',
        'дизайнерское белье',
    ],
    authors: [
        {
            url: 'https://www.roman-shcheglov.ru',
            name: 'Roman Shcheglov',
        },
    ],
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1',
    openGraph: {
        title: 'ZEFI — Индивидуальный пошив нижнего белья',
        description:
            'Создайте своё идеальное белье по собственным меркам с брендом ZEFI.',
        url: 'https://zefi.com',
        type: 'website',
        images: ['https://zefi.com/images/preview.png'],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    'w-full max-w-6xl m-auto min-h-screen flex flex-col justify-between items-center h-full overflow-x-hidden px-5',
                    open_sans.className
                )}
            >
                <Header />
                <main className="flex-grow pt-8 pb-14 w-full h-full">
                    {children}
                </main>
                <div className="hidden lg:flex fixed top-0 left-0 w-full h-full -z-10">
                    <FlowerLeftSVG
                        size={340}
                        className="absolute left-[8%] top-1/4 transform -translate-x-1/2 opacity-40 blur-[2px]"
                    />
                    <FlowerRightSVG
                        size={490}
                        className="absolute right-[6%] top-1/4 transform translate-x-1/2 opacity-50 blur-[3px]"
                    />
                </div>
                <Footer />
            </body>
        </html>
    )
}
