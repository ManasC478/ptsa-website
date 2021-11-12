import React from 'react';
import { useLocation } from 'react-router';
import { parsePathnameForPage } from '../../utils';

// import components
import JobShadowSideBar from './components/JobShadowSideBar';
import JobShadowOverview from './components/JobShadowOverview';
import ExploreJobs from './components/ExploreJobs';
import ShadowDay from './components/ShadowDay';
import Forms from './components/Forms';
import ContactUs from './components/ContactUs';
import StudentRegistration from './components/StudentRegistration';
import HostRegistration from './components/HostRegistration';

// import css
import './style.css';

const JobShadow = ({ match }) => {
    const location = useLocation();

    let pageType;
    switch (parsePathnameForPage(location.pathname, 2)) {
        case '/overview':
            pageType = JobShadowOverview;
            break;
        case '/explore-jobs':
            pageType = ExploreJobs;
            break;
        case '/shadow-day':
            pageType = ShadowDay;
            break;
        case '/forms':
            pageType = Forms;
            break;
        case '/contact-us':
            pageType = ContactUs;
            break;
        case '/student-registration':
            pageType = StudentRegistration;
            break;
        case '/host-registration':
            pageType = HostRegistration;
            break;
    }
    
    return (
        <main className="job-shadow-container">
            <div className="job-shadow">
                <JobShadowSideBar />
                {pageType()}
            </div>
        </main>
    )
}

export default JobShadow