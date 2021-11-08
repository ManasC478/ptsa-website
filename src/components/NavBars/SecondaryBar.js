import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { parsePathnameForPage, getDocumentTitle } from '../../utils';

// import material ui icons
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';

// import css
import './style.css';

const SecondaryBar = () => {
    const location = useLocation();
    const [selectedLink, setSelectedLink] = useState(parsePathnameForPage(location.pathname, 1));
    const [dropDown, setDropDown] = useState(window.innerWidth < 800);
    const [dropDownOpen, setDropDownOpen] = useState(false);

    useEffect(() => {
        console.log('in effect');
        setSelectedLink(parsePathnameForPage(location.pathname, 1));
        document.title = getDocumentTitle(location.pathname);
    }, [location.pathname]);

    useEffect(() => {
        console.log('in state');
        const setState = () => {
            if (window.innerWidth < 800) {
                setDropDown(true);
            } else {
                setDropDown(false);
            }
        }
        window.addEventListener('resize', setState);

        return () => window.removeEventListener('resize', setState);
    }, [])

    return (
        <nav className="secondary-nav-container">
            {
                !dropDown ?
                    (
                        <div className="secondary-nav">
                            <ul className="secondary-nav-links">
                                <li style={{textDecoration: `${selectedLink==='/' ? 'underline' : 'none'}`}}><NavLink to="/">Home</NavLink></li>
                                <div className="nav-divider"></div>
                                <li style={{textDecoration: `${selectedLink==='/job-shadow' ? 'underline' : 'none'}`}}><NavLink to="/job-shadow/overview">Job Shadow</NavLink></li>
                                <div className="nav-divider"></div>
                                <li style={{textDecoration: `${selectedLink==='/about-us' ? 'underline' : 'none'}`}}><NavLink to="/about-us">About Us</NavLink></li>
                            </ul>
                            <ul className="secondary-nav-socialmedia-links">
                                <li><a href="https://fhs.fuhsd.org/parent-portal/ptsa" rel="noreferrer" target="_blank">Visit us at FHS website</a></li>
                                <div className="nav-divider-small"></div>
                                <li><a href="https://www.facebook.com/fremonthighptsa/" rel="noreferrer" target="_blank">Follow us on Facebook</a></li>
                                <div className="nav-divider-small"></div>
                                <li><a href="https://www.instagram.com/fremontptsa/" rel="noreferrer" target="_blank">Follow us on Instagram</a></li>
                            </ul>
                        </div>
                    )
                    :
                    (
                        <div className="secondary-nav-stacked">
                            <button style={{ display: dropDown ? 'inline-block' : 'none' }} onClick={() => setDropDownOpen(!dropDownOpen)}>{dropDownOpen ? <CloseIcon /> : <DehazeIcon />}</button>
                            <ul className="drop-down-links" style={{ opacity: dropDownOpen ? '1' : '1', top: dropDownOpen ? '100%' : '-100%' }}>
                                <li style={{textDecoration: `${selectedLink==='/' ? 'underline' : 'none'}`}}><NavLink to="/">Home</NavLink></li>
                                <li style={{textDecoration: `${selectedLink==='/job-shadow' ? 'underline' : 'none'}`}}><NavLink to="/job-shadow/overview">Job Shadow</NavLink></li>
                                <li style={{ textDecoration: `${selectedLink === '/about-us' ? 'underline' : 'none'}` }}><NavLink to="/about-us">About Us</NavLink></li>
                                <hr />
                                <li><a href="https://fhs.fuhsd.org/parent-portal/ptsa" rel="noreferrer" target="_blank">Visit us at FHS website</a></li>
                                <li><a href="https://www.facebook.com/fremonthighptsa/" rel="noreferrer" target="_blank">Follow us on Facebook</a></li>
                                <li><a href="https://www.instagram.com/fremontptsa/" rel="noreferrer" target="_blank">Follow us on Instagram</a></li>
                            </ul>
                        </div>
                    )
            }
        </nav>
    )
}

export default SecondaryBar
