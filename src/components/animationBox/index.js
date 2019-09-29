import React from 'react';
import { AnimationContainer, AnimateBtn } from './animateBox.style';

function AnimationBox(props) {
	const { children, handleClick, className } = props;
	return (
		<AnimationContainer>
			<AnimateBtn onClick={handleClick} className={className}>
				<div className='circle'>
					<span className='icon arrow' />
				</div>
				<span className='button-text'>Animate</span>
			</AnimateBtn>
			{children}
		</AnimationContainer>
	);
}

export default AnimationBox;