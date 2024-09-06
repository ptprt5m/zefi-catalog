import { InstagramSVG, TelegramSVG, VKontakteSVG, WhatsAppSVG } from './svg'

export const SocialLinksBlock = () => (
    <div className="flex gap-5 text-zefi-brown">
        <TelegramSVG />
        <InstagramSVG />
        <WhatsAppSVG />
        <VKontakteSVG />
    </div>
)
