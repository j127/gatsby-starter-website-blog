// Edit your settings
const TITLE = "My Website";
const SHORT_NAME = "GatsbyWebsiteStarter";
const DESCRIPTION = "A website";
const AUTHOR_NAME = "Web Developer";
const TWITTER_USERNAME = "";
const YOUTUBE_URL = "https://www.youtube.com/";
const PRODUCTION_URL = "https://example.com/";
const DEVELOPMENT_URL = "http://localhost:8000/";

// If you add the Google Analytics ID here (G-XXXXXXXXXX), also
// uncomment the related section below.
// const GOOGLE_ANALYTICS_ID = "";

// If you want to use Amplitude, uncomment this line, add your ID, and
// uncomment the relevant config section below.
// const AMPLITUDE_ID = "";

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
                    `gatsby-remark-copy-linked-files`,
                    {
                        // Documentation: https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            // Class prefix for <pre> tags containing syntax highlighting;
                            // defaults to 'language-' (e.g. <pre class="language-js">).
                            // If your site loads Prism into the browser at runtime,
                            // (e.g. for use with libraries like react-live),
                            // you may use this to prevent Prism from re-processing syntax.
                            // This is an uncommon use-case though;
                            // If you're unsure, it's best to use the default value.
                            classPrefix: "language-",
                            // This is used to allow setting a language for inline code
                            // (i.e. single backticks) by creating a separator.
                            // This separator is a string and will do no white-space
                            // stripping.
                            // A suggested value for English speakers is the non-ascii
                            // character '›'.
                            inlineCodeMarker: null,
                            // This lets you set up language aliases.  For example,
                            // setting this to '{ sh: "bash" }' will let you use
                            // the language "sh" which will highlight using the
                            // bash highlighter.
                            aliases: {},
                            // This toggles the display of line numbers globally alongside the code.
                            // To use it, add the following line in gatsby-browser.js
                            // right after importing the prism color scheme:
                            //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
                            // Defaults to false.
                            // If you wish to only show line numbers on certain code blocks,
                            // leave false and use the {numberLines: true} syntax below
                            showLineNumbers: false,
                            // If setting this to true, the parser won't handle and highlight inline
                            // code used in markdown i.e. single backtick code like `this`.
                            noInlineHighlight: false,
                            // This adds a new language definition to Prism or extend an already
                            // existing language definition. More details on this option can be
                            // found under the header "Add new language definition or extend an
                            // existing language" below.
                            languageExtensions: [
                                {
                                    language: "superscript",
                                    extend: "javascript",
                                    definition: {
                                        superscript_types: /(SuperType)/,
                                    },
                                    insertBefore: {
                                        function: {
                                            superscript_keywords: /(superif|superelse)/,
                                        },
                                    },
                                },
                            ],
                            // Customize the prompt used in shell output
                            // Values below are default
                            prompt: {
                                user: "root",
                                host: "localhost",
                                global: false,
                            },
                            // By default the HTML entities <>&'" are escaped.
                            // Add additional HTML escapes by providing a mapping
                            // of HTML entities and their escape value IE: { '}': '&#123;' }
                            escapeEntities: {},
                        },
                    },
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        {
            resolve: "gatsby-plugin-no-sourcemaps",
        },
        // Uncomment the section below (and the related selection at the
        // top) to enable Google Analytics.
        //
        // See the configuration options for more information:
        // https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/
        // https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-analytics/
        //
        // {
        //     resolve: `gatsby-plugin-google-gtag`,
        //     options: {
        //         trackingIds: [GOOGLE_ANALYTICS_ID],
        //         gtagConfig: {
        //             anonymize_ip: true,
        //         },
        //         pluginConfig: {
        //             head: true,
        //             respectDNT: true,
        //         },
        //     },
        // },
        //
        // If you want to use Amplitude, uncomment this next section and
        // put your Amplitude key at the top of this file.
        //
        // More insructions: https://www.gatsbyjs.com/plugins/gatsby-plugin-amplitude-analytics/
        //
        // {
        //     resolve: `gatsby-plugin-amplitude-analytics`,
        //     options: {
        //         // Specify the API key for your Amplitude Project (required)
        //         apiKey: AMPLITUDE_ID,
        //         // Puts tracking script in the head instead of the body (optional)
        //         head: true,
        //         // Prevents loading Amplitude and logging events if visitors have "Do Not Track" enabled (optional)
        //         respectDNT: true,
        //         // Avoids sending pageview hits from custom paths (optional)
        //         // exclude: ["/preview/**", "/do-not-track/me/too/"],
        //         // Override the default event types (optional)
        //         eventTypes: {
        //             outboundLinkClick: "OUTBOUND_LINK_CLICK",
        //             pageView: "PAGE_VIEW",
        //         },
        //         // Amplitude JS SDK configuration options (optional)
        //         amplitudeConfig: {
        //             saveEvents: true,
        //             includeUtm: true,
        //             includeReferrer: true,
        //         },
        //         // Specify NODE_ENVs in which the plugin should be loaded (optional)
        //         environments: ["production"],
        //     },
        // },
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
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                // See https://www.gatsbyjs.com/plugins/gatsby-plugin-sass/
            },
        },
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
                ignore: ["prism.css"], // keeps the code syntax highlighting
                whitelistPatternsChildren: [/token$/, /^pre/, /^code/],
                // Enable while using `gatsby develop`
                // develop: true,
            },
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                    {
                        site {
                            siteMetadata {
                                title
                                description
                                siteUrl
                                site_url: siteUrl
                            }
                        }
                    }
                `,
                feeds: [
                    {
                        serialize: ({ query: { site, allMarkdownRemark } }) => {
                            return allMarkdownRemark.edges.map((edge) => {
                                return Object.assign(
                                    {},
                                    edge.node.frontmatter,
                                    {
                                        description: edge.node.excerpt,
                                        date: edge.node.frontmatter.date,
                                        url:
                                            site.siteMetadata.siteUrl +
                                            edge.node.fields.slug,
                                        guid:
                                            site.siteMetadata.siteUrl +
                                            edge.node.fields.slug,
                                        custom_elements: [
                                            {
                                                "content:encoded":
                                                    edge.node.html,
                                            },
                                        ],
                                    }
                                );
                            });
                        },
                        query: `
                            {
                                allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
                                    edges {
                                        node {
                                            excerpt
                                            html
                                            fields {
                                                slug
                                            }
                                            frontmatter {
                                                title
                                                date
                                            }
                                        }
                                    }
                                }
                            }
                        `,
                        output: "/rss.xml",
                        title: `${TITLE} RSS Feed`,
                        // optional configuration to insert feed reference in pages:
                        // if `string` is used, it will be used to create RegExp and then test if pathname of
                        // current page satisfied this regular expression;
                        // if not provided or `undefined`, all pages will have feed reference inserted
                        match: "^/blog/",
                        // optional configuration to specify external rss feed, such as feedburner
                        // link: "https://feeds.feedburner.com/gatsby/blog",
                    },
                ],
            },
        },
    ],
};
