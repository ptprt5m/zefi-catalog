import { FOOTER } from '@/constants'
import { cn, raleway } from '@/utils'
import { SocialLinksBlock } from './SocialLinksBlock'

export const Footer = () => (
    <footer className="py-10 border-t border-zefi-brown w-full flex gap-3 justify-between items-center">
        <p className={cn('text-zefi-brown text', raleway.className)}>
            {FOOTER.text.toUpperCase()} <span> {FOOTER.copyright}</span>
        </p>
        <SocialLinksBlock />
    </footer>
)
