/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");


module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        btn: {
          background: 'var(--btn-background)',
          'background-hover': 'var(--btn-background-hover)',
          foreground: 'var(--btn-foreground)',
          new: {
            background: 'var(--new-btn-background)',
            foreground: 'var(--new-btn-foreground)',
            'background-hover': 'var(--new-btn-background-hover)',
          },
        },
        card: {
          background: 'var(--card-background)',
          foreground: 'var(--card-foreground)',
          'background-hover': 'var(--card-background-hover)',
        },
        mod: {
          background: 'var(--mod-background)',
          foreground: 'var(--mod-foreground)',
        },
        input: {
          background: 'var(--input-background)',
          foreground: 'var(--input-foreground)',
          border: 'var(--input-border)',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui({
              themes: {
                dark: {
                  colors: {
                    primary: {
                      DEFAULT: "#B4ADEA",
                    }
                  }
                }
              }
  })],
}
