import type { Metadata } from 'next'

import './globals.css'
import { open_sans } from '@/utils'

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
            <body className={open_sans.className}>{children}</body>
        </html>
    )
}
