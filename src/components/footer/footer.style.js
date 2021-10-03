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
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100px;
	background-color: ${bgColor};
	color: ${color};
	.crafted {
		margin-bottom: 5px;
		font-size: 16px;
	}
	.copyright {
		font-size: 14px;
		a {
			font-size: 15px;
			&:hover {
				text-decoration: underline;
			}
		}
	}
`;

export default Footer;
