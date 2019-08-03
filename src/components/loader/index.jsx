import React from 'react';
import LoaderStyle from './loder.style';

function Loader(){
    return(
        <div className="backdrop">
            <LoaderStyle>
                <div className="loader" />
                <div className="msg">Loading...</div>
            </LoaderStyle>   
        </div> 
    )
}

export default Loader;