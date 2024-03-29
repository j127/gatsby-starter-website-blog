const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    const BlogPostTemplate = path.resolve("./src/templates/BlogPost.tsx");
    const result = await graphql(
        `
            {
                allMdx(
                    sort: { fields: [frontmatter___date], order: DESC }
                    limit: 1000
                ) {
                    edges {
                        node {
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                                slug
                            }
                        }
                    }
                }
            }
        `
    );

    if (result.errors) {
        throw result.errors;
    }

    const posts = result.data.allMdx.edges;
    posts.forEach((post, index) => {
        const previous =
            index === posts.length - 1 ? null : posts[index + 1].node;
        const next = index === 0 ? null : posts[index - 1].node;

        createPage({
            path: post.node.fields.slug,
            component: BlogPostTemplate,
            context: {
                slug: post.node.fields.slug,
                previous,
                next,
            },
        });
    });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === "Mdx") {
        // The path is built from the slug in the blog post frontmatter.
        const value = `/blog/${node.frontmatter.slug}/`;

        createNodeField({
            name: "slug",
            node,
            value,
        });
    }
};
