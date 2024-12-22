/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        showcase:
          "url('https://images.pexels.com/photos/680239/pexels-photo-680239.jpeg?auto=compress&cs=tinysrgb&w=800')",
      },
    },
  },
  plugins: [],
};
