import type { Metadata } from 'next'

import './globals.css'
import { cn, open_sans } from '@/utils'
import { Header } from '@/components'

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
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
                    'w-full max-w-5xl m-auto h-screen',
                    open_sans.className
                )}
            >
                <Header />
                <main>{children}</main>
            </body>
        </html>
    )
}
