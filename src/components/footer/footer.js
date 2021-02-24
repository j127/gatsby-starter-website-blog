import React from "react";

// import "./footer.scss";

const Footer = ({ siteTitle }) => (
    <div className="footer page-footer">
        <div className="container content">
            &copy; {new Date().getFullYear()} {siteTitle} &bull;{" "}
            <a href="/rss.xml">RSS Feed</a>
        </div>
    </div>
);

export default Footer;
