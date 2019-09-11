import style from 'styled-components';
import theme from 'styled-theming';

const bgColor = theme('mode', {
	light:
		'linear-gradient(to right top,rgb(214, 214, 214),rgb(255,255,255),rgb(214, 214, 214))',
	dark:
		'linear-gradient(to right top, #717175, #605e62, #504b4e, #3f3a3b, #2f2929)'
});
const color = theme('mode', {
	light: '#282936',
	dark: '#fff'
});
const shadow = theme('mode', {
	light: '#0000001c',
	dark: '#fbf5f51c'
});

const AnimationContainer = style.div`
    background: ${bgColor};
    padding: 20px 20px 40px;
    width: 100%;
    box-shadow: 0px 2px 20px 0px ${shadow};
    border-radius: 4px;
    position: relative;
`;

const AnimateBtn = style.button`
    position: relative;
    margin-bottom: 20px;
    margin-left: 15px;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    background: transparent;
    width: 128px;
    .circle {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: relative;
        margin: 0;    
        width: 31px;
        height: 31px;
        background: #282936;
        border-radius: 24px;
        .icon {
            transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto;
            background: #fff;
        }
        .arrow {
            transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            left: 2px;
            width: 18px;
            height: 1px;
            background: none;
            &:before {
                position: absolute;
                content: '';
                top: -4.2px;
                right: 1.5px;
                width: 10px;
                height: 10px;
                border-top: 1px solid #fff;
                border-right: 1px solid #fff;
                transform: rotate(45deg);
              }
        }
    }
    .button-text {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 6px 0;
        margin: 0 0 0 31px;   
        font-size: 15px; 
        color: ${color};
        text-align: center;
        text-transform: uppercase;
    }
    &:hover{
        .circle {
            width: 100%;
            .arrow {
                background: #fff;
                transform: translate(1rem, 0);
            }
        }
        .button-text {
            color: #fff;
        }
    }
`;

export { AnimationContainer, AnimateBtn };
