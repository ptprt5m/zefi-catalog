import Link from 'next/link'
import { InstagramSVG, TelegramSVG, VKontakteSVG, WhatsAppSVG } from './svg'

export const SocialLinksBlock = () => (
    <div className="flex gap-5 text-zefi-brown">
        <Link href="/" className="transition hover:opacity-75 hover:scale-105">
            <TelegramSVG />
        </Link>
        <Link href="/" className="transition hover:opacity-75 hover:scale-105">
            <InstagramSVG />
        </Link>
        <Link href="/" className="transition hover:opacity-75 hover:scale-105">
            <WhatsAppSVG />
        </Link>
        <Link href="/" className="transition hover:opacity-75 hover:scale-105">
            <VKontakteSVG />
        </Link>
    </div>
)
