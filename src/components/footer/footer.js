import React from "react";

// import "./footer.scss";

const Footer = ({ siteTitle }) => (
    <div className="footer">
        &copy; {new Date().getFullYear()} {siteTitle}
    </div>
);

export default Footer;
