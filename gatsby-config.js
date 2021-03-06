module.exports = {
  siteMetadata: {
    title: 'Techno in Asia',
    description: 'Undergroundtechno events in Asia',
    keywords:
      'techno events, techno events in Asia, underground techno, techno clubs, techno clubs in Asia',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      // The JSON file contains relative paths to images. These relative paths
      // will be picked up by the JSON transformer and mapped to File nodes.
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
