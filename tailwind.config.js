/** @type {import('tailwindcss').Config} */
module.exports = {
  buildModules: ['@nuxt/postcss8'],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  css: ['@/assets/css/main.css'],
  theme: {
    extend: {
      screens: {
        'widescreen': { raw: '(min-aspect-ration: 3/2)' },
        'tallscreen': { raw: '(min-aspect-ration: 1/2)' },
        'mobile': '480px'
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)'},
          '80%': { transform: 'scaleY(1.2)'},
          '100%': { transform: 'scaleY(1)'}
        },
        animation: {
          'open-menu': 'open-menu 0.5s ease-in-out forwards',
        }
      },
      colors: {
        'blackberry': 'rgba(15, 23, 43, 1)',
        'cream': 'rgba(215, 234, 248, 1)',
        'smoke': 'rgba(91, 110, 128, 1)',
        'smoke-dark': 'rgba(153, 153, 153, 1)',
        'fog': 'rgba(214, 225, 239, 1)',
        'sky-link': 'rgba(0, 167, 255, 1)',
        'sky-link-dark': 'rgba(54, 184, 242, 1)',
        'coffee': 'rgba(47, 47, 47, 1)',

        'tabs-light': 'rgba(226, 245, 255, 1)',
        'tabs-dark': 'rgba(18, 40, 64, 1)',
        'tabs-light-hover': 'rgba(234, 248, 255, 0.5)',
        'tabs-dark-hover': 'rgba(22, 53, 86, 1)',
        'milk': 'rgba(254, 254, 255, 1)',
        'milk-76': 'rgba(254, 254, 255, .76)',
        'milk-15': 'rgba(254, 254, 255, .15)',
        'night-24': 'rgba(1, 1, 1, 0.24)'
      },
      fontFamily: {
        inter: [
          'Inter, ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont, Segoe UI,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
        ],
        ubuntu: [
          'Ubuntu, ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont, Segoe UI,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
        ],
      },
      backgroundImage: {
        'logo-light': "url('/assets/images/logo/logo-light.svg')",
        'logo-dark':  "url('/assets/images/logo/logo-dark.svg')",
        'toggle-light': "url('/assets/images/mode/light-mode.svg')",
        'toggle-dark':  "url('/assets/images/mode/dark-mode.svg')",
        'github-light': "url('/assets/images/links/github-light.svg')",
        'github-dark': "url('/assets/images/links/github-dark.svg')",
        'gitlab-light': "url('/assets/images/links/gitlab-light.svg')",
        'gitlab-dark': "url('/assets/images/links/gitlab-dark.svg')"
      },
      gridTemplateRows: {
        layout: '80px minmax(900px, 1fr) 160px',
      },
      gridTemplateRowsMobile: {
        layout: '80px minmax(900px, 1fr) 250px',
      },
    },
  },
  plugins: [],
};
