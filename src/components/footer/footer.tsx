import React from "react";
import { Link } from "gatsby"

// import "./footer.scss";

const Footer = ({ siteTitle }) => {
    // static-rendered year
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        // update to the current year
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <div className="footer page-footer">
            <div className="container content">
                &copy; {currentYear} <Link to="/">{siteTitle}</Link>
            </div>
        </div>
    );
};

export default Footer;
