module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gray-250' : '#EBEBEB',
        'bgStadium' : '#ABEBCC',
        'bgShop' : '#AEB6FF',
        'bgBro' : '#C1E5FF',
        'bgTeam' : '#FFBFBF',
        'bgLocker' : '#FBF8EE',
        'bgRoad' : '#C6FCB3',
      },
      fontFamily:{
        superstar : ["Superstar", "sans-serif"],
        nicely : ["nicely", "sans-serif"]
      },
      padding:{
        'broPad' : '1.8rem',
        'broPad2' : '1.45rem'
      },
      width:{
        'locker_' : '70%',
      }
      
    },
    fontSize:{
      '2xs' : '.7rem',
      '1xl' : '1.5rem',
      '2xl' : '1.625rem',
      '3xl' : '1.875rem',
      '36px' : '2.25rem',
      '7xl' : '6.25rem',
      'bzone' : ['45px', {lineHeight: '49px'}],
      'bzone2' : ['24px', {lineHeight: '26px'}],
      'roadmap' : '9.375rem'

    },
    letterSpacing:{
      'mini' : '-0.01em'

    }
  },
  plugins: [],
}