import { FOOTER } from '@/constants'
import { cn, raleway } from '@/utils'

export const Footer = () => (
    <footer className="py-10 border-t border-zefi-sand w-full flex">
        <p className={cn('text-zefi-darkGrayBlue text-sm', raleway.className)}>
            {FOOTER.text.toUpperCase()} <span> {FOOTER.copyright}</span>
        </p>
    </footer>
)
