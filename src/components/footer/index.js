import React from 'react';
import FooterWapper from './footer.style';

function Footer() {
	return (
		<FooterWapper>
			<p className="crafted">
				Crafted with{' '}
				<span role="img" aria-label="heart">
					❤️
				</span>
				using React Hooks and GSAP
			</p>
			<p className="copyright">Copyright 2019 - jscodelover</p>
		</FooterWapper>
	);
}

export default Footer;
