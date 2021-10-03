import style from 'styled-components';

const HomeStyle = style.div`
    font-size: 17px;

    .color{
        &:not(:first-of-type){
            padding-left: 5px;
        }
        &-1{
            color:#f38630;
        }
        &-2{
    
            color:#E87577;
        }
        &-3{
    
            color:#D73739;
        }
        &-4{
    
            color:#6fb936;
        }
        &-5{
    
            color:#B3A3B5;
        }
    }

    .start-btn{
        text-align: center;
        button{
            padding: 12px 18px;
            font-size: 18px;
            border-radius: 4px;
            cursor: pointer;
        }
    }
`;

export { HomeStyle };
