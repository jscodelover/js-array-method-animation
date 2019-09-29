import React from 'react';
import { ButtonStyle } from './button.style';

function Button(props){
    const {type, children, refLink, fn} = props;
    function getButton(){
        switch(type){
            case 'btn': return <button type="button" className="btn" onClick={fn}>{children}</button>
            case 'a': return <a href={refLink}className="btn btn-a" onClick={fn}>{children}</a>
            default: return <button type="button" className="btn " onClick={fn}>{children}</button>
        }
    }
    return (
        <ButtonStyle>
            {getButton()}
        </ButtonStyle>
    )
}

export default Button;