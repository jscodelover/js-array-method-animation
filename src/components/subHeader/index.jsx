import React from 'react';
import { SubHeaderStyle } from './subheader.style';
import Button from '../button';

function SubHeader(){
    const svg = (
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
    )
    return(
        <SubHeaderStyle>
            <div className="btn-container">
                <div className="btn-previous"> 
                    {svg}  
                    <Button type="btn">
                        Previous
                    </Button>
                </div>
                <div className="btn-next">
                    <Button type="btn"> 
                        Next
                    </Button>
                    {svg}
                </div>
            </div>
       </SubHeaderStyle>
    );
}

export default SubHeader;