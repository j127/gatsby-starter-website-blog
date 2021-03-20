import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <h1 className="title">NOT FOUND</h1>
        <p>The requested page was not found.</p>
        <p>
            <Link to="/" className="button is-link is-large">
                Home Page
            </Link>
        </p>
    </Layout>
);

export default NotFoundPage;
