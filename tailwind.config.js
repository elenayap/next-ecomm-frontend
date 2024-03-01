/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui','Apple Color Emoji',],
      'serif': ['Cambria', 'Georgia','Times New Roman'],
      'mono': ['ui-monospace', 'SFMono-Regular','Liberation Mono'],
      'display': ['Oswald'],
      'body': ["Open Sans"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["pastel", "forest", "autumn"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "forest", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}

