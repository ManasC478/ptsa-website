export const parsePathnameForPage = (pathname, index) => {
    return `/${pathname.split('/')[index]}`;
}

export const getDocumentTitle = (pathname) => {
    switch (pathname) {
        case '/':
            return 'Welcome to Fremont High School PTSA';
        case '/job-shadow/overview':
            return 'Fremont High PTSA Job Shadow: Overview';
        case '/job-shadow/explore-jobs':
            return 'Fremont High Job Shadow: Explore Jobs';
        case '/job-shadow/host-registration':
            return 'Fremont High Job Shadow: Host Registration';
        case '/job-shadow/student-registration':
            return 'Fremont High Job Shadow: Student Registration';
        case '/job-shadow/shadow-day':
            return 'Fremont High Job Shadow: Student Registration';
        case '/job-shadow/forms':
            return 'Fremont High Job Shadow: Forms';
        case '/job-shadow/contact-us':
            return 'Fremont High Job Shadow: Contact Us';
        case '/about-us':
            return 'About Fremont High School PTSA';
    }
}