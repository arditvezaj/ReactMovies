/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/movies/MoviesList.js",
    "./src/components/movies/MovieItem.js",
    "./src/components/ui/Input.js",
    "./src/components/ui/Button.js",
    "./src/components/ui/MainNavigation.js",
    "./src/pages/MovieDetails.js",
    "./src/pages/Root.js",
    "./src/pages/Error.js",
    "./src/pages/Login.js",
    "./src/App.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
