import style from 'styled-components';

const FindStyle = style.div`
    .reposition-block{
        opacity: 1 !important;
        transform: matrix(1, 0, 0, 1, 0, 0) scale(1) !important; 
    }
    .right-box, .wrong-box{
        & + .icon{
            background-size: 19px;
            height: 23px;
            width: 23px;
            background-repeat: no-repeat;
            margin-top: 15px;
            margin-left: 16px;
        }
        
    }
    .right-box{
        & + .icon{
            background-image: url('/image/success.png');
        }
    }
    .wrong-box{
        & + .icon{
            background-image: url('/image/error.png');
        }
    }
`;

export { FindStyle };
