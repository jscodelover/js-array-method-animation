import React from 'react';
import Find from '../../components/find';
import Editor from '../../components/editor';
import { embeddLink } from '../../utils/common';

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
	return (
		<>
			<h1>Find Array Method</h1>
			<p>
				The <strong>find()</strong> method checks each element of an array against a
				condition and returns the first element that passes the test implemented by
				the provided function.
			</p>
			<p>
				It is used when we want to <strong>select</strong> a single element from an
				array.
			</p>

			<br />
			<p>Let's take an example to know how the find method works.</p>
			<Find find="find" owners={owners} />
			<p>
				In this case, we want to find the person whose first name is Jscodelover
				from the list of names.{' '}
			</p>
			<p>
				We pass an array and a callback function to the find method. The find method
				will call the provided callback function for each element in the array until
				the callback returns a truthy value. And the method will return that value
				or undefined.
			</p>

			<br />
			<p>
				If we use forEach() for this case then we not only have to iterate plus we
				have to put stop to the iteration the moment we find the element which will
				result in extra work.
			</p>

			<br />
			<p>Below is the implementation behind the Array.prototype.find method. </p>
			<Editor src={embeddLink.find(item => item.method === 'find').link} />
		</>
	);
}

export default FindMethod;
