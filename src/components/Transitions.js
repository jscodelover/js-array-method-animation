import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

export default ({ pageKey, children }) => (
	<Wrapper>
		<TransitionGroup className='transition-group'>
			<CSSTransition
				key={pageKey}
				timeout={{ enter: 300, exit: 300 }}
				classNames='fade'
			>
				<div className='route-section'>{children}</div>
			</CSSTransition>
		</TransitionGroup>
	</Wrapper>
);

const Wrapper = styled.div`
	.fade-enter {
		opacity: 0.01;
	}

	.fade-enter.fade-enter-active {
		opacity: 1;
		transition: opacity 300ms ease-in;
	}

	.fade-exit {
		opacity: 1;
	}

	.fade-exit.fade-exit-active {
		opacity: 0.01;
		transition: opacity 300ms ease-in;
	}

	div.transition-group {
		position: relative;
	}

	.route-section {
		position: absolute;
		width: 100%;
		top: 0;
		left: 0;
	}
`;
