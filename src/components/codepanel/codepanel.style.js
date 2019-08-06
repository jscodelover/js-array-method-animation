import style from 'styled-components';
import theme from 'styled-theming';
import defaultTheme from '../../style/themes';

const textColor = theme('mode', {
	light: defaultTheme.colors.white,
	dark: defaultTheme.colors.black
});

const bgColor = theme('mode', {
	light: 'linear-gradient(45deg, rgba(41, 39, 39, 0.88) , rgb(41, 38, 38))',
	dark:
		'linear-gradient(45deg, rgb(226, 223, 223), rgba(255,255,255,1), rgb(214, 207, 207))'
});

const borderShadow = theme('mode', {
	light: 'rgba(0,0,0,.5)',
	dark: 'rgba(115, 115, 115, 0.63)'
});

const CodePanelStyle = style.div`
    background-image: ${bgColor};
    color: ${textColor};
    margin: 10px 50px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 2px 2px 13px 1px ${borderShadow};
    font-family: 'Fira Code', monospace;
    & > div{
        line-height: 22px;
    }
    @media (max-width: 628px){
        padding: 10px;
        margin: 10px 30px;
    }
`;

export { CodePanelStyle };
