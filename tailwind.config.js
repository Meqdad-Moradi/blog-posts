/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        showcase:
          "url('https://images.pexels.com/photos/29726716/pexels-photo-29726716/free-photo-of-festive-woman-enjoying-christmas-lights-display.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
    },
  },
  plugins: [],
};
