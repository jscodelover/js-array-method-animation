import { createGlobalStyle } from 'styled-components';
import theme from './theme';

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
        margin: 0;
        font-family: 'TT Norms', -apple-system, BlinkMacSystemFont, 'Segoe UI',
            'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-variant: none;
        font-size: 14px;
        line-height: 1.4;
        background: ${theme.colors.white};
        text-size-adjust: auto;
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
        &::-webkit-scrollbar {
            width: 0 !important;
        }
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }

    /* react-select */

    .customSelect {
        &__control {
            width: 150px;
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
            width: 150px !important;
            background-color: transparent !important;
            color: ${theme.colors.white};
            box-shadow: 0 0 0 1px hsl(0, 0%, 0%), 0 4px 11px hsl(0, 0%, 0%) !important;
        }
        &__option {
            text-align: center;
            &--is-focused {
                background-color: #0606064a !important;
            }
            &--is-selected {
                background-image: linear-gradient(to right, #defb7d, ${
									theme.colors.secondaryColor
								}, ${theme.colors.ternaryColor});
            }
        }
        &__indicator {
            svg {
                color: ${theme.colors.white};
            }
        }
        &__single-value,
        &__placeholder {
            color: ${theme.colors.white} !important;
            font-weight: 600;
        }
    }
`;

export default GlobalStyle;
