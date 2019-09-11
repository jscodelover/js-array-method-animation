import style from 'styled-components';

const FindStyle = style.div`
    .right-block, .wrong-block{
        opacity: 1 !important;
        transform: matrix(1, 0, 0, 1, 0, 0) scale(1) !important;
    }
    .wrong-block{
        background-image: linear-gradient(to right top, #690809, #840c13, #a10f1b, #bf1125, #de122f);
        font-size: 28px !important;
        color: white; 
    }
`;

export { FindStyle };
