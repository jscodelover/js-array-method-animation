import style from 'styled-components';
import theme from 'styled-theming';
import defaultTheme from '../../style/themes';

const bgColor = theme('mode', {
	light: '#fff',
	dark: '#000'
});

const svgFill = theme('mode', {
	light: '#000',
	dark: '#fff'
});

// const bgColorBackdrop = theme('mode', {
// 	light: 'rgba(0,0,0,0.8)',
// 	dark: 'rgba(255,255,255,0.8)'
// });

const NavStyle = style.nav`
    position: fixed;
    top: 0px;
    width: 100%;
    height: 50px;
    padding: 6px 80px;
    z-index: 10;
    ul{
        text-align: right;
        list-style: none;
        display: flex;
        flex-direction: row;
        align-items: baseline;    
        justify-content: flex-end;
        li{
            color: ${defaultTheme.colors.white};
            font-weight: 600;
            cursor: pointer;
            &:nth-child(2){
                margin-left: 15px;
                margin-right: 15px;
            }
            .theme-btn{
                padding: 3px 5px;
                border-radius: 50%;
                cursor: pointer;
                margin-left: 23px;
                background-color: ${bgColor};
                svg{
                    width: 15px;
                    height: 15px;
                    fill: ${svgFill};
                }
            }
        }
    }
    .menu-btn{
        width: 38px;
        height: 38px;
        cursor: pointer;
        margin-left: -65px;
        background-color: transparent;
        img{
            width: inherit;
            height: inherit;
        }
    }
`;

const SideBar = style.div`
    nav{
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 0;
        width: unset;
        height: unset;
        ul{
            flex-direction: column;
            justify-content: center;
            li{
                width: 100%;
                text-align: center;
                font-size: 20px;
                &:nth-child(2){
                    margin: 15px 0px;
                }
                .customSelect{
                    &__control{
                        width: 190px;
                    }
                    &__menu {
                        width: 190px !important;
                        background-color: #525252 !important;
                    }   
                }
            }
        }
    }
`;

const BackDrop = style.div`
    position: fixed;
    background-color: rgba(0,0,0,0.8);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
`;

export { NavStyle, SideBar, BackDrop };
