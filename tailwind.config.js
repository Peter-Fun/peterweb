/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily:{
        Nunito: ["Nunito","sans-serif"]
      },
      
      keyframes: { // put percentages of where things should be for animations
        left_intro: {
          '0%' : {
            opacity: '0',
            transform: 'translateX(-100%)',
          },
          '100%' : {
            opacity: '1',
            transform: 'translateX(0%)',
          },
        },
        top_intro: {
          '0%' : {
            opacity: '0',
          },
          '100%' : {
            opacity: '1',
          },
        },
        right_intro: {
          '0%' : {
            opacity: '0',
            transform: 'translateX(100%)',
            top:'0'
          },
          '100%' : {
            opacity: '1',
            transform: 'translateX(0%)',
          },
        },
        startup_intro: {
          '0%' : {
            opacity: '0',
            transform: 'translateY(-10%)',
          },
          '100%' : {
            opacity: '1',
            transform: 'translateY(0%)',
          },
        },
        content_intro: {
          '0%' : {
            opacity: '0',
            transform: 'translateY(10%)',
          },
          '100%' : {
            opacity: '1',
            transform: 'translateY(0%)',
          },
        },
        content_outro: {
          '0%' : {
            opacity: '1',
            transform: 'translateY(0%)',
          },
          '100%' : {
            opacity: '0',
            transform: 'translateY(10%)',
          },
        },
      },
    },
    animation: {
      left_intro: '1s left_intro ease both',
      top1_intro: '0.5s top_intro ease 1s both',
      top2_intro: '0.5s top_intro ease 1.5s both',
      top3_intro: '0.5s top_intro ease 2s both',
      right_intro: '1s right_intro ease 2.5s both',
      content_intro: '1s content_intro ease both',
      content_outro: '1s content_outro ease both',
      startup_intro: '2s startup_intro ease 3.5s both',
    }
  },
  plugins: [],
}

