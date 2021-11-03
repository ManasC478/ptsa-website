import React from 'react';

// import images
import FHSLogo from '../../public/images/fhs-logo.png';
import FHSMascot from '../../public/images/fhs-mascot.jpg';
import PTSALogo from '../../public/images/ptsa-logo.png';

// import css
import './style.css'

const PrimaryBar = () => {
    return (
        <nav className="primary-nav-container">
            <div className="primary-nav">
                <img src={FHSLogo} alt="Fremont High School" className="primary-nav-img" />
                <img src={PTSALogo} alt="PTA" className="primary-nav-img" />
                <img src={FHSMascot} alt="Firebirds" className="primary-nav-img" />
            </div>
        </nav>
    )
}

export default PrimaryBar
