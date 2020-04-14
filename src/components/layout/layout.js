import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

import "../../styles/main.scss";
// import "./layout.scss";

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Navbar siteTitle={data.site.siteMetadata.title} />
            <section className="section">
                <div className="container content">
                    <main>{children}</main>
                </div>
            </section>
            <Footer siteTitle={data.site.siteMetadata.title} />
        </>
    );
};

export default Layout;
