import React, { useRef, useState } from 'react';
import { TweenMax, TimelineMax } from 'gsap';
import CodePanel from '../../components/codepanel';
import { arrayMethod } from '../../utils/data';
import { FilterStyle } from './filter.style';
import { Block, Box } from '../../components/Blocks';
import AnimationBox from '../../components/animationBox';
import Editor from '../../components/editor';
import { colorArray, embeddLink } from '../../utils/common';

function Filter() {
	const filterFn = useRef(null);
	const block1 = useRef(null);
	const block2 = useRef(null);
	const block3 = useRef(null);
	const block4 = useRef(null);
	const block5 = useRef(null);
	const block6 = useRef(null);
	const [play, handlePlay] = useState(false);
	const [boxHide, handleBoxHide] = useState(null);

	const refBlockA = [block1, block2, block3, block4];
	const refBlockB = [block5, block6];

	const dataA = [
		{ obj: 'franchise: DC', color: colorArray[2] },
		{ obj: 'franchise: Marvel', color: colorArray[3] },
		{ obj: 'franchise: Marvel', color: colorArray[1] },
		{ obj: 'franchise: DC', color: colorArray[5] }
	];
	const dataB = [
		{ obj: 'franchise: Marvel', color: colorArray[3] },
		{ obj: 'franchise: Marvel', color: colorArray[1] }
	];

	const leftA = ['30%', '10%', '-10%', '-30%'];
	const leftB = ['10%', '-10%'];

	async function animateFilter() {
		handlePlay(true);
		await handleBoxHide(true);
		filterFn.current.classList.remove('rotate-zero');
		!filterFn.current.classList.contains(' mb-90') &&
			(filterFn.current.className += ' mb-90');
		TweenMax.fromTo(
			filterFn.current,
			0.5,
			{
				x: '+=20',
				yoyo: true,
				repeat: 10,
				rotation: 20
			},
			{
				x: '-=20',
				yoyo: true,
				repeat: 10,
				rotation: -20,
				onComplete: () => {
					filterFn.current && (filterFn.current.className += ' rotate-zero');
				}
			}
		);
		for (let [index, ref] of refBlockA.entries()) {
			const t = TweenMax.fromTo(
				ref.current,
				0.7,
				{ css: { top: 0, left: 0, opacity: 1 } },
				{ css: { top: '150px', left: leftA[index], opacity: 0 } }
			).delay(0.6 * index + 1);
			const tl = new TimelineMax();
			tl.add(t);
			tl.play();
		}
		let delay = 4.2;
		for (let [index, ref] of refBlockB.entries()) {
			const t = TweenMax.fromTo(
				ref.current,
				0.7,
				{ css: { top: '-150px', left: leftB[index], opacity: 0 } },
				{ css: { top: 0, left: 0, opacity: 1 } }
			).delay(delay);
			delay = 0.6 + delay;
			const tl = new TimelineMax();
			tl.add(t);
			tl.play();
		}
		setTimeout(() => handlePlay(false), 5500);
	}

	function box(data, ref) {
		const renderData = data.reduce((newArr, item, index) => {
			return newArr.concat(
				<Box
					key={`${item.obj}-${index}`}
					ref={ref && ref[index]}
					backgroundColor={item.color}
				>
					{item.obj}
				</Box>
			);
		}, []);
		return renderData;
	}

	return (
		<FilterStyle>
			<h1>Filter Array Method</h1>
			<p>
				The <strong>filter()</strong> method is used when we want to select a subset
				of multiple elements from an array.
			</p>
			<p>
				In other words, it checks each element of an array against a condition and
				adds it to a new array if it passes the test implemented by the provided
				function.
			</p>

			<br />
			<p>
				Let's take an example to know how the filter method works and why this
				method is suitable for this example.
			</p>
			<CodePanel>
				<div dangerouslySetInnerHTML={{ __html: arrayMethod.filter.data }} />
				<div dangerouslySetInnerHTML={{ __html: arrayMethod.filter.function }} />
				<div>---OR---</div>
				<div
					dangerouslySetInnerHTML={{
						__html: arrayMethod.filter.alternative_function
					}}
				/>
				<div>{arrayMethod.filter.result}</div>
			</CodePanel>
			<AnimationBox
				handleClick={animateFilter}
				className={play && 'disable-animate-btn'}
			>
				<Block fontSize={9} paddingLeft="6px">
					{box(dataA)}
				</Block>
				<Block fontSize={9} paddingLeft="6px" marginTop="-50px">
					{box(dataA, refBlockA)}
				</Block>
				<div className="filterFn-container">
					<div ref={filterFn} className="filterFn rotate-zero">
						<span>Filter Function</span>
					</div>
				</div>
				{boxHide && (
					<Block fontSize={9} paddingLeft="6px">
						{box(dataB, refBlockB)}
					</Block>
				)}
			</AnimationBox>
			<br />
			<p>
				In this case, we want to get all the heroes with the Marvel franchise. We
				pass an array and a callback function to the filter method. The filter
				method will call the provided callback function for each element in the
				array. If the callback function returns true then the value is passed to the
				newly created array.
			</p>
			<p>
				You can use the forEach() method or the normal for-loop for this example but
				that will only create complications later down the line and will increase
				the code size. We need to iterate through each element of an array and need
				to push the value that passes the condition.
			</p>

			<br />
			<p>Below is the implementation behind the Array.prototype.filter method. </p>
			<Editor src={embeddLink.find(item => item.method === 'filter').link} />
		</FilterStyle>
	);
}

export default Filter;
