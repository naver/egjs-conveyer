/** @type {import('@docusaurus/types').DocusaurusConfig} */

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  title: 'Conveyer',
  tagline: "A module used to arrange elements including content infinitely according to grid type. With this module, you can implement various layouts composed of different elements whose sizes vary. It guarantees performance by maintaining the number of DOMs the module is handling under any circumstance",
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  url: 'https://naver.github.io',
  baseUrl: isDev ? '/' : '/egjs-conveyer/',
  projectName: 'naver.github.io',
  organizationName: 'naver',
  plugins: ['docusaurus-plugin-sass', './webpack.js'],
  themes: ['@docusaurus/theme-live-codeblock'],
  trailingSlash: false,
  themeConfig: {
    hideableSidebar: false,
    navbar: {
      logo: {
        alt: 'egjs',
        src: 'img/titlelogo.svg'
      },
      items: [
        {
          type: 'doc',
          docId: 'installation',
          label: 'Docs',
          position: 'left'
        },
        // {
        //   type: "doc",
        //   docId: "api/conveyer",
        //   label: "API",
        //   position: "left"
        // },
        {
          // to: "Guides",
          to: "docs/api/Conveyer",
          label: "API",
          position: "left"
        },
        {
          // to: "docs/examples/",
          type: "doc",
          docId: "examples/HorizontalScroll",
          label: "Examples",
          position: "left"
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            {
              to: 'https://naver.github.io/egjs-conveyer/release/3.9.0/doc/index.html',
              label: '3.x.x'
            }
          ]
        },
        {
          type: 'localeDropdown',
          position: 'right'
        },
        {
          href: 'https://github.com/naver/egjs-conveyer',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/'
            },
            {
              label: 'API',
              to: 'docs/api/conveyer'
            },
          ]
        },
        {
          title: 'Examples',
          items: [
            {
              label: 'Examples',
              to: "docs/examples/HorizontalScroll",
            },
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/naver/egjs-conveyer'
            },
            {
              label: 'Issues',
              href: 'https://github.com/naver/egjs-conveyer/issues'
            },
            {
              label: 'Naver Open Source',
              href: 'https://naver.github.io/'
            }
          ]
        }
      ],
      logo: {
        alt: 'egjs',
        src: 'img/egjs_white.svg',
        href: 'https://naver.github.io/egjs/'
      },
      copyright: `Copyright © ${new Date().getFullYear()} NAVER, Inc. Built with Docusaurus & Bulma.`
    },
    prism: {
      theme: require('prism-react-renderer/themes/oceanicNext'),
      darkTheme: require("prism-react-renderer/themes/palenight")
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        googleAnalytics: {
          trackingID: 'G-3VG8ZPB0QT',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: "https://github.com/naver/egjs-conveyer/edit/master/docs/",
          remarkPlugins: [require("remark-breaks")],
          lastVersion: isDev ? "current" : undefined,
          versions: {
            current: {
              label: `Next`
            }
          },
          editCurrentVersion: true
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/naver/egjs-conveyer/edit/master/docs/blog/"
        },
        pages: {
          remarkPlugins: [require("remark-breaks")]
        },
        theme: {
          customCss: [
            require.resolve('./src/css/examples.css'),
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/scroll-into-view-target.css'),
            require.resolve('../../node_modules/@egjs/react-flicking/dist/flicking.css'),
            require.resolve('../../node_modules/@egjs/flicking-plugins/dist/flicking-plugins.css'),
            require.resolve('./src/css/bulma-override.sass')
          ]
        }
      }
    ],
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ko"]
  }
};
