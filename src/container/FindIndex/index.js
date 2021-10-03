import React from 'react';
import Find from '../../components/find';
import Editor from '../../components/editor';
import { embeddLink } from '../../utils/common';

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
		<>
			<h1>Find Index Array Method</h1>
			<p>
				The <strong>findIndex()</strong> method returns the index of the first
				element in the array <strong>that satisfies the given condition</strong>.
				Otherwise, it returns -1, indicating that there is no such element in an
				array.
			</p>
			<p>
				It is used to find the position of a particular element or the presence of
				an element in an array.
			</p>

			<br />
			<p>Let's take an example to know how the findIndex method works.</p>
			<Find find="findIndex" owners={owners} floor={floor} />

			<br />
			<p>
				In this case, we want to find the floor number of the person named
				Jscodelover from the list of the floorOwners.{' '}
			</p>
			<p>
				We pass an array and a callback function to the findIndex method. The
				findIndex method will call the provided callback function for each element
				in the array until the callback returns a truthy value. And the method will
				return the index(i.e floor number) or -1.
			</p>
			<p>
				Just like find we can use forEach() for this case but it will add extra
				overhead.
			</p>
			<br />
			<p>
				Below is the implementation behind the Array.prototype.findIndex method.{' '}
			</p>
			<Editor src={embeddLink.find(item => item.method === 'findIndex').link} />
		</>
	);
}

export default FindIndex;
