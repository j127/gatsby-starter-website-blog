import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";

const BlogPostTemplate = ({ data, pageContext, location }) => {
    const post = data.markdownRemark;
    const siteTitle = data.site.siteMetadata.title;
    const { previous, next } = pageContext;

    return (
        <Layout location={location} title={siteTitle}>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            />
            <article className="blog-post">
                <header>
                    <h1>{post.frontmatter.title}</h1>
                    <div className="metadata">
                        <p>
                            Posted by {post.frontmatter.author} on{" "}
                            {post.frontmatter.date}
                        </p>
                    </div>
                </header>
                <section dangerouslySetInnerHTML={{ __html: post.html }} />
                <hr />
                <footer>{/* TODO: put author name and metadata here */}</footer>
            </article>

            <nav className="blog-post-nav">
                <ul>
                    {previous && (
                        <li>
                            <Link to={previous.fields.slug} rel="prev">
                                ← {previous.frontmatter.title}
                            </Link>
                        </li>
                    )}
                    {next && (
                        <li>
                            <Link to={next.fields.slug} rel="next">
                                {next.frontmatter.title} →
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </Layout>
    );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
                author
            }
        }
    }
`;
