export const parsePathnameForPage = (pathname, index) => {
    return `/${pathname.split('/')[index]}`;
}