import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import { SubHeaderStyle } from './subheader.style';
import Button from '../button';

function SubHeader(props){
    const routes = ['/filter', '/map', '/find', '/findindex', '/reduce', '/sort'];
    const [ route, handleRoute ] = useState(routes.findIndex(item => item === props.location.pathname));
    useEffect(()=>{
        props.history.push(routes[route]);
    },[route]);
    const svg = (
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
    )
    return(
        <SubHeaderStyle>
            <div className="btn-container">
                <div className="btn-previous"> 
                    {svg}  
                    <Button type="btn" fn={() => handleRoute(route < 1 ? 0 : route - 1)}>
                        Previous
                    </Button>
                </div>
                <div className="btn-next">
                    <Button type="btn" fn={() => handleRoute(route === routes.length-1 ? routes.length-1 : route + 1)}> 
                        Next
                    </Button>
                    {svg}
                </div>
            </div>
       </SubHeaderStyle>
    );
}

export default withRouter(SubHeader);