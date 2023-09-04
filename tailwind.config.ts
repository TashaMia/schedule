import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                blue: '#000AFF',
                pink: '#FF00F5',
                green: '#65FF8E',
            },
            boxShadow: {
                columnShadow: '0px 0px 8px 6px rgba(0, 10, 255, 0.15)',
            },
            keyframes: {
                rotateArrowUp: {
                    '0%': { transform: 'rotateX(180deg)' },
                    '50%': { transform: 'rotateX(90deg)' },

                    '100%': { transform: 'rotateX(0deg)' },
                },
                rotateArrowDown: {
                    '0%': { transform: 'rotateX(0deg)' },
                    '50%': { transform: 'rotateX(90deg)' },

                    '100%': { transform: 'rotateX(180deg)' },
                },
                columnUpMax: {
                    '0%': { height: '20px' },
                    '50%': { height: '60px' },

                    '100%': { height: '221px' },
                },
                columnUpMin: {
                    '0%': { height: '20px' },
                    '50%': { height: '35px' },

                    '100%': { height: '70px' },
                },
            },
            animation: {
                rotateArrowUp: 'rotateArrowUp 0.3s linear',
                rotateArrowDown: 'rotateArrowDown 0.3s linear',
                columnUpMax: 'columnUpMax 0.3s linear',
                columnUpMin: 'columnUpMin 0.3s linear',
            },
        },
    },
    plugins: [],
}
export default config
