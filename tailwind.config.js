/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundImage: {
        "service-gradient-radial":
          "radial-gradient(circle, rgba(0,0,44,.5) 0%, rgba(255,255,255,0) 50%, rgba(0,0,44,.5) 100%), url('/services-featured-img.png')",
        "contact-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.64) 0%, rgba(0, 0, 0, 0.4) 48.4%, rgba(0, 0, 0, 0.64) 100%), url('/contactusheroimage.svg')",
      },
     
      maxWidth: {
        "8xl": "1290px",
      },
      boxShadow: {
        boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)",
      },
      backgroundColor: {
        "primary-color": "#5356FF",
      },
    },
  },
  plugins: [],
};
