import React, { useRef, useEffect, useState } from 'react';
import { TweenMax } from 'gsap';
import { HeaderStyle } from './header.style';

function Header(){
    const headerRef1 = useRef(null);
    const headerRef2 = useRef(null);
    const headerRef3 = useRef(null);
    const [styleHeading, handleStyle] = useState({});
    useEffect(() => {
        TweenMax
            .to(headerRef1.current, 1, {
                    top: '0'
                });
        TweenMax
            .to(headerRef2.current, 1, {
                    right: '0'
                })
            .delay(0.3);
        TweenMax
            .to(headerRef3.current, 1, {
                bottom: '0', y: 0,
                onComplete: () => {
                    handleStyle({
                        boxShadow: '0 0 0 1px hsla(0, 0%, 0%, 0), 0px -1px 20px 7px hsl(0, 0%, 0%)',
                        padding: '10px',
                        borderRadius: '17px'
                    })
                }
            })
            .delay(0.5);    
    },[])
    return (
        <HeaderStyle>
            <div className="heading" style={styleHeading}>
                <span className="heading__text heading__text--1"  ref={headerRef1}>Animate</span>  
                <span className="heading__text heading__text--2"  ref={headerRef2}>Array</span>
                <span className="heading__text heading__text--3"  ref={headerRef3}>Methods</span>
            </div>
        </HeaderStyle>
    )
}

export default Header;
