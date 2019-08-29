import style from 'styled-components';

const BlockStyle = style.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    .box{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        padding: 2px;
        border-radius: 4px;
        background-color: #6fb936;
        font-size: ${props => props.fontSize || 10}px;
        &:nth-child(2n){
            background-color: #f38630;
        }
        &:nth-child(3n){
            background-color: #989898;
        }
    }
`;

export default BlockStyle;
