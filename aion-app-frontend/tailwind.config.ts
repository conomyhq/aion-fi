import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Base colors
        bg: "var(--bg)",
        panel: "var(--panel)",
        stroke: "var(--stroke)",
        text: "var(--text)",
        
        // Semantic colors
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          muted: "var(--primary-muted)",
          hover: "var(--primary-hover)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
          muted: "var(--secondary-muted)",
          hover: "var(--secondary-hover)",
        },
        tertiary: {
          DEFAULT: "var(--tertiary)",
          foreground: "var(--tertiary-foreground)",
          muted: "var(--tertiary-muted)",
          hover: "var(--tertiary-hover)",
        },
        quaternary: {
          DEFAULT: "var(--quaternary)",
          foreground: "var(--quaternary-foreground)",
          muted: "var(--quaternary-muted)",
          hover: "var(--quaternary-hover)",
        },
        quinary: {
          DEFAULT: "var(--quinary)",
          foreground: "var(--quinary-foreground)",
          muted: "var(--quinary-muted)",
          hover: "var(--quinary-hover)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
          muted: "var(--destructive-muted)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
          muted: "var(--accent-muted)",
        },
        success: {
          DEFAULT: "var(--success)",
          foreground: "var(--success-foreground)",
          muted: "var(--success-muted)",
        },
        warning: {
          DEFAULT: "var(--warning)",
          foreground: "var(--warning-foreground)",
          muted: "var(--warning-muted)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      textDecorationColor: {
        accent: "var(--accent)",
        success: "var(--success)",
        warning: "var(--warning)",
        destructive: "var(--destructive)",
      },
      backgroundOpacity: {
        '98': '0.98'
      },
      boxShadow: {
        'none': 'var(--shadow-none)',
        'sm': 'var(--shadow-sm)',
        'DEFAULT': 'var(--shadow)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
