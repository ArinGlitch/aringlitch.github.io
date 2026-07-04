
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx,js,jsx}",
		"./components/**/*.{ts,tsx,js,jsx}",
		"./app/**/*.{ts,tsx,js,jsx}",
		"./src/**/*.{ts,tsx,js,jsx}",
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
			fontFamily: {
				'poppins': ['Space Grotesk', 'sans-serif'],
				'display': ['Orbitron', 'sans-serif'],
				'body': ['Space Grotesk', 'sans-serif'],
				'mono': ['JetBrains Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					green: '#00ff88',
					cyan: '#00ffff',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'fade-in': {
					"0%": {
						opacity: "0",
						transform: "translateY(10px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				"pulse-scale": {
					"0%, 100%": {
						transform: "scale(1)",
						boxShadow: "0 0 12px 2px rgba(0, 255, 136, 0.4)"
					},
					"50%": {
						transform: "scale(1.08)",
						boxShadow: "0 0 25px 6px rgba(0, 255, 136, 0.7)"
					}
				},
				"grid-scroll": {
					"0%": { backgroundPosition: "0 0" },
					"100%": { backgroundPosition: "0 40px" }
				},
				"blink": {
					"0%, 49%": { opacity: "1" },
					"50%, 100%": { opacity: "0" }
				},
				"glow-pulse": {
					"0%, 100%": { boxShadow: "0 0 8px 0 rgba(0, 255, 136, 0.25)" },
					"50%": { boxShadow: "0 0 24px 4px rgba(0, 255, 136, 0.5)" }
				},
				"scanline": {
					"0%": { transform: "translateY(-100%)" },
					"100%": { transform: "translateY(100vh)" }
				},
				"flicker": {
					"0%, 100%": { opacity: "1" },
					"92%": { opacity: "1" },
					"93%": { opacity: "0.6" },
					"94%": { opacity: "1" },
					"96%": { opacity: "0.4" },
					"97%": { opacity: "1" }
				}
			},
			animation: {
				'fade-in': 'fade-in 0.3s ease-out',
				'pulse-scale': 'pulse-scale 3s infinite ease-in-out',
				'grid-scroll': 'grid-scroll 2s linear infinite',
				'blink': 'blink 1.1s step-end infinite',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'scanline': 'scanline 7s linear infinite',
				'flicker': 'flicker 6s linear infinite',
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
