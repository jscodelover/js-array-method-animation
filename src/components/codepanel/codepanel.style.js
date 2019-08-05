import style from 'styled-components';
import theme from 'styled-theming';
import defaultTheme from '../../style/themes';

const textColor = theme('mode', {
	light: defaultTheme.colors.white,
	dark: defaultTheme.colors.black
});

const bgColor = theme('mode', {
	light: defaultTheme.colors.black,
	dark: defaultTheme.colors.white
});

const borderShadow = theme('mode', {
	light: 'rgba(0,0,0,.5)',
	dark: 'rgba(255,255,255,.3)'
});

const CodePanelStyle = style.div`
    background-color: ${bgColor};
    color: ${textColor};
    margin: 10px 50px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 2px 2px 13px 1px ${borderShadow};
    & > div{
        line-height: 22px;
        letter-spacing: 0.03em;
    }
    @media (max-width: 628px){
        padding: 10px;
        margin: 10px 30px;
    }
`;

export { CodePanelStyle };
