/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: "Redux", // Title for your website.
  tagline: "Redux Documentation",
  url: "https://redux.js.org", // Your website URL
  baseUrl: "/", // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: "redux",
  organizationName: "reduxjs",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: "getting-started/learn-redux", label: "Docs" },
    { href: "https://discord.gg/0ZcbPKXt5bZ6au5t", label: "Discord" },
    { href: "https://stackoverflow.com/questions/tagged/redux", label: "Need help?" },
  ],

  /* path to images for header/footer */
  headerIcon: "img/redux_white.svg",
  footerIcon: "img/redux_white.svg",
  favicon: "img/favicon/favicon.ico",

  /* Colors for website */
  colors: {
    primaryColor: "#764ABC",
    secondaryColor: "#764ABC",
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: 'Copyright (c) 2015-present Dan Abramov and the Redux documentation authors.',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "atom-one-dark"
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ["/scripts/sidebarScroll.js"],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: "img/docusaurus.png",
  twitterImage: "img/docusaurus.png",

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: "https://github.com/reduxjs/redux",
};

module.exports = siteConfig;
