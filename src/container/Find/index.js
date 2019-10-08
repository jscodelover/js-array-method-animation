import React from 'react';
import Find from '../../components/find';

function FindMethod() {
	const owners = [
		"firstname: 'Jaclyn'",
		"firstname: 'Magaly'",
		"firstname: 'Merle'",
		"firstname: 'Remona'",
		"firstname: 'Anabel'",
		"firstname: 'Evangelina'",
		"firstname: 'Jscodelover'",
		"firstname: 'Romelia'",
		"firstname: 'Trudi'",
		"firstname: 'Rosy'"
	];
	return <Find find='find' label='Find' owners={owners} />;
}

export default FindMethod;
