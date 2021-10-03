import style from 'styled-components';
import defaultTheme from '../../style/themes';

const HeaderStyle = style.div`
    height: 70vh;
    position: relative;
    .image-header{
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter:  contrast(0.9) opacity(0.9) brightness(0.7);
    }
    .heading{
        position: absolute;
        top: 46%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 80px;
        font-family: 'Karla', sans-serif;
        font-weight: 800;
        letter-spacing: 0.05em;
        line-height: 1.1em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &__text{    
            position: relative;
            text-shadow: 11px -2px 5px rgb(28 28 28);
            color: ${defaultTheme.colors.white};
            display: inline-block;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 0.3em;

            &--1{
                top: -70%;
            }
            &--2{
                right: -200%
            }
            &--3{
                transform: translateY(100px);
                bottom: -10%;
                opacity: 0;
            }
        }
        @media(max-width: 1024px){
            font-size: 70px;
        }
        @media(max-width: 628px){
            font-size: 50px;
        }
    }
`;

export { HeaderStyle };
