import style from 'styled-components';

const HeaderStyle = style.div`
    height: 80vh;
    background-image: url('image/background.svg');
    background-size: cover;
    background-position: bottom;
    position: relative;
    .heading{
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 60px;
        font-family: "Raleway";
        font-weight: 800;
        letter-spacing: 0.05em;
        &--text{  
            background: url("https://phandroid.s3.amazonaws.com/wp-content/uploads/2014/05/rainbow-nebula.jpg") repeat;
            background-position: 40% 50%;
            -webkit-background-clip: text;
            color: transparent;
            display: inline-block;
            width: 453px;
            line-height: 81px;
            text-align: center;
        }
    }
`;

export { HeaderStyle };
