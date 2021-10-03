import style from 'styled-components';

const MapStyle = style.div`
    .mapFn-container{
        position: relative;
        .mapFn{
            width: 150px;
            height: 120px;background-image: linear-gradient(to right top,#053046,#085570,#057d9b,#00a8c4,#12d5eb);
            border-radius: 20px;
            margin: 90px auto 0px;    
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
