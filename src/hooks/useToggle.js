import { useState } from 'react';

function useToggle(initialValue = false) {
	const [state, toggleState] = useState(initialValue);
	function toggle(value) {
		console.log(value);
		toggleState(value || !state);
	}
	return [state, toggle];
}

export default useToggle;
