import style from 'styled-components';

const Block = style.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: ${props => props.marginTop};
    position: relative;
    height: 50px;
    & > div{
        font-size: ${props => props.fontSize || 10}px;
        padding-left: ${props => props.paddingLeft};

    visibility: ${props => props.visibility || 'visible'};s
    }
`;

const Box = style.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    padding: 2px;
    border-radius: 4px;
    background-color: ${props => props.backgroundColor};
    color: #000;
    & > span{
        position: absolute;
        bottom: 1px;
        font-family: 'Roboto';
    }
`;

const BlockStyle = style.div.attrs({
	className: props => props.className || ''
})`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: ${props => props.marginTop};
    position: relative;
    & > div{
        font-size: ${props => props.fontSize || 10}px;

    visibility: ${props => props.visibility || 'visible'};s
    }
    .box{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        padding: 2px;
        border-radius: 4px;
        background-color: ${props => props.backgroundColor};
        & > span{
            position: absolute;
            bottom: 1px;
            font-family: 'Roboto';
    }
    }
`;

export default BlockStyle;
export { Block, Box };
