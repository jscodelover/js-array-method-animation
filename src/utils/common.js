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

export const colorArray = [
	'#f38630',
	'#989898',
	'#6fb936',
	'#F7A460',
	'#D73739',
	'#F9D88B',
	'#D5EDEB',
	'#59876C',
	'#B3A3B5',
	'#E87577'
];

export const createData = (data, ele) => {
	return colorArray.reduce((arr, color, index) => {
		if (index < ele) return arr.concat({ obj: data, color });
		return arr;
	}, []);
};
