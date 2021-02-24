import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";

const IndexPage = () => (
    <Layout>
        <SEO title="Home Page" />
        <h1 className="title is-1">Hello World</h1>
        <div className="columns">
            <div className="column is-two-thirds">
                <p className="subtitle">Add your home page content here.</p>
                <p>
                    Get this Gatsby starter template on Github{" "}
                    <a href="https://github.com/j127/gatsby_website_starter">
                        here
                    </a>
                    .
                </p>
                <p>
                    Ipsum similique ab nostrum maxime harum Eum accusantium
                    numquam possimus autem facilis Totam cupiditate aliquid
                    illum aperiam recusandae Esse quaerat consectetur distinctio
                    amet maiores Sapiente saepe error similique reiciendis vel
                </p>
                <p>
                    Sit eveniet veniam numquam natus aliquid! Molestiae velit
                    dolore labore excepturi quidem? Aut inventore natus illum
                    vitae blanditiis. Perspiciatis sapiente tempora explicabo
                    aut provident voluptatem Blanditiis fugit earum corrupti
                    autem?
                </p>
            </div>
            <div className="column">
                <img
                    width="300"
                    height="300"
                    src="https://placekitten.com/300/300"
                    alt="cat"
                />
            </div>
        </div>
        <h2 className="title is-2">Portfolio</h2>
        <div className="columns">
            <div className="column">
                <h3 className="title is-3">Header</h3>
                <img
                    width="300"
                    height="150"
                    alt="placeholder kitten"
                    src="https://placekitten.com/300/150"
                />
                <p>
                    Ipsum cupiditate velit recusandae libero cumque Dolore
                    itaque magnam commodi autem iure!
                </p>
                {/* If you're linking interally, use `Link` instead of `a` */}
                <a href="#" className="button">
                    Read More
                </a>
            </div>

            <div className="column">
                <h3 className="title is-3">Header</h3>
                <img
                    width="300"
                    height="150"
                    alt="placeholder kitten"
                    src="https://placekitten.com/300/150"
                />
                <p>
                    Ipsum cupiditate velit recusandae libero cumque Dolore
                    itaque magnam commodi autem iure!
                </p>
                <a href="#" className="button">
                    Read More
                </a>
            </div>

            <div className="column">
                <h3 className="title is-3">Header</h3>
                <img
                    width="300"
                    height="150"
                    alt="placeholder kitten"
                    src="https://placekitten.com/300/150"
                />
                <p>
                    Ipsum cupiditate velit recusandae libero cumque Dolore
                    itaque magnam commodi autem iure!
                </p>
                <a href="#" className="button">
                    Read More
                </a>
            </div>
        </div>
        <div className="columns">
            <div className="column">
                <h3 className="title is-3">Header</h3>
                <img
                    width="300"
                    height="150"
                    alt="placeholder kitten"
                    src="https://placekitten.com/300/150"
                />
                <p>
                    Ipsum cupiditate velit recusandae libero cumque Dolore
                    itaque magnam commodi autem iure!
                </p>
                {/* If you're linking interally, use `Link` instead of `a` */}
                <a href="#" className="button">
                    Read More
                </a>
            </div>

            <div className="column">
                <h3 className="title is-3">Header</h3>
                <img
                    width="300"
                    height="150"
                    alt="placeholder kitten"
                    src="https://placekitten.com/300/150"
                />
                <p>
                    Ipsum cupiditate velit recusandae libero cumque Dolore
                    itaque magnam commodi autem iure!
                </p>
                <a href="#" className="button">
                    Read More
                </a>
            </div>

            <div className="column">
                <h3 className="title is-3">Header</h3>
                <img
                    width="300"
                    height="150"
                    alt="placeholder kitten"
                    src="https://placekitten.com/300/150"
                />
                <p>
                    Ipsum cupiditate velit recusandae libero cumque Dolore
                    itaque magnam commodi autem iure!
                </p>
                <a href="#" className="button">
                    Read More
                </a>
            </div>
        </div>
    </Layout>
);

export default IndexPage;
