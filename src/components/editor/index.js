import React, { useState } from 'react';
import { EditorWrapper } from './editor.style';

function Editor(props) {
	const [loading, handleLoading] = useState(true);
	function handleOnLoad() {
		loading && handleLoading(false);
	}
	return (
		<EditorWrapper>
			{loading ? <h2>Loading....</h2> : null}
			<iframe
				title="editor"
				frameBorder="0"
				width="100%"
				height="500px"
				src={props.src}
				onLoad={handleOnLoad}
			></iframe>
		</EditorWrapper>
	);
}

export default Editor;
