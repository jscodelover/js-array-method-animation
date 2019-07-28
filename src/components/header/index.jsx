import React, {useRef, useEffect} from 'react';
import {TweenMax, TimelineLite, Power1} from 'gsap';
import {HeaderStyle } from './header.style';

function Header(){
    const headerRef1 = useRef(null);
    const headerRef2 = useRef(null);
    const headerRef3 = useRef(null);
    useEffect(() => {
        TweenMax.to(headerRef1.current, 1, 
            {top: '0'}
        );
        TweenMax.to(headerRef2.current, 1, 
            {right: '0'}
        ).delay(0.3);
        TweenMax.to(headerRef3.current, 1, 
            {bottom: '0', y: 0}
        ).delay(0.5);    
    })
    return (
        <HeaderStyle>
            <div className="heading">
                <span className="heading__text heading__text--1"  ref={headerRef1}>Animate</span>  
                <span className="heading__text heading__text--2"  ref={headerRef2}>Array</span>
                <span className="heading__text heading__text--3"  ref={headerRef3}>Methods</span>
            </div>
        </HeaderStyle>
    )
}

export default Header;
