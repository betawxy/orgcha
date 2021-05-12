module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: [
        "bg-green-50",
        "bg-green-400",
        "bg-green-600",
        "bg-green-800",
        "bg-blue-50",
        "bg-blue-400",
        "bg-blue-600",
        "bg-blue-800",
        "px-3",
        "-mt-3",
        "text-white",
        "text-sm",
        "rounded-xl",
        "focus:outline-none",
        "hover:bg-green-600",
      ],
      blocklist: [/^debug-/],
      keyframes: true,
      fontFace: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
