/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#1e2a3b',
        'black': '#3d405b',
        'tan': '#f2cc8f',
        'green': '#81b29a',
        'orange': '#e07a5f',
        'gray': '#f4f1de'

        
      },
    },
  },
  plugins: [],
}