/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        showcase:
          "url('https://images.pexels.com/photos/29726716/pexels-photo-29726716/free-photo-of-festive-woman-enjoying-christmas-lights-display.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
      colors: {
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        secondary: "hsl(var(--color-secondary) / <alpha-value>)",
        primary400: "hsl(var(--color-primary-400) / <alpha-value>)",
        primary200: "hsl(var(--color-primary-200) / <alpha-value>)",
        danger: "hsl(var(--color-danger) / <alpha-value>)",
        background: "hsl(var(--color-background) / <alpha-value>)",
        forground: "hsl(var(--color-forground) / <alpha-value>)",
        light: "hsl(var(--color-light) / <alpha-value>)",
        dark: "hsl(var(--color-dark) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
