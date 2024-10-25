module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./node_modules/flowbite/**/*.js" // Note que aqui estamos referenciando o pacote "flowbite", e não "flowbite-react"
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('flowbite/plugin')
    ],
  }
  