/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0a1015',
        'bg-2': '#0c1319',
        panel: '#0d151c',
        border: '#1c2731',
        'border-2': '#243240',
        text: '#e6edf2',
        muted: '#a3b1bd',
        faded: '#6f7f8c',
        accent: '#3ecfb4',
        red: '#ff4d4f',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
