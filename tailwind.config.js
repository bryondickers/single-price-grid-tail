/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors:{
      bluish:"hsl(var(--bluish))",
      brightYellow:"hsl(var(--bright-yellow))",
      cyan:"hsl(var(--cyan))",
      gray:"hsl(var(--gray))",
      blue:"hsl(var(--blue))",
      light:"hsl(var(--white))"
    },
    extend: {
      fontFamily:{
        fontKarla:"'Karla', sans-serif"
      }
    },
  },
  plugins: [],
}

