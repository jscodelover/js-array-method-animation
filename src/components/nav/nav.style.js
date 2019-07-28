import style from 'styled-components';

const NavStyle = style.nav`
    position: fixed;
    top: 0px;
    width: 100%;
    height: 50px;
    padding: 6px 30px;
    z-index: 999;
    ul{
        text-align: right;
        list-style: none;
        display: flex;
        flex-direction: row;
        align-items: baseline;    
        justify-content: flex-end;
        li{
            color: #fff;
            font-weight: 600;
            &:nth-child(2){
                margin-left: 15px;
                margin-right: 15px;
            }
        }
    }
`;

export { NavStyle };
