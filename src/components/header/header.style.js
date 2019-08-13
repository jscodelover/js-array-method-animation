import style from 'styled-components';
import defaultTheme from '../../style/themes';

const HeaderStyle = style.div`
    height: 90vh;
    position: relative;
    clip-path: polygon(0 0, 0 80%, 50% 100%, 100% 80%, 100% 0);
    .image-overlay{
        position: fixed;
        height: 90vh;
        top: 0;
        left: 0;
        right: 0;
        background-image: linear-gradient(45deg, #27262659, #211c1c42);
    }
    .image-header{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .heading{
        position: absolute;
        top: 46%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 80px;
        font-family: "Merriweather";
        font-weight: 800;
        letter-spacing: 0.05em;
        line-height: 1.1em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &__text{    
            position: relative;
            text-shadow: 6px 2px 0px rgb(35, 34, 34);
            color: ${defaultTheme.colors.white};
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
            font-size: 70px;
        }
    }
`;

export { HeaderStyle };
