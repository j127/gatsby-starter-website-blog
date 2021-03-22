import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, isHomepage, lang = "en", meta = [] }) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author {
                            name
                        }
                        social {
                            twitter
                        }
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;

    // The site name should come first in the HTML `<title>` only on the
    // homepage.
    const titleTemplate =
        isHomepage === true
            ? `${site.siteMetadata.title} | %s`
            : `%s | ${site.siteMetadata.title}`;

    return (
        <Helmet
            htmlAttributes={{ lang }}
            title={title}
            titleTemplate={titleTemplate}
            meta={[
                {
                    name: "description",
                    content: metaDescription,
                },
                {
                    property: "og:title",
                    content: title,
                },
                {
                    property: "og:description",
                    content: metaDescription,
                },
                {
                    property: "og:type",
                    content: "website",
                },
                {
                    name: "twitter:card",
                    content: "summary",
                },
                {
                    name: "twitter:creator",
                    content: site.siteMetadata.social.twitter,
                },
                {
                    name: "twitter:title",
                    content: title,
                },
                {
                    name: "twitter:description",
                    content: metaDescription,
                },
            ].concat(meta)}
        />
    );
};

export default SEO;
