/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'roobet-dark': '#0e1421',
        'roobet-darker': '#070a13',
        'roobet-card': '#1a2235',
        'roobet-card-light': '#222b42',
        'roobet-border': '#2a3349',
        'roobet-red': '#ff3358',
        'roobet-red-light': '#ff5470',
        'roobet-red-dim': '#d12545',
        'roobet-gold': '#ffd166',
        'roobet-gold-dim': '#e6b94d',
        'roobet-coral': '#ff7849',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'Manrope', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'roobet-hero': 'radial-gradient(ellipse at 30% 10%, rgba(255,51,88,0.18) 0%, rgba(14,20,33,0) 60%), radial-gradient(ellipse at 70% 90%, rgba(255,209,102,0.10) 0%, rgba(14,20,33,0) 60%)',
        'roobet-card-grad': 'linear-gradient(135deg, rgba(26,34,53,0.85) 0%, rgba(14,20,33,0.95) 100%)',
        'roobet-red-glow': 'radial-gradient(ellipse at center, rgba(255,51,88,0.35) 0%, transparent 65%)',
        'roobet-gold-shimmer': 'linear-gradient(120deg, rgba(255,51,88,0.18) 0%, rgba(255,209,102,0.22) 50%, rgba(255,51,88,0.18) 100%)',
      },
      boxShadow: {
        'red-glow': '0 0 32px rgba(255,51,88,0.45)',
        'red-glow-sm': '0 0 16px rgba(255,51,88,0.25)',
        'gold-glow': '0 0 28px rgba(255,209,102,0.35)',
        'card': '0 6px 28px rgba(0,0,0,0.45)',
      },
      animation: {
        'red-pulse': 'redPulse 2.4s ease-in-out infinite',
        'blob-drift-1': 'blobDrift1 18s ease-in-out infinite',
        'blob-drift-2': 'blobDrift2 22s ease-in-out infinite',
        'blob-drift-3': 'blobDrift3 26s ease-in-out infinite',
        'gold-shimmer': 'goldShimmer 10s ease infinite',
        'bob': 'bob 5s ease-in-out infinite',
      },
      keyframes: {
        redPulse: {
          '0%, 100%': { boxShadow: '0 0 18px rgba(255,51,88,0.35)' },
          '50%': { boxShadow: '0 0 44px rgba(255,51,88,0.7)' },
        },
        blobDrift1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(40px, -30px) scale(1.08)' },
          '66%': { transform: 'translate(-30px, 25px) scale(0.95)' },
        },
        blobDrift2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-50px, -40px) scale(1.12)' },
        },
        blobDrift3: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(35px, 30px) scale(1.05)' },
          '75%': { transform: 'translate(-25px, -20px) scale(0.92)' },
        },
        goldShimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
