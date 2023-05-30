import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        secondary: 'hsl(var(--secondary))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
        tertiary: 'hsl(var(--tertiary))',
        'tertiary-foreground': 'hsl(var(--tertiary-foreground))',
        border: 'hsl(var(--border))',
        attention: 'hsl(var(--attention))',
        accent: 'hsl(var(--accent))',
        'accent-emphasis': 'hsl(var(--accent-emphasis))',
        success: 'hsl(var(--success))',
        'success-emphasis': 'hsl(var(--success-emphasis))',
      },
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '2rem',
      '4xl': '3.5rem',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
    },
  },
  plugins: [],
} satisfies Config;
