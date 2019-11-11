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
				title='editor'
				frameborder='0'
				width='100%'
				height='500px'
				src='https://repl.it/@amasad/PitifulLastingWhoopingcrane?lite=true'
				onLoad={handleOnLoad}
			></iframe>
		</EditorWrapper>
	);
}

export default Editor;
