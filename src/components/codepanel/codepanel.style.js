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
    margin: 10px auto;
    padding: 30px;
    width: calc(100% - 100px);
    border-radius: 10px;
    box-shadow: 2px 2px 13px 1px ${borderShadow};
    font-family: 'Fira Code', monospace;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    .wrapper{
        width: 100vw;
        vertical-align: middle;
        & > div{
            line-height: 22px;
            &:not(:first-of-type):not(:last-of-type){
                margin: 15px 0px;
            }
            &:nth-child(2), &:nth-child(3){
                & > p:not(:last-of-type):not(:first-of-type){
                    margin-left: 35px;
                }
            }
            & > p:not(:last-of-type):not(:first-of-type){
                margin-left: 25px;
            }
            @media (max-width: 628px){
                letter-spacing: -0.4px;
            }
        }
        .or{
            margin: 10px 0px;
        }
    }
    @media (max-width: 628px){
        padding: 20px;
        margin: 10px 0px;
        width: 100%;
    }
`;

export { CodePanelStyle };
