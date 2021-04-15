import React, { useState } from "react";
import { Link } from "gatsby";

// import "./navbar.scss";

const Navbar = ({ siteTitle }) => {
    // This toggles the navbar when it's collapsed
    const [isExpanded, setIsExpanded] = useState(false);

    function toggleNav(e: React.MouseEvent) {
        e.preventDefault();
        setIsExpanded(isExpanded ? false : true);
        console.log("isExpanded is now", isExpanded);
    }

    function handleKeyDown() {
        // The next line should go next to the onClick
        // onKeyDown={handleKeyDown}
        // TODO: figure out the ideal way to make a keyboard shortcut for accessibility.
        // toggleNav(e);
    }

    return (
        <nav className="navbar is-dark">
            <div className="container">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                        {siteTitle}
                    </Link>

                    <div
                        className="navbar-burger burger"
                        role="button"
                        tabIndex={0}
                        onClick={toggleNav}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="nav-target"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div>
                </div>

                <div
                    id="nav-target"
                    className={`navbar-menu ${isExpanded ? "is-active" : ""}`}
                >
                    <div className="navbar-start">
                        <Link to="/about/" className="navbar-item">
                            About
                        </Link>
                        <Link to="/blog/" className="navbar-item">
                            Blog
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
