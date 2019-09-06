import style from 'styled-components';

const ReduceStyle = style.div`
    .reduceFn-container{
        position: relative;
        .reduceFn{
            width: 280px;
            height: 85px;        
            background-image: linear-gradient(to right top, #053046, #085570, #057d9b, #00a8c4, #12d5eb);
            border-radius: 20px;
            margin: 90px auto;    
            & > span{
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
            }
        }
    }
`;

export { ReduceStyle };
