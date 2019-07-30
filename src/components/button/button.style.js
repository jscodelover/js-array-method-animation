import style from 'styled-components';

const ButtonStyle = style.div`
    display: inline-block;
    .btn{
        background-image: linear-gradient(to right,#f85314, #97ba62, #0b7e91);
        color: #fff;
        padding: 6px 18px;
        font-size: 18px;
        font-weight: 800;
        min-width: 114px;
        border-radius: 6px;
        cursor: pointer;
        &:focus{
            outline: none;
            box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 1px, rgba(0, 0, 0, 0.78) 2px 2px 4px 0px;
        }
        &:hover{
            box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 1px, rgba(0, 0, 0, 0.78) 2px 2px 4px 0px;
        }
    }
    .btn-a{
        webkit-background-clip: text;
        color: transparent;
        border-radius: 0;
        border-bottom: 1px solid;
    }
`;

export { ButtonStyle };
