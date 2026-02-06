import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'Federated Blueprint',
  tagline: 'Secure, Distributed AI Without Centralized Data',
  favicon: 'img/favicon.ico',

  url: 'https://jacksteve-code.github.io',
  baseUrl: '/federated-blueprint/',

  organizationName: 'JackSteve-code', // Make sure this matches your GitHub username exactly
  projectName: 'federated-blueprint',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
  [
    'classic',
    {
      docs: {
        routeBasePath: '/', // Add this line to make docs the root
        sidebarPath: './sidebars.ts',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
      blog: false,
      theme: {
        customCss: './src/css/custom.css',
      },
    } satisfies Preset.Options,
  ],
],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-n8MVd4RsNIU0HnZKzVZ8v+oF4z4YdG2I0l7X0rGUNShUMHbOWcZH/5LiKwZC2v9E',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Federated Blueprint',
      logo: {
        alt: 'Federated Blueprint Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Executive Summary',
        },
        {
          href: 'https://github.com/JackSteve-code/federated-blueprint',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Executive Summary',
              to: '/docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/JackSteve-code',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Federated Blueprint Project. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;