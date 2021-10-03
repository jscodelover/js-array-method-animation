import { createGlobalStyle } from 'styled-components';
import theme from 'styled-theming';
import defaultTheme from './themes';

const fontColor = theme('mode', {
	light: defaultTheme.colors.black2,
	dark: defaultTheme.colors.white
});

const bgColor = theme('mode', {
	light: defaultTheme.colors.white,
	dark: defaultTheme.colors.black2
});

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        min-width: 768px;
        font-family: 'Nunito', sans-serif;
        font-size: 14px;
        line-height: 1.4;
        background-color: ${bgColor};
        color: ${fontColor};

        text-size-adjust: auto;
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
        &::-webkit-scrollbar {
            width: 0 !important;
        }
    }

    button:focus{
        outline: none;
    }

    .backdrop{
        position: fixed;
        background-color: rgba(0,0,0,0.8);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9;
    }

    .app-container{
        margin: 70px 17%;
        @media (max-width: 1200px){
            margin-left: 10%;
            margin-right: 10%;
        }
    }

    .linkRouter{
        text-decoration: none;
        color: inherit;
        width: 100%;
        display: inline-block;
    }

    h1{
        font-size: 1.8rem;
        font-weight: 500;
        text-decoration: underline;
        text-align: center;
        margin: 0 0 50px;
        padding-top: 50px ;
    }

    a{
        text-decoration: none;
        color:inherit;
        cursor: pointer;
    }

    p{
        margin: 15px 0;
        font-size: 20px;
        line-height: 35px;
    }

    em{
        font-style: italic;
        font-weight: 300;
    }

    strong{
        font-weight: 700;
    }

    .d-none{
        display: none !important;
    }

    .disable-animate-btn{
        pointer-events: none;
        & .circle{
            background: #8b8c90 !important;
        }
        & .button-text{
            color: #8b8c90 !important;
        }
    }

    .mb-140{
        margin-bottom: 140px !important;
    }

    /* react-select */

    .customSelect {
        &__control {
            width: 170px;
            background-color: transparent !important;
            text-overflow: ellipsis;
            border-color: transparent !important;
            box-shadow: none !important;
            cursor: pointer;
            &--menu-is-open:hover {
                border-color: #6d6c6c82 !important;
                box-shadow: none;
            }
        }

        &__menu {
            margin-top: 1px !important;
            width: 170px !important;
            background-image: linear-gradient(to right, #94999c, #2c3e50) !important;
            color: ${defaultTheme.colors.white};
            box-shadow: 0 0 0 1px hsl(0, 0%, 0%), 0 4px 11px hsl(0, 0%, 0%) !important;
        }
        &__option {
            text-align: center;
            &--is-focused {
                background-color: #0606064a !important;
            }
            &--is-selected {
                background-image: linear-gradient(to right, #dcddde, #6d7986);
            }
        }
        &__indicator {
            svg {
                color: ${defaultTheme.colors.white};
            }
        }
        &__single-value,
        &__placeholder {
            color: ${defaultTheme.colors.white} !important;
            font-weight: 600;
        }
    }
`;

export default GlobalStyle;
