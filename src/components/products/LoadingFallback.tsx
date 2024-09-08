import { MESSAGES } from '@/constants'
import { HeartLoaderSVG } from '../svg'

export const LoadingFallback = () => (
    <div className="flex flex-col gap-5 items-center w-full text-zefi-brown">
        <HeartLoaderSVG />
        <p className="font-light text-lg text-center">{MESSAGES.dataLoading}</p>
    </div>
)
