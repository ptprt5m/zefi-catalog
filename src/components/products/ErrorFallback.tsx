import type { IUseProductsResult } from '@/models'

import { MESSAGES } from '@/constants'

export const ErrorFallback = ({
    refetch,
    isLoading,
}: Pick<IUseProductsResult, 'refetch'> & { isLoading: boolean }) => (
    <div className="flex flex-col gap-5 items-center w-full">
        <p className="font-light text-lg text-center">
            {MESSAGES.dataLoadingError}
        </p>
        <button
            onClick={refetch}
            className="bg-zefi-darkGrayBlue text-white py-1 px-3 transition hover:opacity-75 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            disabled={isLoading}
        >
            Обновить
        </button>
    </div>
)
