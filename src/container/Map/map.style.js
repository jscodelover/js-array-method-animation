import style from 'styled-components';

const MapStyle = style.div`
    .mapFn-container{
        position: relative;
        .mapFn{
            width: 150px;
            height: 120px;
            background-image: linear-gradient(to right bottom, #5f7dac, #009dd5, #00bed6, #00d8a7, #12eb4d);
            border-radius: 20px;
            margin: 90px auto;    
        }
        & > span{
            color: white;
            position: absolute; 
            top: 50.5px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
`;

export { MapStyle };
