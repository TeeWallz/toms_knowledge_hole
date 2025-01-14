// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Teewallz'z Knowledge Hole",
    tagline: 'Things I will forget in a day',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://wiki.teewallz.dev',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'Teewallz', // Usually your GitHub org/user name.
    projectName: 'teewallz_knowledge_hole', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    plugins: [
        require.resolve('docusaurus-plugin-image-zoom')
    ],


    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/TeeWallz/teewallz_knowledge_hole/tree/main/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/TeeWallz/teewallz_knowledge_hole/tree/main/',
                },
                theme: {
                    customCss: require.resolve('./docs/music/music.css'),
                },
            }),
        ],
    ],
    // themes: ['@docusaurus/theme-search-algolia'],
    
    themeConfig:
    {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: false,
        },
        tableOfContents: {
            minHeadingLevel: 2,
            maxHeadingLevel: 5,
        },
        navbar: {
            title: 'Teewallz Knowledge Hole',
            logo: {
                alt: 'My Site Logo',
                src: 'img/ico.png',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'Home',
                    position: 'left',
                    label: '~/Wiki',
                },
                {
                    to: '/blog',
                    label: '~/Blog',
                    position: 'left'
                },
                {
                    label: '🐦',
                    href: 'https://web.archive.org/web/20230309213344/https://twitter.com/fckeveryword/status/1621296957011410944?cxt=HHwWgICy4cG_gIAtAAAA',
                    position: 'right',
                },
                {
                    href: 'https://github.com/TeeWallz/teewallz_knowledge_hole',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        // footer: {
        //     style: 'dark',
        //     links: [
        //         // {
        //         //     title: 'Docs',
        //         //     items: [
        //         //         {
        //         //             label: 'Tutorial',
        //         //             to: '/docs/intro',
        //         //         },
        //         //     ],
        //         // },
        //         {
        //             title: 'Community',
        //             items: [
        //                 // {
        //                 //     label: 'Stack Overflow',
        //                 //     href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //                 // },
        //                 // {
        //                 //     label: 'Discord',
        //                 //     href: 'https://discordapp.com/invite/docusaurus',
        //                 // },
        //                 {
        //                     label: 'Twitter',
        //                     href: 'https://twitter.com/fckeveryword/status/1621296957011410944?cxt=HHwWgICy4cG_gIAtAAAA',
        //                 },
        //             ],
        //         },
        //         {
        //             title: 'More',
        //             items: [
        //                 {
        //                     label: 'Blog',
        //                     to: '/blog',
        //                 },
        //                 {
        //                     label: 'GitHub',
        //                     href: 'https://github.com/facebook/docusaurus',
        //                 },
        //             ],
        //         },
        //     ],
        //     copyright: `Copyright © ${new Date().getFullYear()} Tom's Knowledge Hole. Built with Docusaurus.`,
        // },
        // prism: {
        // theme: lightCodeTheme,
        // theme: darkCodeTheme,
        // darkTheme: darkCodeTheme,
        // },
        zoom: {
            selector: '.markdown :not(em) > img',
            background: {
                light: 'rgb(255, 255, 255)',
                dark: 'rgb(50, 50, 50)'
            },
            config: {
                // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
                margin: 80,
            }
        },
        algolia: {
            // The application ID provided by Algolia
            appId: 'A9YQF4TQR8',
      
            // Public API key: it is safe to commit it
            apiKey: '6cccbd66626893b85c969ad3163a39e4',
      
            indexName: 'teewallz',
      
            // Optional: see doc section below
            contextualSearch: true,
      
            // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
            // externalUrlRegex: 'external\\.com|domain\\.com',
      
            // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
            replaceSearchResultPathname: {
              from: '/docs/', // or as RegExp: /\/docs\//
              to: '/',
            },
      
            // Optional: Algolia search parameters
            searchParameters: {},
      
            // Optional: path for search page that enabled by default (`false` to disable it)
            searchPagePath: 'search',
      
            //... other Algolia params
          },
    },
};

module.exports = config;
