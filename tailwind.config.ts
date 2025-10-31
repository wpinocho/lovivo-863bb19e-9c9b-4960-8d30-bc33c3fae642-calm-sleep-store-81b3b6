import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(220 20% 85%)',
				input: 'hsl(220 20% 85%)',
				ring: 'hsl(199 89% 48%)',
				background: 'hsl(0 0% 100%)',
				foreground: 'hsl(222 47% 5%)',
				primary: {
					DEFAULT: 'hsl(199 89% 48%)',
					foreground: 'hsl(0 0% 100%)'
				},
				secondary: {
					DEFAULT: 'hsl(199 80% 94%)',
					foreground: 'hsl(222 47% 5%)'
				},
				destructive: {
					DEFAULT: 'hsl(0 84% 60%)',
					foreground: 'hsl(0 0% 100%)'
				},
				muted: {
					DEFAULT: 'hsl(199 80% 94%)',
					foreground: 'hsl(222 20% 40%)'
				},
				accent: {
					DEFAULT: 'hsl(199 80% 94%)',
					foreground: 'hsl(222 47% 5%)'
				},
				popover: {
					DEFAULT: 'hsl(0 0% 100%)',
					foreground: 'hsl(222 47% 5%)'
				},
				card: {
					DEFAULT: 'hsl(0 0% 100%)',
					foreground: 'hsl(222 47% 5%)'
				},
				sidebar: {
					DEFAULT: 'hsl(0 0% 98%)',
					foreground: 'hsl(222 47% 5%)',
					primary: 'hsl(199 89% 48%)',
					'primary-foreground': 'hsl(0 0% 100%)',
					accent: 'hsl(199 80% 94%)',
					'accent-foreground': 'hsl(222 47% 5%)',
					border: 'hsl(220 20% 85%)',
					ring: 'hsl(199 89% 48%)'
				},
				navy: {
					DEFAULT: 'hsl(222 47% 5%)',
					50: 'hsl(222 47% 95%)',
					100: 'hsl(222 47% 85%)',
					200: 'hsl(222 47% 75%)',
					300: 'hsl(222 47% 65%)',
					400: 'hsl(222 47% 55%)',
					500: 'hsl(222 47% 45%)',
					600: 'hsl(222 47% 35%)',
					700: 'hsl(222 47% 25%)',
					800: 'hsl(222 47% 15%)',
					900: 'hsl(222 47% 5%)',
				},
				sky: {
					DEFAULT: 'hsl(199 89% 48%)',
					50: 'hsl(199 80% 94%)',
					100: 'hsl(199 80% 88%)',
					200: 'hsl(199 80% 78%)',
					300: 'hsl(199 80% 68%)',
					400: 'hsl(199 89% 58%)',
					500: 'hsl(199 89% 48%)',
					600: 'hsl(199 89% 38%)',
					700: 'hsl(199 89% 28%)',
					800: 'hsl(199 89% 18%)',
					900: 'hsl(199 89% 8%)',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					from: {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'float': 'float 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;