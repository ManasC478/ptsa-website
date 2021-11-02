import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { parsePathnameForPage } from '../../utils';

// import css
import './style.css';

const SecondaryBar = () => {
    const location = useLocation();
    const [selectedLink, setSelectedLink] = useState(parsePathnameForPage(location.pathname, 1));

    useEffect(() => {
        setSelectedLink(parsePathnameForPage(location.pathname, 1));
    }, [location.pathname])

    return (
        <nav className="secondary-nav">
            <ul className="secondary-nav-links">
                <li style={{textDecoration: `${selectedLink==='/' ? 'underline' : 'none'}`}}><NavLink to="/">Home</NavLink></li>
                <div className="nav-divider"></div>
                <li style={{textDecoration: `${selectedLink==='/job-shadow' ? 'underline' : 'none'}`}}><NavLink to="/job-shadow/overview">Job Shadow</NavLink></li>
                <div className="nav-divider"></div>
                <li style={{textDecoration: `${selectedLink==='/about-us' ? 'underline' : 'none'}`}}><NavLink to="/about-us">About Us</NavLink></li>
            </ul>
            <ul className="secondary-nav-socialmedia-links">
                <li><a href="#">Visit us at FHS website</a></li>
                <div className="nav-divider-small"></div>
                <li><a href="#">Follow us on Facebook</a></li>
                <div className="nav-divider-small"></div>
                <li><a href="#">Follow us on Instagram</a></li>
            </ul>
        </nav>
    )
}

export default SecondaryBar
