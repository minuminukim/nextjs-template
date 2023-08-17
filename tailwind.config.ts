import { type Config } from "tailwindcss";

export default {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}", "./src/ui/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        "primary-hover": "hsl(var(--primary-active))",

        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        "secondary-hover": "hsl(var(--secondary-hover))",
        "secondary-active": "hsl(var(--secondary-active))",

        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        tertiary: "hsl(var(--tertiary))",
        "tertiary-foreground": "hsl(var(--tertiary-foreground))",
        border: "hsl(var(--border))",
        "border-hover": "hsl(var(--border-hover))",
        "border-subtle": "hsl(var(--border-subtle))",
        attention: "hsl(var(--attention))",
        "attention-emphasis": "hsl(var(--attention-emphasis))",

        accent: "hsl(var(--accent))",
        "accent-emphasis": "hsl(var(--accent-emphasis))",

        success: "hsl(var(--success))",
        "success-emphasis": "hsl(var(--success-emphasis))",

        warning: "hsl(var(--warning))",
        "warning-foreground": "hsl(var(--warning-foreground))",
        "warning-border": "hsl(var(--warning-border))",
        "warning-emphasis": "hsl(var(--warning-emphasis))",
      },
    },
  },
} satisfies Config;
