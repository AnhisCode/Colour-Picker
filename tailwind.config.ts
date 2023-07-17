
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'menu': '#17171e',
        'menu-text': '#fafafb',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)']
      },
      lineHeight: {
        'extra-loose': '2.5',
      },
      animation: {
        "side-bounce-left": "sideBounceLeft 1s infinite",
        "side-bounce-right": "sideBounceRight 1s infinite",
      },
      keyframes: {
        sideBounceLeft: {
          '0%, 100%': {
            transform: 'translateX(25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1) ',
          },
        },
        sideBounceRight: {
          '0%, 100%': {
            transform: 'translateX(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      }
    },
  },
  plugins: []
};
