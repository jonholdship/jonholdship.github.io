/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Jon Holdship',
  tagline: 'Astrophysics PDRA and NHS Data Scientist',
  url: 'https://joholdship.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.png',
  organizationName: 'jonholdship', // Usually your GitHub org/user name.
  projectName: 'joholdship.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Jon Holdship',
      items: [
        {to: "/about/", label: "About", position:"left"},

        {to: "/projects/", label: "Projects", position:"left"},
        {to: '/blog', label: 'Publications', position: 'left'},
        {
          href: 'https://github.com/jonholdship',
          label: 'GitHub',
          position: 'right',
        },
        {to:"https://jonholdship.github.io/pdf/holdshipj.pdf",label: "CV", position:"left"}
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Software',
          items: [
            {
              label: 'UCLCHEM',
              href: 'https://uclchem.github.io',
            },
            {
              label: 'SpectralRadex',
              href: 'https://spectralradex.readthedocs.io',
            },
            {
              label: 'Chemulator',
              href: 'https://github.com/UCLCHEM/chemulator',
            },
          ],
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/jonholdship',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/jonathan-holdship-106858131/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jon Holdship Built with Docusaurus.`,
    },
    googleAnalytics: {
      trackingID: 'G-9KDD2SRLZV',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
      },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://joholdship.github.io/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
