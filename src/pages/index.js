import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";

const IndexPage = () => (
    <Layout>
        <SEO title="Home Page" />
        <h1 className="title is-1">Hello World</h1>
        <p>Add your home page content here.</p>
        <h2 className="title is-2">Portfolio</h2>
        <div className="columns">
            <div className="column">
                <h3 className="title is-3">Header</h3>
                <img src="https://placekitten.com/300/150" />
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
                <img src="https://placekitten.com/300/150" />
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
                <img src="https://placekitten.com/300/150" />
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
                <img src="https://placekitten.com/300/150" />
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
                <img src="https://placekitten.com/300/150" />
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
                <img src="https://placekitten.com/300/150" />
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
