import React from 'react';
import Find from '../../components/find';

function FindIndex() {
	const owners = [
		'Jaclyn',
		'Magaly',
		'Merle',
		'Remona',
		'Anabel',
		'Evangelina',
		'Jscodelover',
		'Romelia',
		'Trudi',
		'Rosy'
	];
	const floor = ['Ground', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	return (
		<Find find='findIndex' label='Find Index' owners={owners} floor={floor} />
	);
}

export default FindIndex;
