// Force Tailwind rebuild
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#128243',
        'dark-green': '#063B1D',
        'gold-accent': '#ECC043',
        'gold-light': '#F7D070',
        'cream-bg': '#F8F6F1',
        'dark-text': '#1F1F1F',
        'soft-gray': '#666666',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Poppins', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
