import React from 'react';

const ExploreJobs = () => {
    return (
        <section className="explore-jobs">
            <p>Below are the sample job categories available to explore.</p>
            <br />
            <table className="job-opportunities">
                <thead>
                    <tr>
                        <th><h2>Category</h2></th>
                        <th><h2>Sub Categories</h2></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Arts, Media, and Communication</td>
                        <td>Acting/Drama, Fashion designer, Photography, Journalism, Advertising/Marketing…</td>
                    </tr>
                    <tr>
                        <td>Business and Information Systems</td>
                        <td>Hardware /Systems Engineer, Software Engineer/Developer/Analyst, Realtor, Financial services...</td>
                    </tr>
                    <tr>
                        <td>HW Engineering / Industrial Technology</td>
                        <td>Airline Pilot, Architect,Civil Engineering, Electrical / Electronics...etc.</td>
                    </tr>
                    <tr>
                        <td>Health Care Services </td>
                        <td>Chiropractor, Dentist, Speech Therapist, Doctor, Physicist....</td>
                    </tr>
                    <tr>
                        <td>Natural Resources and Environment</td>
                        <td>Astronomer, Park Ranger, Vet.....</td>
                    </tr>
                    <tr>
                        <td>Social, Human, and Public Services</td>
                        <td>Teacher, Firefighter, Lawyer, Travel Agent, Hospitality.....</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <p>And more....</p>
        </section>
    )
}

export default ExploreJobs