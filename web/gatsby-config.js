require('dotenv').config({
  path: '.env'
});
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: 'production',
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
      },
    },
    'gatsby-transformer-sharp', 
    'gatsby-plugin-sharp'
  ],
};
