/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        'serif': ['ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
        'mulish': ['Mulish', 'sans-serif'],
        'sans': ['DM Sans', 'sans-serif'],
       }
    },
  },
  plugins: [],
}

