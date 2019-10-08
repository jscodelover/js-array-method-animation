import React, { useEffect, useState } from 'react';
import { AnimationContainer, AnimateBtn } from './animateBox.style';

function AnimationBox(props) {
	const [showAnimation, handleShowAnimation] = useState(true);
	const { children, handleClick, className } = props;
	useEffect(() => {
		handleScroll();
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.addEventListener('resize', handleScroll);
		};
	}, []);
	function handleScroll() {
		handleShowAnimation(window.innerWidth > 500);
	}
	return (
		showAnimation && (
			<AnimationContainer>
				<AnimateBtn onClick={handleClick} className={className}>
					<div className='circle'>
						<span className='icon arrow' />
					</div>
					<span className='button-text'>Animate</span>
				</AnimateBtn>
				{children}
			</AnimationContainer>
		)
	);
}

export default AnimationBox;
