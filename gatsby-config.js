// Edit your settings
const TITLE = "My Website";
const SHORT_NAME = "GatsbyWebsiteStarter";
const DESCRIPTION = "A website";
const AUTHOR_NAME = "Web Developer";
const TWITTER_USERNAME = "codeselfstudy";
const YOUTUBE_URL = "https://www.youtube.com/codeselfstudy";
const PRODUCTION_URL = "https://gatsby-website-starter.netlify.app/";
const DEVELOPMENT_URL = "http://localhost:8000/";

// Read the settings below and make sure that they are correct for your
// site.
module.exports = {
    siteMetadata: {
        title: TITLE,
        description: DESCRIPTION,
        author: { name: AUTHOR_NAME },
        social: {
            twitter: TWITTER_USERNAME,
            youtube: YOUTUBE_URL,
        },
        siteUrl:
            process.env.NODE_ENV === "production"
                ? PRODUCTION_URL
                : DEVELOPMENT_URL,
    },
    plugins: [
        // This loads the blog posts
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/content/blog`,
                name: "blog",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/content/assets`,
                name: "assets",
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        // For more image-loading options, see the docs here:
                        // https://www.gatsbyjs.com/plugins/gatsby-remark-images/
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 700,
                            wrapperStyle:
                                "border: 1px solid #666; margin-left: 0 !important; margin-right: 0 !important; border-radius: 5px;",
                            // tracedSVG: true,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        {
            resolve: "gatsby-plugin-no-sourcemaps",
        },
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images`,
            },
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        "gatsby-plugin-sass",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: TITLE,
                short_name: SHORT_NAME,
                description: DESCRIPTION,
                start_url: "/",
                background_color: "#fff",
                theme_color: "#212121",
                display: "minimal-ui",
                icon: "src/images/app-icon.png",
            },
        },
        // See: https://gatsby.dev/offline
        // "gatsby-plugin-offline",

        // PurgeCSS settings and notes. If you experience CSS bugs,
        // please read the linked page. :)
        // https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                printRejected: true,
                whitelist: [
                    "blockquote",
                    "table",
                    "th",
                    "tr",
                    "td",
                    "tbody",
                    "thead",
                    "content",
                ],
                whitelistPatternsChildren: [/^token/, /^pre/, /^code/],
                // develop: true, // Enable while using `gatsby develop`
            },
        },
        `gatsby-plugin-feed`,
    ],
};
