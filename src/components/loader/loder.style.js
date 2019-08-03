import style, { keyframes } from 'styled-components';

const load = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
`;

const Loader = style.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-20%, -50%);
    .msg{
        margin-top: 20px;
        margin-left: -40px;  
        font-size: 23px;  
        color: #fff;
        @media (max-width: 628px){
            margin-left: -23px;  
            font-size: initial;
        }
    }
    .loader{
        &,
        &:before,
        &:after {
            background: #fff;
            animation-duration: 1s;
            animation-name: ${load};
            animation-timing-function: ease-in-out;    
            animation-iteration-count: infinite;
            width: 1em;
            height: 4em;
        }
        text-indent: -9999em;
        color: #fff;
        position: relative;
        transform: translateZ(0);
        animation-delay: -0.16s;

        &:before,
        &:after {
            position: absolute;
            top: 0;
            content: '';
        }
        &:before {
            left: -1.5em;
            animation-delay: -0.32s;
        }
        &:after {
            left: 1.5em;
        }
        @media (max-width: 628px){
            font-size: 11px;
        }
    }
`;

export default Loader;
