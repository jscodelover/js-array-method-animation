import style from 'styled-components';

const MapStyle = style.div`
    .mapFn-container{
        position: relative;
        .mapFn{
            width: 150px;
            height: 150px;
            background-image: linear-gradient(to right bottom, #5f7dac, #009dd5, #00bed6, #00d8a7, #12eb4d);
            border-radius: 20px;
            margin: 150px auto;    
        }
        & > span{
            color: white;
            position: absolute; 
            top: 66px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
`;

export { MapStyle };
