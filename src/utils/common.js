export const loadState = (name = '') => {
	try {
		const serializedState = localStorage.getItem(name);
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};

export const saveState = (name, data) => {
	try {
		const serializedState = JSON.stringify(data);
		localStorage.setItem(name, serializedState);
	} catch (err) {
		console.log('Got error while saving data: ', err);
	}
};

export const removeState = name => {
	try {
		localStorage.removeItem(name);
	} catch (err) {
		console.log('Got error while removing data: ', err);
	}
};
