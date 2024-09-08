import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                zefi: {
                    brown: '#4F483F',
                    beige: '#C9B19B',
                    lightGray: '#E0E0E0',
                    darkGrayBlue: '#5B6770',
                    sand: '#A6937D',
                },
            },
            screens: {
                xs: '500px',
            },
        },
    },
    plugins: [],
}
export default config
