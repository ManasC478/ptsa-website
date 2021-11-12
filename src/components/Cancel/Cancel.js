import React from 'react';
import { Link } from 'react-router-dom';

// import css file
import './style.css';

// import images
import FHSLogo from '../../public/images/fhs-logo-2.png';
import PTSALogo from '../../public/images/ptsa-logo-2.jpeg';

const Cancel = () => {
    return (
        <section className="cancel">
            <h1 id="transaction-canceled">Your transaction is now canceled!</h1>
            <br />
            <p>You can now browse back to our <Link to="/">donation page</Link> or close this window.</p>
        </section>
//         <div>
//             <body data-new-gr-c-s-check-loaded="14.1038.0" data-gr-ext-installed="" class="vsc-initialized" data-new-gr-c-s-loaded="14.1038.0">
// <h1 style="text-align: center;"><span style="font-family:arial,helvetica,sans-serif;"><img alt="" src="https://fremontptsa.org/files/fhslogo.png" style="width: 300px; height: 100px; float: left;"></span></h1>

// <h1 style="text-align: center;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<img alt="" src="https://fremontptsa.org/files/logoptsa.jpg" style="width: 190px; height: 60px;"></h1>

// <h1 style="text-align: center;"></h1>

// <h1><span style="font-family:arial,helvetica,sans-serif;">Your transaction is now canceled!</span></h1>

// <p></p>

// <p></p>

// <p><span style="font-size:28px;"><span style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 15.4821px; text-align: center; background-color: rgb(250, 251, 252);">You can now browse back to our <a href="https://fremontptsa.org">donation page</a>&nbsp;</span></span></p>

// <p></p>

// <p></p>

// <p></p>

// <p><span style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 15.4821px; text-align: center; font-size: 28px; background-color: rgb(250, 251, 252);">or close this window.</span></p>

// <p></p>

// <p></p>


// </body>
//         </div>
    )
}

export default Cancel
