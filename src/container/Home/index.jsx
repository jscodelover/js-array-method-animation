import React from 'react';
import { HomeStyle } from './home.style';
import Button from '../../components/button';

function Home(){
    const svg = (
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
    )
    return(
        <HomeStyle>
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
       </HomeStyle>
    );
}

export default Home;