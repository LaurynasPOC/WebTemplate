export type Colors = keyof typeof colors;

const colors = {
    primary: "#3C7B72",
    secondary: "#799994",
    accent: "#fbffb5",
    basegrey: "#dcdedc",
    white: "#ffffff",
    black: "#000000",
    aisFit: "#E3EADF",
    aisFit2: "#537F70",
};

//breakpoints
type BreakpointsProp<T = string> = {
    _: T;
    smMobile: T;
    mobile: T;
    tablet: T;
    laptop: T;
};

const breakpoints: BreakpointsProp = {
    _: "",
    smMobile: "24rem",
    mobile: "30rem",
    tablet: "48rem",
    laptop: "64rem",
};

export const theme = {
    colors,
    fonts: {
        primary: "Red Hat Display",
    },

    fontSizes: {
        fs72: "4.5rem",
        fs64: "4rem",
        fs56: "3.5rem",
        fs48: "3rem",
        fs40: "2.5rem",
        fs32: "2rem",
        fs24: "1.5rem",
        fs20: "1.25rem",
        fs18: "1.125rem",
        fs16: "1rem",
        fs14: "0.875rem",
        fs12: "0.75rem",
    },
    lineHeights: {
        lh8: "0.5rem",
        lh16: "1rem",
        lh20: "1.25rem",
        lh24: "1.5rem",
        lh28: "1.75rem",
        lh32: "2rem",
    },
    fontWeights: {
        fw400: 400,
        fw500: 500,
        fw600: 600,
        fw700: 700,
        fw900: 900,
    },
    breakpoints,

    radii: {
        none: "0",
        base: "2rem",
        circle: "50%",
        br8: "0.5rem",
        br16: "1rem",
        br40: "2.5rem",
    },

    zIndices: {
        base: 0,
        upperElement: 1,
        modal: 10,
        loader: 11,
    },
    shadows: {
        topShadow: "0px -0.5rem 1.5rem rgba(0, 0, 0, 0.04)",
        bottomShadow: "0px 0.5rem 1.5rem rgba(0, 0, 0, 0.04)",
    },
    typography: {
        h1: {
            //fontsizes
            mobibleFontSize: "4rem",
            tabletFontSize: "4.5rem",
            desktopFontSize: "5rem",
            //lineHeight
            mobileLineHeight: "5.25rem",
            tabletLineHeight: "5.875rem",
            desktopLineHeight: "6.5rem",
            //fontWeight
            fontWeight: 500,
        },
        h2: {
            //fontsizes
            mobibleFontSize: "3.5rem",
            tabletFontSize: "4rem",
            desktopFontSize: "4.5rem",
            //lineheight
            mobileLineHeight: "4.5625rem",
            tabletLineHeight: "5.21rem",
            desktopLineHeight: "5.875rem",
            //fontWeight
            fontWeight: 500,
        },
        h3: {
            //fontsizes
            mobibleFontSize: "1.5rem",
            tabletFontSize: "2rem",
            desktopFontSize: "3rem",
            //lineheight
            mobileLineHeight: "3.25rem",
            tabletLineHeight: "3.9rem",
            desktopLineHeight: "4.5625rem",
            //fontWeight
            fontWeight: 600,
        },
        h4: {
            //fontsizes
            mobibleFontSize: "2rem",
            tabletFontSize: "2.5rem",
            desktopFontSize: "3rem",
            //lineheight
            mobileLineHeight: "2.625rem",
            tabletLineHeight: "3.25rem",
            desktopLineHeight: "3.9375rem",
            //fontWeight
            fontWeight: 600,
        },
        h5: {
            //fontsizes
            mobibleFontSize: "1.625rem",
            tabletFontSize: "2rem",
            desktopFontSize: "2.5rem",
            //lineheight
            mobileLineHeight: "2.125rem",
            tabletLineHeight: "2.685rem",
            desktopLineHeight: "3.25rem",
            //fontWeight
            fontWeight: 600,
        },
        h6: {
            //fontsizes
            mobileFontSize: "1.5rem",
            tabletFontSize: "1.75rem",
            desktopFontSize: "2rem",
            //lineheight
            mobileLineHeight: "2rem",
            tabletLineHeight: "2.3rem",
            desktopLineHeight: "2.625rem",
            //fontWeight
            fontWeight: 600,
        },

        body16: {
            fontSize: "1rem",
            desktopLineHeight: "1.75rem",
            tabletLineheight: "1.5rem",
            mobileLineHeight: "1.2rem",
            fontWeight: 500,
        },

        caption14: {
            fontSize: "0.875rem",
            lineheight: "1rem",
            fontWeight: 500,
        },
        zIndices: {
            base: 0,
            upperElement: 1,
            modal: 10,
            loader: 11,
        },
    },
    space: [] as (string | number)[] | BreakpointsProp<string>,
};

export type Theme = typeof theme;