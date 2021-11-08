import React from 'react';

// import material ui icons
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const HostRegistration = () => {
    return (
        <section className="host-registration">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScmHI_e8cGowfmeEsjNtfxclFOVU0AVekrZTtnSWKn9yWRPCg/viewform?vc=0&c=0&w=1&flr=0"></iframe>
            <a id="open-form-new-window" href="https://docs.google.com/forms/d/e/1FAIpQLScmHI_e8cGowfmeEsjNtfxclFOVU0AVekrZTtnSWKn9yWRPCg/viewform?vc=0&c=0&w=1&flr=0" target="_blank" rel="noopener noreferrer"><OpenInNewIcon /></a>
        </section>
    )
}

export default HostRegistration
