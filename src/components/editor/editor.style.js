import styled from 'styled-components';
import theme from 'styled-theming';

const borderColor = theme('mode', {
	light: '#000',
	dark: '#fff'
});

const EditorWrapper = styled.div`
	position: relative;
	margin: 70px 0px;
	width: 100%;
	height: 500px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid ${borderColor};
	h2 {
		position: absolute;
		font-size: 46px;
	}
`;

export { EditorWrapper };
