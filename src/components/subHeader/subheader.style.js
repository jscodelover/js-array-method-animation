import style from 'styled-components';
import theme from 'styled-theming';
import defaultTheme from '../../style/themes';

const svgFill = theme('mode', {
	light: defaultTheme.colors.black,
	dark: defaultTheme.colors.white
});

const SubHeaderStyle = style.div`
    margin-bottom: 50px;
    .btn-container{
        display: flex;
        justify-content: space-evenly;
        .btn-previous, .btn-next{
            display: flex;
            align-items: center;
            svg{
                fill: ${svgFill};
            }
        }
        .btn-next{
            svg{
                margin-left: 10px;
            }
        }
        .btn-previous{
            svg{
                margin-right: 10px;
                transform: rotate(180deg);
            }
        }
    }
    @media (max-width: 628px){
        margin: 70px 5%;
    }
`;

export { SubHeaderStyle };
