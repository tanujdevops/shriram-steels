const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",

  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: 0 },
        },
        // Steel bar floating animations
        "steel-float-1": {
          "0%, 100%": {
            transform: "translate3d(-120px, -80px, 0) rotate(15deg) scale(1)",
            opacity: "0.8"
          },
          "50%": {
            transform: "translate3d(-100px, -120px, 0) rotate(25deg) scale(1.1)",
            opacity: "1"
          },
        },
        "steel-float-2": {
          "0%, 100%": {
            transform: "translate3d(150px, 60px, 0) rotate(45deg) scale(0.9)",
            opacity: "0.7"
          },
          "50%": {
            transform: "translate3d(180px, 80px, 0) rotate(55deg) scale(1)",
            opacity: "0.9"
          },
        },
        "steel-float-3": {
          "0%, 100%": {
            transform: "translate3d(-80px, 100px, 0) rotate(-12deg) scale(1.1)",
            opacity: "0.6"
          },
          "50%": {
            transform: "translate3d(-60px, 120px, 0) rotate(-20deg) scale(1.2)",
            opacity: "0.8"
          },
        },
        "steel-float-4": {
          "0%, 100%": {
            transform: "translate3d(80px, -60px, 0) rotate(-15deg) scale(1)",
            opacity: "0.8"
          },
          "50%": {
            transform: "translate3d(100px, -40px, 0) rotate(-10deg) scale(0.9)",
            opacity: "1"
          },
        },
        "steel-float-5": {
          "0%, 100%": {
            transform: "translate3d(-200px, 40px, 0) rotate(75deg) scale(0.8)",
            opacity: "0.5"
          },
          "50%": {
            transform: "translate3d(-180px, 20px, 0) rotate(85deg) scale(0.9)",
            opacity: "0.7"
          },
        },
        "steel-float-6": {
          "0%, 100%": {
            transform: "translate3d(120px, 140px, 0) rotate(6deg) scale(0.9)",
            opacity: "0.7"
          },
          "50%": {
            transform: "translate3d(140px, 160px, 0) rotate(12deg) scale(1)",
            opacity: "0.9"
          },
        },
        // Sparkle animations
        "steel-sparkle-1": {
          "0%, 100%": {
            transform: "translate3d(-250px, -100px, 0) scale(0.5)",
            opacity: "0.3"
          },
          "50%": {
            transform: "translate3d(-230px, -80px, 0) scale(1)",
            opacity: "0.8"
          },
        },
        "steel-sparkle-2": {
          "0%, 100%": {
            transform: "translate3d(200px, -150px, 0) scale(0.3)",
            opacity: "0.2"
          },
          "50%": {
            transform: "translate3d(220px, -130px, 0) scale(0.8)",
            opacity: "0.6"
          },
        },
        "steel-sparkle-3": {
          "0%, 100%": {
            transform: "translate3d(-150px, 200px, 0) scale(0.4)",
            opacity: "0.4"
          },
          "50%": {
            transform: "translate3d(-130px, 180px, 0) scale(0.9)",
            opacity: "0.7"
          },
        },
        "pulse-slow": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
        // Steel bar animations
        "steel-float-1": "steel-float-1 8s ease-in-out infinite",
        "steel-float-2": "steel-float-2 10s ease-in-out infinite 1s",
        "steel-float-3": "steel-float-3 7s ease-in-out infinite 2s",
        "steel-float-4": "steel-float-4 9s ease-in-out infinite 0.5s",
        "steel-float-5": "steel-float-5 11s ease-in-out infinite 3s",
        "steel-float-6": "steel-float-6 6s ease-in-out infinite 1.5s",
        // Sparkle animations
        "steel-sparkle-1": "steel-sparkle-1 4s ease-in-out infinite",
        "steel-sparkle-2": "steel-sparkle-2 5s ease-in-out infinite 1s",
        "steel-sparkle-3": "steel-sparkle-3 3s ease-in-out infinite 2s",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [animate],
};
