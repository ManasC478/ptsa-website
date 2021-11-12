import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Routes } from 'react-router-dom';
import { Route } from 'react-router';

// import components
import PublicRoutes from './PublicRoutes';
import PrimaryBar from '../components/NavBars/PrimaryBar';
import SecondaryBar from '../components/NavBars/SecondaryBar';

// import routed components
import Home from '../components/Home/Home';
import AboutUs from '../components/AboutUs/AboutUs';
import JobShadow from '../components/JobShadow/JobShadow';
import Footer from '../components/Footer/Footer';
import Thanks from '../components/Thanks/Thanks';
import Cancel from '../components/Cancel/Cancel';

const Routers = () => {

    return (
        <Router>
            <PrimaryBar />
            <SecondaryBar />
            <Routes>
                {/* <Route {...rest} render={props => <Component {...props} />} /> */}
                <Route path="/" element={<Home />} />
                <Route path="/job-shadow/:page" element={<JobShadow />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/cancel" element={<Cancel />} />
                <Route path="/thanks" element={<Thanks />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default Routers
