import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// import components
import PublicRoutes from './PublicRoutes';
import PrimaryBar from '../components/NavBars/PrimaryBar';
import SecondaryBar from '../components/NavBars/SecondaryBar';

// import routed components
import Home from '../components/Home/Home';
import AboutUs from '../components/AboutUs/AboutUs';
import JobShadow from '../components/JobShadow/JobShadow';

const Routes = () => {
    return (
        <Router>
            <PrimaryBar />
            <SecondaryBar />
            <Switch>
                <PublicRoutes path="/" exact component={Home} />
                <PublicRoutes path="/job-shadow/:page" exact component={JobShadow} />
                <PublicRoutes path="/about-us" exact component={AboutUs} />
            </Switch>
        </Router>
    )
}

export default Routes
