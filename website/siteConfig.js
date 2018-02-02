/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    image: '/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'BigONE Developer API' /* title for your website */,
  tagline: 'Documents for BigONE Developer API',
  url: 'https://api.big.one' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  projectName: 'bigone-developer-api', // or set an env variable PROJECT_NAME
  headerLinks: [
    {doc: 'get_started', label: 'Docs'},
    {doc: 'api', label: 'API'},
    // {page: 'help', label: 'Help'},
    // {blog: true, label: 'Blog'},
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/big.svg',
  footerIcon: 'img/big.svg',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#282a36',
    secondaryColor: '#716aa7',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' BigONE',
  organizationName: 'inblockchain', // or set an env variable ORGANIZATION_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/inblockchain/bigone-developer-api',
};

module.exports = siteConfig;
