/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        surface_a: 'rgb(var(--surface-a-tw) / <alpha-value>)',
        primary_color: 'rgb(var(--primary-color-tw) / <alpha-value>)',
        secondary_color: 'rgb(var(--secondary-color-tw) / <alpha-value>)',
        primary_color_text: 'rgb(var(--primary-color-text-tw) / <alpha-value>)',
        secondary_color_text: 'rgb(var(--secondary-color-text-tw) / <alpha-value>)',
      }
    }
  },
  plugins: [],
}