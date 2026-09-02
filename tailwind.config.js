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
        accent: {
          DEFAULT: '#14b8a6',
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          glow: 'rgba(20, 184, 166, 0.15)',
        },
        dark: {
          bg: '#0d1117',
          card: '#161b22',
          elevated: '#21262d',
          border: '#30363d',
          'border-subtle': '#21262d',
          text: '#e6edf3',
          muted: '#8b949e',
          faded: '#6e7681',
        },
        success: '#3fb950',
        warning: '#d29922',
        danger: '#f85149',
        info: '#58a6ff',
        purple: '#a371f7',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'xs': ['11px', '16px'],
        'sm': ['13px', '20px'],
        'base': ['14px', '22px'],
        'lg': ['16px', '24px'],
        'xl': ['18px', '28px'],
        '2xl': ['22px', '32px'],
        '3xl': ['28px', '36px'],
        '4xl': ['36px', '44px'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'sm': '4px',
        'DEFAULT': '6px',
        'md': '8px',
        'lg': '12px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(20, 184, 166, 0.15)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.3)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: '#e6edf3',
            a: {
              color: '#14b8a6',
              '&:hover': {
                color: '#0d9488',
              },
            },
            'h1,h2,h3,h4': {
              color: '#e6edf3',
              fontFamily: 'Inter, system-ui, sans-serif',
            },
            code: {
              color: '#14b8a6',
              backgroundColor: '#21262d',
              padding: '0.2rem 0.4rem',
              borderRadius: '4px',
              fontFamily: 'JetBrains Mono, monospace',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: '#161b22',
              border: '1px solid #21262d',
              borderRadius: '6px',
            },
            blockquote: {
              borderLeftColor: '#14b8a6',
              color: '#8b949e',
            },
            strong: {
              color: '#e6edf3',
            },
            hr: {
              borderColor: '#21262d',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
