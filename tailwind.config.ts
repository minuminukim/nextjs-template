import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
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
        danger: 'hsl(var(--danger))',
        'danger-emphasis': 'hsl(var(--danger-emphasis))',
      },
    },
  },
} satisfies Config;
