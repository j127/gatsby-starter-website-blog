import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";

const BlogPage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;
    return (
        <Layout>
            <SEO title="Blog" />
            <h1 className="title is-1">Blog</h1>

            {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug;

                return (
                    <article key={node.fields.slug}>
                        <header>
                            <h2 className="title is-2">
                                <Link to={node.fields.slug}>{title}</Link>
                            </h2>
                            <div className="metadata">
                                {node.frontmatter.date}
                            </div>
                        </header>
                        <section>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html:
                                        node.frontmatter.description ||
                                        node.excerpt,
                                }}
                            />
                        </section>
                    </article>
                );
            })}
        </Layout>
    );
};

export default BlogPage;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                    }
                }
            }
        }
    }
`;
