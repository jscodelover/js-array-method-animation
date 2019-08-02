import style from 'styled-components';
import theme from '../../style/theme';

const HeaderStyle = style.div`
    height: 80vh;
    background: url("/image/header-bg.jpg") repeat;
    background-size: cover;
    background-position: bottom;
    position: relative;
    clip-path: polygon(0% 0%, 0% 100%, 100% 85%, 100% 0% );
    .heading{
        position: absolute;
        top: 46%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 80px;
        font-family: "Raleway";
        font-weight: 800;
        letter-spacing: 0.05em;
        line-height: 1.1em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &__text{    
            position: relative;  
            background-image: linear-gradient(to right, ${
							theme.colors.primaryColor
						}, ${theme.colors.secondaryColor}, ${theme.colors.ternaryColor});
            text-shadow: 6px 2px 0px ${theme.colors.white};
            -webkit-background-clip: text;
            color: transparent;
            display: inline-block;
            text-align: center;
            &--1{
                top: -70%;
            }
            &--2{
                right: -200%
            }
            &--3{
                transform: translateY(300px);
                bottom: -200%;
            }
        }
        @media(max-width: 628px){
            font-size: 
        }
    }
`;

export { HeaderStyle };
