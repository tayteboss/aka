import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import caja from '../assets/fonts/Cajatype-Regular.ttf';
import monumentReg from '../assets/fonts/MonumentGrotesk-Regular.otf';
import monumentMed from '../assets/fonts/MonumentGrotesk-Medium.otf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Cajatype-Regular';
        src: url(${caja});
    };
    @font-face {
        font-family: 'MonumentGrotesk-Regular';
        src: url(${monumentReg});
    };
    @font-face {
        font-family: 'MonumentGrotesk-Medium';
        src: url(${monumentMed});
    };

    body, html, #root {
        height: 100%;
        scroll-behavior: smooth;
    }

    body {
        background: black;
        margin: 0;
        font-size: ${theme.size.p};
        color: ${theme.colours.darkNavy};
        font-family: ${theme.fonts.MonumentReg};
        -webkit-font-smoothing: antialiased;
        cursor: none;

        &.no-scroll {
            overflow: hidden;
        }
    }
    a {
        color: ${theme.colours.darkNavy};
        text-decoration: none;
    }
    a, button { cursor: pointer }

    html, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, figure, footer, header, menu, nav, section, time, mark, audio, video, details, summary {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font-weight: normal;
        vertical-align: baseline;
    }

    main, article, aside, figure, footer, header, nav, section, details, summary {display: block;}

    html {
        box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    /* force a vertical scrollbar to prevent a jumpy page */
    html {overflow-y: scroll;}

    a {margin: 0; padding: 0; font-size: 100%; vertical-align: baseline; background: transparent;}

    /* Webkit browsers add a 2px margin outside the chrome of form elements */
    button, input, select, textarea {margin: 0;}

    p {
        font-family: 'MonumentGrotesk-Regular';
        font-size: ${theme.size.p};
        color: ${theme.colours.darkNavy};
        margin: 0 0 32px 0;

        @media ${theme.mediaBreakpoints.tablet} {
            font-size: 18px;
            line-height: 1.2;
        }
        @media ${theme.mediaBreakpoints.mobile} {
            font-size: 18px;
            line-height: 1.2;
        }
    }

    h4 {
        font-family: 'MonumentGrotesk-Medium';
        font-size: ${theme.size.h4};
        color: ${theme.colours.darkNavy};
        margin: 0;

        @media ${theme.mediaBreakpoints.tablet} {
            font-size: 18px;
            margin-bottom: 5px;
        }
        @media ${theme.mediaBreakpoints.mobile} {
            font-size: 18px;
            margin-bottom: 5px;
        }
    }

    ul {
        list-style-type: none;
        li {
            font-family: 'MonumentGrotesk-Regular';
            font-size: ${theme.size.p};
            color: ${theme.colours.darkNavy};
            margin: 0;

            @media ${theme.mediaBreakpoints.tablet} {
                font-family: 'MonumentGrotesk-Medium';
                font-size: 18px;
            }
            @media ${theme.mediaBreakpoints.mobile} {
                font-family: 'MonumentGrotesk-Medium';
                font-size: 18px;
            }
        }
    }

    a {
        text-decoration: underline;

        &:hover {
            font-style: italic;
            cursor: none;
        }
    }

    #fluid-scroll-viewport {
        /* height: 0 !important; */
    }

    .cursor {
        width: 20px;
        height: 20px;
        border: 2px solid ${theme.colours.darkNavy};
        border-radius: 100%;
        position: fixed;
        transform: translate(-50%, -50%);
        pointer-events: none;
        transition: all 150ms ease;
        transition-property: background-color, opacity, transform, mix-blend-mode;
        z-index: 9999;
        mix-blend-mode: difference;
    }

    .cursor--hidden {
        opacity: 0;
    }

    .cursor--link-hovered {
        transform: translate(-50%, -50%) scale(2);
        background-color: ${theme.colours.darkNavy};
    }

    .cursor--clicked {
        transform: translate(-50%, -50%) scale(0.8);
        background-color: ${theme.colours.darkNavy};
    }

    ::selection {
        background: ${theme.colours.lightGray};
    }
    ::-moz-selection {
        background: ${theme.colours.lightGray};
    }

    .arrow {
        display: flex;
        align-items: center;
    }

    button:focus {outline:0;}

    canvas { outline: none; border: none; }
`
export default GlobalStyle;
