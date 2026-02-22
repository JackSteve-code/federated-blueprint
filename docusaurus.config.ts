import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  // ====================================================
  // 1. Site Metadata (Clean & Professional)
  // ====================================================
  title: 'JACK.SYSTEMS',
  tagline: 'Software and ML Engineer specializing in AI/ML infrastructure',
  favicon: 'img/favicon.ico',

  url: 'https://jacksteve-code.github.io',
  baseUrl: '/federated-blueprint/',

  organizationName: 'JackSteve-code',
  projectName: 'federated-blueprint',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
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
          routeBasePath: '/', 
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
      integrity: 'sha384-n8MVd4RsNIU0HnZKzVZ8v+oF4z4YdG2I0l7X0rGUNShUMHbOWcZH/5LiKwZC2v9E',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'JACK.SYSTEMS',
      logo: {
        alt: '',
        src: 'img/logo.svg',
        style: { display: 'none' }, // Hides the green dinosaur
      },
      items: [
        {
          href: 'https://github.com/JackSteve-code/federated-blueprint',
          label: 'Source Code',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'light',
      links: [],
      copyright: `© ${new Date().getFullYear()} Jack Steve | AI/ML Infrastructure Expert`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;