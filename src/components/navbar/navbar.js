import React from "react";
import { Link } from "gatsby";

// import "./navbar.scss";

const Navbar = ({ siteTitle }) => (
    <nav className="navbar is-dark">
        <div className="navbar-brand">
            <Link to="/" className="navbar-item">
                {siteTitle}
            </Link>
            <div className="navbar-burger burger" data-target="nav-target">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div id="nav-target" className="navbar-menu">
            <div className="navbar-start">
                <Link to="/about/" className="navbar-item">
                    About
                </Link>
                <Link to="/blog/" className="navbar-item">
                    Blog
                </Link>
            </div>
        </div>
    </nav>
);

export default Navbar;
