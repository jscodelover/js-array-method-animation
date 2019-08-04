import style from 'styled-components';
import theme from 'styled-theming';
import defaultTheme from '../../style/themes';

const colorbtn = theme('mode', {
	light: 'rgba(0, 0, 0, 0)',
	dark: 'rgba(255, 255, 255, 255)'
});

const shadow2 = theme('mode', {
	light: defaultTheme.colors.black1,
	dark: 'rgba(255,255,255,0.8)'
});

const shadow3 = theme('mode', {
	light: 'rgba(0, 0, 0, 0.58)',
	dark: 'rgba(255, 255, 255, 0.58)'
});

const ButtonStyle = style.div`
    display: inline-block;
    .btn{
        background-image: linear-gradient(to right, ${
					defaultTheme.colors.primaryColor
				}, ${defaultTheme.colors.secondaryColor});
        color: rgb(52, 70, 51);
        padding: 6px 18px;
        font-size: 18px;
        font-weight: 800;
        min-width: 114px;
        border-radius: 6px;
        cursor: pointer;
        letter-spacing: 0.03em;
        border: 1px solid ${colorbtn};
        font-family: "Nunito Sans", sans-serif;
        &:hover{
            box-shadow: ${colorbtn} 0px 0px 0px 1px, ${shadow2} 2px 2px 4px 0px;
        }
        &:active{
            box-shadow: ${colorbtn} 0px 0px 0px 1px, ${shadow3} 2px 2px 2px 0px;
        }
    }
    .btn-a{
        webkit-background-clip: text;
        color: transparent;
        border-radius: 0;
        border-bottom: 1px solid;
    }
`;

export { ButtonStyle };
