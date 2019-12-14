import styled from 'styled-components';
import theme from 'styled-theming';

const bgColor = theme('mode', {
	light: '#343b46',
	dark: '#b1b1b1'
});

const color = theme('mode', {
	light: '#b1b1b1',
	dark: '#343b46'
});

const Footer = styled.div`
	min-height: 180px;
	padding-top: 72px;
	text-align: center;
	background-color: ${bgColor};
	color: ${color};
	.crafted {
		margin-bottom: 20px;
		font-size: 16px;
	}
	.copyright {
		font-size: 13px;
	}
`;

export default Footer;
