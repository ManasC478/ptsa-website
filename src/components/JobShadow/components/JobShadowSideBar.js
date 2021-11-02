import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { parsePathnameForPage } from '../../../utils';

const JobShadowSideBar = () => {
    const location = useLocation();
    const [selectedLink, setSelectedLink] = useState(parsePathnameForPage(location.pathname, 2));
    
    useEffect(() => {
        setSelectedLink(parsePathnameForPage(location.pathname, 2));
    }, [location.pathname])

    return (
        <aside className="job-shadow-sidebar">
            <Link to="/job-shadow/overview" style={{textDecoration: `${selectedLink==='/overview' ? 'underline' : 'none'}`}}>Job Shadow</Link>
            <Link to="/job-shadow/explore-jobs" style={{textDecoration: `${selectedLink==='/explore-jobs' ? 'underline' : 'none'}`}}>Explore Jobs</Link>
            <Link to="/job-shadow/host-registration" style={{textDecoration: `${selectedLink==='/host-registration' ? 'underline' : 'none'}`}}>Host Registration</Link>
            <Link to="/job-shadow/student-registration" style={{textDecoration: `${selectedLink==='/student-registration' ? 'underline' : 'none'}`}}>Student Registration</Link>
            <Link to="/job-shadow/shadow-day" style={{textDecoration: `${selectedLink==='/shadow-day' ? 'underline' : 'none'}`}}>On Job Shadow Day</Link>
            <Link to="/job-shadow/forms" style={{textDecoration: `${selectedLink==='/forms' ? 'underline' : 'none'}`}}>Forms</Link>
            <Link to="/job-shadow/contact-us" style={{textDecoration: `${selectedLink==='/contact-us' ? 'underline' : 'none'}`}}>Contact Us</Link>
        </aside>
    )
}

export default JobShadowSideBar