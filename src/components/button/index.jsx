import React from 'react';
import { ButtonStyle } from './button.style';

function Button(props){
    const {type, children, refLink} = props;
    function getButton(){
        switch(type){
            case 'btn': return <button type="button" className="btn ">{children}</button>
            case 'a': return <a href={refLink}className="btn btn-a">{children}</a>
            default: return <button type="button" className="btn ">{children}</button>
        }
    }
    return (
        <ButtonStyle>
            {getButton()}
        </ButtonStyle>
    )
}

export default Button;