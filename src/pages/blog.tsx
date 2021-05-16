import React from "react";
import { Link, graphql } from "gatsby";
// import { PageProps } from "gatsby";

import Layout from "../components/layout/Layout";
import SEO from "../components/seo/SEO";

export default function BlogPage({ data }) {
    // const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMdx.edges;
    return (
        <Layout>
            <SEO title="Blog" description="Welcome to the blog." />
            <h1 className="title is-1">Blog</h1>

            <div className="blog-list">
                {posts.map(({ node }) => {
                    console.log("node", node);
                    const title = node.frontmatter.title;

                    return (
                        <article className="box" key={node.fields.slug}>
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
            </div>
        </Layout>
    );
}

export const pageQuery = graphql`
    query PostsQuery {
        site {
            siteMetadata {
                title
            }
        }
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    slug
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
