import React, { useRef, useState } from 'react';
import { TweenMax, TimelineMax, Sine } from 'gsap';
import CodePanel from '../../components/codepanel';
import AnimationBox from '../../components/animationBox';
import { Block, Box } from '../../components/Blocks';
import Editor from '../../components/editor';
import { createData, embeddLink } from '../../utils/common';
import { arrayMethod } from '../../utils/data';
import { ReduceStyle } from './reduce.style';

function Reduce() {
	const reduceFn = useRef(null);
	const block1 = useRef(null);
	const block2 = useRef(null);
	const block3 = useRef(null);
	const block4 = useRef(null);
	const block5 = useRef(null);
	const block6 = useRef(null);
	const block7 = useRef(null);
	const block8 = useRef(null);
	const block9 = useRef(null);
	const block10 = useRef(null);
	const block11 = useRef(null);
	const block12 = useRef(null);
	const [boxHide, handleBoxHide] = useState(null);
	const [play, handlePlay] = useState(false);

	const refBlockA = [block1, block2, block3, block4, block5, block6];
	const refBlockB = [block7, block8, block9, block10, block11, block12];
	const left = ['45%', '35%', '15%', '-15%', '-35%', '-45%'];

	const dataA = createData("{ country: ' ', name: ' ' }", 6);
	const dataB = createData('name', 6);

	function reduceFnAnimate(count, limit) {
		reduceFn.current && reduceFn.current.classList.remove('rotate-zero');
		let onComplete = reduceFnAnimate;
		if (count === 14)
			onComplete = () => {
				reduceFn.current && (reduceFn.current.className += ' rotate-zero mb-140');
			};
		if (++count > limit) return;

		TweenMax.to(reduceFn.current, 0.15, {
			x: R(-10, 10),
			y: R(-10, 10),
			scale: R(1.1, 0.9),
			rotation: R(-10, 10),
			ease: Sine.easeInOut,
			onComplete: () => onComplete(count, limit)
		});
	}

	function R(max, min) {
		return Math.random() * (max - min) + min;
	}

	async function animateReduce() {
		handlePlay(true);
		await handleBoxHide(true);
		reduceFn.current && reduceFn.current.classList.remove('mb-140');
		setTimeout(() => {
			reduceFnAnimate(0, 15);
		}, 4200);
		for (let [index, ref] of refBlockA.entries()) {
			const t = TweenMax.fromTo(
				ref.current,
				0.7,
				{ css: { top: 0, left: 0, opacity: 1 } },
				{ css: { top: '190px', left: left[index], opacity: 0 } }
			).delay(0.6 * index + 1);
			const tl = new TimelineMax();
			tl.add(t);
			tl.play();
		}
		let delay = 6.7;
		for (let [index, ref] of refBlockB.entries()) {
			const t = TweenMax.fromTo(
				ref.current,
				0.7,
				{
					css: {
						top: '-200px',
						left: 0,
						transform: 'translateX(-24px)',
						opacity: 0
					}
				},
				{
					css: {
						left: `${50 + index * 10}%`,
						top: `${index * 10}px`,
						position: 'absolute',
						transform: 'translateX(-50%)',
						opacity: 1 - (0.2 + index * 0.1)
					}
				}
			).delay(delay);
			delay = delay + 0.6;
			const tl = new TimelineMax();
			tl.add(t);
			tl.play();
		}
		setTimeout(() => handlePlay(false), 10400);
	}

	function box(data, ref, position) {
		const renderData = data.reduce((newArr, item, index) => {
			return newArr.concat(
				<Box
					key={`${item.name}${index}`}
					ref={ref && ref[index]}
					backgroundColor={item.color}
					position={position}
				>
					{item.obj}
				</Box>
			);
		}, []);
		return renderData;
	}

	return (
		<ReduceStyle>
			<h1>Reduce Array Method</h1>
			<p>
				Reduce is probably the most powerful and versatile array method. It’s the
				hardest to explain.
			</p>
			<p>
				It is used to collapse an array down to a single value by iterating it. and
				it is used when you want to <strong>derive</strong> a single value from
				multiple elements in an array.
			</p>
			<p>
				Let's break it into more simple terms. The reducer Method takes the array
				and merges it into a single value. The callback function accepts two
				arguments: the accumulator, which is the current combined value, and the
				currentValue is the current item in the loop, and the initial value.
			</p>
			<br />

			<CodePanel>
				<div></div>
				<div>
					<p>{`arr.reduce(function callback(accumulator, currentValue){`}</p>
					<p>{`return;`}</p>
					<p>{`}, initialValue);`}</p>
				</div>
				<br />
				<br />
				<div>
					<p>{`eg -  [1,2,3].reduce(funtion callback(sum, ele){`}</p>
					<p>{`sum = sum + ele;`}</p>
					<p>{`return sum;`}</p>
					<p>{`},0);`}</p>
				</div>
				<div>
					result :
					<br />
					0 + 1 =1
					<br />
					1 + 2 = 3
					<br />
					3 + 3 = 6
					<br />
					output: 6
				</div>
				<br />
				<br />
				<div>
					<p>{`eg -  ['c', 'o', 'd', 'e'].reduce(function callback(str, ele){`}</p>
					<p>{`str = str + ele;`}</p>
					<p>{`return str;`}</p>
					<p>{`}},'js');`}</p>
				</div>
				<div>
					result :
					<br />
					js + c =jsc
					<br />
					jsc + o= jsco
					<br />
					jsco + d= jscod
					<br />
					jscod + e= jscode
					<br />
					output: jscode
				</div>
			</CodePanel>

			<br />
			<p>
				In the above two examples, we can see how we reduce the array in a single
				term.
			</p>

			<br />
			<p>
				Let's take another example. In this case, we have an array of people data
				and each person's data is in the object. Now we want to create an array of
				names of people who belong to India.{' '}
			</p>
			<CodePanel>
				<div dangerouslySetInnerHTML={{ __html: arrayMethod.reduce.data }} />
				<div dangerouslySetInnerHTML={{ __html: arrayMethod.reduce.function }} />
				<div>{arrayMethod.reduce.result}</div>
			</CodePanel>
			<AnimationBox
				handleClick={animateReduce}
				className={play && 'disable-animate-btn'}
			>
				<Block fontSize={9} paddingLeft="4px">
					{box(dataA)}
				</Block>
				<Block fontSize={9} marginTop="-50px" paddingLeft="4px">
					{box(dataA, refBlockA)}
				</Block>
				<div className="reduceFn-container">
					<div ref={reduceFn} className="reduceFn">
						<span>Reduce Function</span>
					</div>
				</div>
				{boxHide && (
					<Block fontSize={9} paddingLeft="4px" className="result-container">
						{box(dataB, refBlockB, 'absolute')}
					</Block>
				)}
			</AnimationBox>

			<br />
			<p>
				We pass an array, a callback function and an empty array to the reduce
				method. The reduce method will call the provided callback function for each
				element and save the result in the accumulator.
			</p>

			<br />
			<p>
				Below is the implementation behind the Array.prototype.reduce method. I
				would advise you to look deeply into this code to understand the reducer
				method.
			</p>
			<Editor src={embeddLink.find(item => item.method === 'reduce').link} />
		</ReduceStyle>
	);
}

export default Reduce;
