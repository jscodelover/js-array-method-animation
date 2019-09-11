import style from 'styled-components';

const BlockStyle = style.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: ${props => props.marginTop};
    position: relative;
    .box{
        position: relative;
        visibility: ${props => props.visibility || 'visible'};
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
        & > span{
            position: absolute;
            bottom: 1px;
            font-family: 'Roboto';
        }
    }
`;

export default BlockStyle;
