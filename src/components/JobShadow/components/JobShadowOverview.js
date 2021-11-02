import React, { useState } from 'react';

// import images
import Image1 from '../../../public/images/1.jpg';
import Image2 from '../../../public/images/2.jpg';
import Image3 from '../../../public/images/3.jpg';
import Image4 from '../../../public/images/4.jpg';

// import material icons
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const imageList = [Image1, Image2, Image3, Image4];
const JobShadowOverview = () => {
    const [x, setX] = useState(0);

    const goLeft = () => {
        x === 0 ? setX(-100 * 3) : setX(x + 100);
    }

    const goRight = () => {
        x === -100 * 3 ? setX(0) : setX(x - 100);
    }

    return (
        <section className="job-shadow-overview">
            {/* <figure className="job-shadow-carousel">
                {
                    imageList.map((image, index) => {
                        return (
                            <img key={index} src={image} alt="not found" style={{ transform: `translateX(${x}%)` }} />
                        );
                    })
                }
                <button id="go-left-btn" onClick={goLeft}><KeyboardArrowLeftIcon /></button>
                <button id="go-right-btn" onClick={goRight}><KeyboardArrowRightIcon /></button>
            </figure> */}
            <h2>What is Job Shadow?</h2>
            <p>The Fremont High School Job Shadow Program is developed to help Freshman, Sophomores, Juniors and Seniors explore and experience career possibilities by matching with businesses, government agencies and individuals.</p>
            <br />
            <p>Job Shadowing is an experience where students spend a day or less for a practical exposure to a particular career or even to the work of work in general. This program is sponsored by PTSA and is free for all students.</p>
            <br />
            <h2>How does it work?</h2>
            <p>Students will sign up and provide their job preferences. Their preference will be matched with a hosting company. Students will be  given an opportunity to report to a company for a day “Job Shadow Day” to learn about particular occupation or business / industry without actually being involved in an employer-employee, in-depth, hands on / production relationship.</p>
            <br />
            <h2>What is a Typical Job Shadow Day?</h2>
            <ul className="typical-day-list">
                <li>Sit in on a meeting</li>
                <li>Observe a project in motion</li>
                <li>Take a tour of the facility or campus</li>
                <li>Meet other co-workers</li>
                <li>Lunch</li>
                <li>Do an actual hands on project</li>
                <li>Q & A Session</li>
            </ul>
        </section>
    )
}

export default JobShadowOverview
