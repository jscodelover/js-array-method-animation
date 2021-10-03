import React from 'react';
import FooterWrapper from './footer.style';

function Footer() {
	return (
		<FooterWrapper>
			<div className="crafted">
				Crafted with{' '}
				<span role="img" aria-label="heart">
					❤️
				</span>{' '}
				using React Hooks and GSAP
			</div>
			<div className="copyright">
				Copyright 2021 -{' '}
				<a
					href="https://www.google.com/search?q=jscodelover"
					target="_blank"
					rel="noopener noreferrer"
				>
					@jscodelover
				</a>
			</div>
		</FooterWrapper>
	);
}

export default Footer;
