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
        // Dynamic steel manufacturing animations
        "steel-beam-fly": {
          "0%": {
            transform: "translate3d(-200px, 300px, 0) rotate(-45deg) scale(0.8)",
            opacity: "0"
          },
          "20%": {
            transform: "translate3d(-100px, 200px, 0) rotate(-35deg) scale(1)",
            opacity: "0.8"
          },
          "80%": {
            transform: "translate3d(400px, -100px, 0) rotate(-25deg) scale(1.1)",
            opacity: "0.9"
          },
          "100%": {
            transform: "translate3d(500px, -200px, 0) rotate(-15deg) scale(0.7)",
            opacity: "0"
          },
        },
        "steel-ring-rotate": {
          "0%": {
            transform: "rotate(0deg) scale(0.8)",
            opacity: "0.6"
          },
          "50%": {
            transform: "rotate(180deg) scale(1.1)",
            opacity: "1"
          },
          "100%": {
            transform: "rotate(360deg) scale(0.8)",
            opacity: "0.6"
          },
        },
        "steel-formation-1": {
          "0%, 100%": {
            transform: "translate3d(-100px, -50px, 0) rotate(0deg) scale(0.5)",
            opacity: "0.3"
          },
          "33%": {
            transform: "translate3d(0px, 50px, 0) rotate(120deg) scale(1)",
            opacity: "0.8"
          },
          "66%": {
            transform: "translate3d(100px, -50px, 0) rotate(240deg) scale(1)",
            opacity: "0.8"
          },
        },
        "steel-formation-2": {
          "0%, 100%": {
            transform: "translate3d(150px, 100px, 0) rotate(0deg) scale(0.6)",
            opacity: "0.4"
          },
          "33%": {
            transform: "translate3d(-50px, -100px, 0) rotate(120deg) scale(1.1)",
            opacity: "0.9"
          },
          "66%": {
            transform: "translate3d(-150px, 100px, 0) rotate(240deg) scale(1.1)",
            opacity: "0.9"
          },
        },
        "steel-formation-3": {
          "0%, 100%": {
            transform: "translate3d(0px, -150px, 0) rotate(0deg) scale(0.7)",
            opacity: "0.5"
          },
          "50%": {
            transform: "translate3d(0px, 150px, 0) rotate(180deg) scale(1.2)",
            opacity: "1"
          },
        },
        "steel-spark-1": {
          "0%": {
            transform: "translate3d(-300px, -200px, 0) scale(0)",
            opacity: "0"
          },
          "10%": {
            transform: "translate3d(-250px, -150px, 0) scale(1.5)",
            opacity: "1"
          },
          "90%": {
            transform: "translate3d(350px, 250px, 0) scale(0.3)",
            opacity: "0.6"
          },
          "100%": {
            transform: "translate3d(400px, 300px, 0) scale(0)",
            opacity: "0"
          },
        },
        "steel-spark-2": {
          "0%": {
            transform: "translate3d(300px, -100px, 0) scale(0)",
            opacity: "0"
          },
          "15%": {
            transform: "translate3d(250px, -50px, 0) scale(1.2)",
            opacity: "0.8"
          },
          "85%": {
            transform: "translate3d(-350px, 150px, 0) scale(0.2)",
            opacity: "0.4"
          },
          "100%": {
            transform: "translate3d(-400px, 200px, 0) scale(0)",
            opacity: "0"
          },
        },
        "steel-spark-3": {
          "0%": {
            transform: "translate3d(0px, -250px, 0) scale(0)",
            opacity: "0"
          },
          "20%": {
            transform: "translate3d(-50px, -200px, 0) scale(1.8)",
            opacity: "1"
          },
          "80%": {
            transform: "translate3d(200px, 300px, 0) scale(0.1)",
            opacity: "0.3"
          },
          "100%": {
            transform: "translate3d(250px, 350px, 0) scale(0)",
            opacity: "0"
          },
        },
        "steel-spark-4": {
          "0%": {
            transform: "translate3d(-150px, 200px, 0) scale(0)",
            opacity: "0"
          },
          "25%": {
            transform: "translate3d(-100px, 150px, 0) scale(1)",
            opacity: "0.9"
          },
          "75%": {
            transform: "translate3d(300px, -200px, 0) scale(0.4)",
            opacity: "0.5"
          },
          "100%": {
            transform: "translate3d(350px, -250px, 0) scale(0)",
            opacity: "0"
          },
        },
        "steel-spark-5": {
          "0%": {
            transform: "translate3d(200px, 300px, 0) scale(0)",
            opacity: "0"
          },
          "30%": {
            transform: "translate3d(150px, 250px, 0) scale(1.3)",
            opacity: "1"
          },
          "70%": {
            transform: "translate3d(-300px, -150px, 0) scale(0.2)",
            opacity: "0.4"
          },
          "100%": {
            transform: "translate3d(-350px, -200px, 0) scale(0)",
            opacity: "0"
          },
        },
        "steel-hex-build": {
          "0%, 100%": {
            transform: "translate3d(-200px, 100px, 0) rotate(0deg) scale(0.3)",
            opacity: "0.2"
          },
          "25%": {
            transform: "translate3d(-100px, 50px, 0) rotate(90deg) scale(0.8)",
            opacity: "0.6"
          },
          "50%": {
            transform: "translate3d(100px, 50px, 0) rotate(180deg) scale(1.2)",
            opacity: "1"
          },
          "75%": {
            transform: "translate3d(200px, 100px, 0) rotate(270deg) scale(0.8)",
            opacity: "0.6"
          },
        },
        "steel-plate-slide-1": {
          "0%": {
            transform: "translate3d(-400px, 80px, 0) rotate(0deg)",
            opacity: "0"
          },
          "30%": {
            transform: "translate3d(-100px, 60px, 0) rotate(5deg)",
            opacity: "0.8"
          },
          "70%": {
            transform: "translate3d(300px, 40px, 0) rotate(-5deg)",
            opacity: "0.8"
          },
          "100%": {
            transform: "translate3d(500px, 20px, 0) rotate(0deg)",
            opacity: "0"
          },
        },
        "steel-plate-slide-2": {
          "0%": {
            transform: "translate3d(400px, -80px, 0) rotate(0deg)",
            opacity: "0"
          },
          "30%": {
            transform: "translate3d(100px, -60px, 0) rotate(-3deg)",
            opacity: "0.9"
          },
          "70%": {
            transform: "translate3d(-300px, -40px, 0) rotate(3deg)",
            opacity: "0.9"
          },
          "100%": {
            transform: "translate3d(-500px, -20px, 0) rotate(0deg)",
            opacity: "0"
          },
        },
        "steel-orbit-1": {
          "0%": {
            transform: "translate3d(150px, 0px, 0) rotate(0deg)",
            opacity: "0.5"
          },
          "25%": {
            transform: "translate3d(0px, -150px, 0) rotate(90deg)",
            opacity: "1"
          },
          "50%": {
            transform: "translate3d(-150px, 0px, 0) rotate(180deg)",
            opacity: "1"
          },
          "75%": {
            transform: "translate3d(0px, 150px, 0) rotate(270deg)",
            opacity: "1"
          },
          "100%": {
            transform: "translate3d(150px, 0px, 0) rotate(360deg)",
            opacity: "0.5"
          },
        },
        "steel-orbit-2": {
          "0%": {
            transform: "translate3d(-120px, 0px, 0) rotate(0deg)",
            opacity: "0.6"
          },
          "25%": {
            transform: "translate3d(0px, 120px, 0) rotate(-90deg)",
            opacity: "1"
          },
          "50%": {
            transform: "translate3d(120px, 0px, 0) rotate(-180deg)",
            opacity: "1"
          },
          "75%": {
            transform: "translate3d(0px, -120px, 0) rotate(-270deg)",
            opacity: "1"
          },
          "100%": {
            transform: "translate3d(-120px, 0px, 0) rotate(-360deg)",
            opacity: "0.6"
          },
        },
        "heat-wave-1": {
          "0%, 100%": {
            transform: "translateX(-100%) scaleY(0.5)",
            opacity: "0.3"
          },
          "50%": {
            transform: "translateX(100%) scaleY(1.5)",
            opacity: "0.8"
          },
        },
        "heat-wave-2": {
          "0%, 100%": {
            transform: "translateX(100%) scaleY(0.8)",
            opacity: "0.2"
          },
          "50%": {
            transform: "translateX(-100%) scaleY(1.2)",
            opacity: "0.6"
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
        // Dynamic steel manufacturing animations
        "steel-beam-fly": "steel-beam-fly 12s linear infinite",
        "steel-ring-rotate": "steel-ring-rotate 8s ease-in-out infinite",
        "steel-formation-1": "steel-formation-1 15s ease-in-out infinite",
        "steel-formation-2": "steel-formation-2 18s ease-in-out infinite 2s",
        "steel-formation-3": "steel-formation-3 10s ease-in-out infinite 1s",
        "steel-spark-1": "steel-spark-1 6s linear infinite",
        "steel-spark-2": "steel-spark-2 7s linear infinite 1s",
        "steel-spark-3": "steel-spark-3 5s linear infinite 2s",
        "steel-spark-4": "steel-spark-4 8s linear infinite 3s",
        "steel-spark-5": "steel-spark-5 6s linear infinite 4s",
        "steel-hex-build": "steel-hex-build 20s ease-in-out infinite",
        "steel-plate-slide-1": "steel-plate-slide-1 14s linear infinite",
        "steel-plate-slide-2": "steel-plate-slide-2 16s linear infinite 3s",
        "steel-orbit-1": "steel-orbit-1 12s linear infinite",
        "steel-orbit-2": "steel-orbit-2 10s linear infinite 2s",
        "heat-wave-1": "heat-wave-1 4s ease-in-out infinite",
        "heat-wave-2": "heat-wave-2 5s ease-in-out infinite 1s",
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
