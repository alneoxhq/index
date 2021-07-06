module.exports = {
  // Customize me!
  siteMetadata: {
    company: "Alnexx",
    domain: "https://master.d12j3a0n2yxsj0.amplifyapp.com/",
    defaultTitle:
      "Alnex: Digital Agency Providing ML, Python, Node, React.js Engineering.",
    preamble: "Alternative Visions for the Future.",
    defaultDescription: "NEW APPROACHES TO SOLVING OLD PROBLEMS.",
    postamble: "Think we can help your project? We'd love to hear from you!",
    contact: {
      email: "hello@alnex.com",
    },
    menuLinks: [],
  },
  pathPrefix: "/tiny-agency",
  plugins: [
    "gatsby-plugin-top-layout",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: "gatsby-plugin-material-ui",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Alnex",
        short_name: "Alnex",
        start_url: "/",
        background_color: "#eeeeee",
        //theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "images/logo.svg", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        //crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fox and Geese`,
        short_name: `Fox and Geese`,
        start_url: `/`,
        background_color: `#eeeeee`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "./images/logo.svg",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data`,
        name: "data",
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-1s",
      },
    },
  ],
};
