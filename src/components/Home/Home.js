import React from 'react';

// import components
import HomeInfo from './components/HomeInfo';
import Announcements from './components/Announcements';

// import css
import './style.css';


const Home = () => {
    return (
        <main className="home-container">
            <div className="home">
                <HomeInfo />
                <div className="home-divider"></div>
                <Announcements />
            </div>
        </main>
    )
}

export default Home