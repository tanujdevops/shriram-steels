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
        // Shriram Steels Manufacturing Story - Raw Steel to Premium Products
        "raw-ingot-entry": {
          "0%": {
            transform: "translate3d(-300px, 50%, 0) scale(0.8)",
            opacity: "0"
          },
          "10%": {
            transform: "translate3d(-100px, 50%, 0) scale(1)",
            opacity: "0.8"
          },
          "25%": {
            transform: "translate3d(20%, 50%, 0) scale(1.1)",
            opacity: "1"
          },
          "40%": {
            transform: "translate3d(40%, 50%, 0) scale(0.9)",
            opacity: "0.7"
          },
          "100%": {
            transform: "translate3d(40%, 50%, 0) scale(0)",
            opacity: "0"
          },
        },
        "forge-heating": {
          "0%, 15%": {
            transform: "translate3d(25%, 60%, 0) scale(0)",
            opacity: "0"
          },
          "20%": {
            transform: "translate3d(25%, 60%, 0) scale(0.8)",
            opacity: "0.6"
          },
          "45%": {
            transform: "translate3d(25%, 60%, 0) scale(1.5)",
            opacity: "1"
          },
          "55%": {
            transform: "translate3d(25%, 60%, 0) scale(1.2)",
            opacity: "0.8"
          },
          "100%": {
            transform: "translate3d(25%, 60%, 0) scale(0)",
            opacity: "0"
          },
        },
        "forging-spark-1": {
          "0%, 30%": {
            transform: "translate3d(30%, 55%, 0) scale(0)",
            opacity: "0"
          },
          "35%": {
            transform: "translate3d(15%, 40%, 0) scale(1.5)",
            opacity: "1"
          },
          "60%": {
            transform: "translate3d(-50px, 20%, 0) scale(0.3)",
            opacity: "0.4"
          },
          "100%": {
            transform: "translate3d(-100px, 10%, 0) scale(0)",
            opacity: "0"
          },
        },
        "forging-spark-2": {
          "0%, 32%": {
            transform: "translate3d(35%, 65%, 0) scale(0)",
            opacity: "0"
          },
          "38%": {
            transform: "translate3d(50%, 80%, 0) scale(1.2)",
            opacity: "0.9"
          },
          "65%": {
            transform: "translate3d(80%, 100%, 0) scale(0.2)",
            opacity: "0.3"
          },
          "100%": {
            transform: "translate3d(100%, 120%, 0) scale(0)",
            opacity: "0"
          },
        },
        "forging-spark-3": {
          "0%, 34%": {
            transform: "translate3d(20%, 45%, 0) scale(0)",
            opacity: "0"
          },
          "40%": {
            transform: "translate3d(60%, 25%, 0) scale(1.8)",
            opacity: "1"
          },
          "70%": {
            transform: "translate3d(90%, 5%, 0) scale(0.1)",
            opacity: "0.2"
          },
          "100%": {
            transform: "translate3d(110%, -10%, 0) scale(0)",
            opacity: "0"
          },
        },
        // Product Formation Sequences - The 6 Premium Products
        "product-black-bar": {
          "0%, 45%": {
            transform: "translate3d(50%, 45%, 0) scale(0) rotate(0deg)",
            opacity: "0"
          },
          "50%": {
            transform: "translate3d(15%, 25%, 0) scale(0.8) rotate(15deg)",
            opacity: "0.7"
          },
          "65%": {
            transform: "translate3d(15%, 25%, 0) scale(1) rotate(0deg)",
            opacity: "1"
          },
          "85%": {
            transform: "translate3d(15%, 25%, 0) scale(1) rotate(0deg)",
            opacity: "1"
          },
          "100%": {
            transform: "translate3d(15%, 25%, 0) scale(0.8) rotate(0deg)",
            opacity: "0.6"
          },
        },
        "product-round-bar": {
          "0%, 50%": {
            transform: "translate3d(50%, 45%, 0) scale(0) rotate(0deg)",
            opacity: "0"
          },
          "55%": {
            transform: "translate3d(35%, 25%, 0) scale(0.8) rotate(-10deg)",
            opacity: "0.7"
          },
          "70%": {
            transform: "translate3d(35%, 25%, 0) scale(1) rotate(0deg)",
            opacity: "1"
          },
          "85%": {
            transform: "translate3d(35%, 25%, 0) scale(1) rotate(0deg)",
            opacity: "1"
          },
          "100%": {
            transform: "translate3d(35%, 25%, 0) scale(0.8) rotate(0deg)",
            opacity: "0.6"
          },
        },
        "product-flat-bar": {
          "0%, 55%": {
            transform: "translate3d(50%, 45%, 0) scale(0) rotate(0deg)",
            opacity: "0"
          },
          "60%": {
            transform: "translate3d(55%, 25%, 0) scale(0.8) rotate(90deg)",
            opacity: "0.7"
          },
          "75%": {
            transform: "translate3d(55%, 25%, 0) scale(1) rotate(90deg)",
            opacity: "1"
          },
          "85%": {
            transform: "translate3d(55%, 25%, 0) scale(1) rotate(90deg)",
            opacity: "1"
          },
          "100%": {
            transform: "translate3d(55%, 25%, 0) scale(0.8) rotate(90deg)",
            opacity: "0.6"
          },
        },
        "product-hex-bar": {
          "0%, 60%": {
            transform: "translate3d(50%, 45%, 0) scale(0) rotate(0deg)",
            opacity: "0"
          },
          "65%": {
            transform: "translate3d(75%, 25%, 0) scale(0.8) rotate(30deg)",
            opacity: "0.7"
          },
          "80%": {
            transform: "translate3d(75%, 25%, 0) scale(1) rotate(0deg)",
            opacity: "1"
          },
          "85%": {
            transform: "translate3d(75%, 25%, 0) scale(1) rotate(0deg)",
            opacity: "1"
          },
          "100%": {
            transform: "translate3d(75%, 25%, 0) scale(0.8) rotate(0deg)",
            opacity: "0.6"
          },
        },
        "product-square-bar": {
          "0%, 65%": {
            transform: "translate3d(50%, 45%, 0) scale(0) rotate(0deg)",
            opacity: "0"
          },
          "70%": {
            transform: "translate3d(15%, 65%, 0) scale(0.8) rotate(45deg)",
            opacity: "0.7"
          },
          "85%": {
            transform: "translate3d(15%, 65%, 0) scale(1) rotate(0deg)",
            opacity: "1"
          },
          "90%": {
            transform: "translate3d(15%, 65%, 0) scale(1) rotate(0deg)",
            opacity: "1"
          },
          "100%": {
            transform: "translate3d(15%, 65%, 0) scale(0.8) rotate(0deg)",
            opacity: "0.6"
          },
        },
        "product-alloy-steel": {
          "0%, 70%": {
            transform: "translate3d(50%, 45%, 0) scale(0) rotate(0deg)",
            opacity: "0"
          },
          "75%": {
            transform: "translate3d(35%, 65%, 0) scale(0.8) rotate(-20deg)",
            opacity: "0.8"
          },
          "90%": {
            transform: "translate3d(35%, 65%, 0) scale(1.1) rotate(0deg)",
            opacity: "1"
          },
          "95%": {
            transform: "translate3d(35%, 65%, 0) scale(1.1) rotate(0deg)",
            opacity: "1"
          },
          "100%": {
            transform: "translate3d(35%, 65%, 0) scale(0.9) rotate(0deg)",
            opacity: "0.7"
          },
        },
        "quality-scanner": {
          "0%, 80%": {
            transform: "translateX(-100%)",
            opacity: "0"
          },
          "85%": {
            transform: "translateX(0%)",
            opacity: "0.8"
          },
          "95%": {
            transform: "translateX(100%)",
            opacity: "0.6"
          },
          "100%": {
            transform: "translateX(200%)",
            opacity: "0"
          },
        },
        "polish-shine-1": {
          "0%, 85%": {
            transform: "translate3d(10%, -100%, 0) rotate(-45deg)",
            opacity: "0"
          },
          "90%": {
            transform: "translate3d(20%, 50%, 0) rotate(-45deg)",
            opacity: "0.9"
          },
          "95%": {
            transform: "translate3d(30%, 150%, 0) rotate(-45deg)",
            opacity: "0.6"
          },
          "100%": {
            transform: "translate3d(40%, 200%, 0) rotate(-45deg)",
            opacity: "0"
          },
        },
        "polish-shine-2": {
          "0%, 87%": {
            transform: "translate3d(60%, -100%, 0) rotate(-45deg)",
            opacity: "0"
          },
          "92%": {
            transform: "translate3d(70%, 50%, 0) rotate(-45deg)",
            opacity: "0.8"
          },
          "97%": {
            transform: "translate3d(80%, 150%, 0) rotate(-45deg)",
            opacity: "0.5"
          },
          "100%": {
            transform: "translate3d(90%, 200%, 0) rotate(-45deg)",
            opacity: "0"
          },
        },
        "final-assembly": {
          "0%, 90%": {
            transform: "translate3d(50%, 50%, 0) scale(0)",
            opacity: "0"
          },
          "95%": {
            transform: "translate3d(50%, 50%, 0) scale(1.2)",
            opacity: "0.8"
          },
          "100%": {
            transform: "translate3d(50%, 50%, 0) scale(1)",
            opacity: "0.6"
          },
        },
        "production-cycle": {
          "0%": {
            transform: "translateX(-100%) translateY(90%)",
            opacity: "0.4"
          },
          "50%": {
            transform: "translateX(0%) translateY(90%)",
            opacity: "0.8"
          },
          "100%": {
            transform: "translateX(100%) translateY(90%)",
            opacity: "0.4"
          },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
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
        // Shriram Steels Manufacturing Story - Meaningful Product Journey
        "raw-ingot-entry": "raw-ingot-entry 20s ease-in-out infinite",
        "forge-heating": "forge-heating 20s ease-in-out infinite",
        "forging-spark-1": "forging-spark-1 20s linear infinite",
        "forging-spark-2": "forging-spark-2 20s linear infinite 0.5s",
        "forging-spark-3": "forging-spark-3 20s linear infinite 1s",
        // The 6 Premium Products Formation
        "product-black-bar": "product-black-bar 20s ease-in-out infinite",
        "product-round-bar": "product-round-bar 20s ease-in-out infinite",
        "product-flat-bar": "product-flat-bar 20s ease-in-out infinite",
        "product-hex-bar": "product-hex-bar 20s ease-in-out infinite",
        "product-square-bar": "product-square-bar 20s ease-in-out infinite",
        "product-alloy-steel": "product-alloy-steel 20s ease-in-out infinite",
        // Quality & Finishing Process
        "quality-scanner": "quality-scanner 20s ease-in-out infinite",
        "polish-shine-1": "polish-shine-1 20s linear infinite",
        "polish-shine-2": "polish-shine-2 20s linear infinite 0.5s",
        "final-assembly": "final-assembly 20s ease-in-out infinite",
        "production-cycle": "production-cycle 20s linear infinite",
        "spin-slow": "spin-slow 30s linear infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [animate],
};
