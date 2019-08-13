import { useState } from 'react';

function useToggle(initialValue = false) {
	const [state, toggleState] = useState(initialValue);
	function toggle() {
		toggleState(!state);
	}
	return [state, toggle];
}

export default useToggle;
