import React from 'react';

// import material ui icons
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const StudentRegistration = () => {
    return (
        <section className="student-registration">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScwQSEXk1AE18azIXpHq_VXE6UZZNEZmqaTIyhK1lyoDnpGTw/viewform?vc=0&c=0&w=1&flr=0"></iframe>
            <a id="open-form-new-window" href="https://docs.google.com/forms/d/e/1FAIpQLScwQSEXk1AE18azIXpHq_VXE6UZZNEZmqaTIyhK1lyoDnpGTw/viewform?vc=0&c=0&w=1&flr=0" rel="noreferrer" target="_blank"><OpenInNewIcon /></a>
        </section>
    )
}

export default StudentRegistration
