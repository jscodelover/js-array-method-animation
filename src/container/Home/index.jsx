import React from 'react';
import CodePanel from '../../components/codepanel';
import { arrayMethod } from '../../utils/data';
import { HomeStyle } from './home.style';

function Home(props) {
	return (
		<HomeStyle>
			<p>
				Whether you are new or already holding experience in Javascript. You must
				have come across data manipulation problems revolving around an array.
			</p>
			<p>
				In <strong>Javascript</strong>, we have some rich functionality built right
				into the array prototype(map, filter, find, sot, and many more...), which
				makes the handling of the array a hell of a lot easier.
			</p>
			<p>
				And in this article, we are going to learn all these methods easily with the
				help of animation. Not only we are gone learn how to use these methods (
				<span className="color color-2">.map()</span>,
				<span className="color color-3">.filter()</span>,
				<span className="color color-4">.reduce()</span>,
				<span className="color color-5">.find()</span>, and
				<span className="color color-1">.findIndex()</span>) on arrays in
				JavaScript, but we will also learn when to use these common array methods.
			</p>
			<br />
			<p>
				<strong>An array</strong> is a single variable that is used to store
				different elements. It is often used when we want to store a list of
				elements and access them by a single variable.
			</p>
			<p>
				Arrays can be anything — numbers, strings, functions even other arrays and
				within the arrays, you can mix different types of data freely.
			</p>

			<br />
			<p>Here is an example of how we iterate over each value of an array.</p>

			<CodePanel>
				<div
					dangerouslySetInnerHTML={{ __html: arrayMethod['forEach'].function }}
				/>
				<div className="or">----OR----</div>
				<div
					dangerouslySetInnerHTML={{
						__html: arrayMethod['forEach'].alternative_function
					}}
				/>
			</CodePanel>
			<br />
			<p>
				We often commit complex ideas to memory by visualizing them. There aren’t
				many coding articles using visuals as starting point for learning. And yet,
				visualization plays important role in education. This also applies to
				coding. So here, I try to create some visuals to represent how array method
				creates a desired result
			</p>

			<div className="start-btn">
				<button onClick={() => props.history.push('/map')}>Start Learning</button>
			</div>
		</HomeStyle>
	);
}

export default Home;
