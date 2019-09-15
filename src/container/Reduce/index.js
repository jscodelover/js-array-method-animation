import React, { useRef, useState } from 'react';
import { TweenMax, TimelineMax, Sine } from 'gsap';
import CodePanel from '../../components/codepanel';
import AnimationBox from '../../components/animationBox';
import { arrayMethod } from '../../utils/data';
import { Block, Box } from '../../components/Blocks';
import { colorArray } from '../../utils/common';
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
	const refBlockA = [block1, block2, block3, block4, block5, block6];
	const refBlockB = [block7, block8, block9, block10, block11, block12];
	const left = ['45%', '35%', '15%', '-15%', '-35%', '-45%'];
	const [boxHide, handleBoxHide] = useState(null);
	const [play, handlePlay] = useState(false);
	const data = [
		{ obj: "{ country: ' ', name: ' ' }", colorId: 0 },
		{ obj: "{ country: ' ', name: ' ' }", colorId: 1 },
		{ obj: "{ country: ' ', name: ' ' }", colorId: 2 },
		{ obj: "{ country: ' ', name: ' ' }", colorId: 3 },
		{ obj: "{ country: ' ', name: ' ' }", colorId: 4 },
		{ obj: "{ country: ' ', name: ' ' }", colorId: 5 }
	];

	function reduceFnAnimate(count, limit) {
		reduceFn.current && reduceFn.current.classList.remove('rotate-zero');
		let onComplete = reduceFnAnimate;
		if (count === 14)
			onComplete = () => {
				reduceFn.current && (reduceFn.current.className += ' rotate-zero');
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
		for (let ref of refBlockB) {
			const t = TweenMax.fromTo(
				ref.current,
				0.7,
				{ css: { top: '-200px', left: '45%', opacity: 0 } },
				{
					css: {
						left: '50%',
						top: 0,
						position: 'absolute',
						transform: 'translateX(-50%)',
						opacity: 0.2
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
	console.log(play);
	function box(ref) {
		const renderData = data.reduce((newArr, item, index) => {
			return newArr.concat(
				<Box
					key={`${item.name}${index}`}
					ref={ref && ref[index]}
					backgroundColor={colorArray[item.colorId]}
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
			<CodePanel>
				<div dangerouslySetInnerHTML={{ __html: arrayMethod.reduce.data }} />
				<div
					dangerouslySetInnerHTML={{ __html: arrayMethod.reduce.function }}
				/>
				<div>{arrayMethod.reduce.result}</div>
			</CodePanel>
			<AnimationBox
				handleClick={animateReduce}
				className={play && 'disable-animate-btn'}
			>
				<Block fontSize={7}>{box()}</Block>
				<Block fontSize={7} marginTop='-50px'>
					{box(refBlockA)}
				</Block>
				<div className='reduceFn-container'>
					<div ref={reduceFn} className='reduceFn'>
						<span>Reduce Function</span>
					</div>
				</div>
				{boxHide && <Block fontSize={7}>{box(refBlockB)}</Block>}
			</AnimationBox>
		</ReduceStyle>
	);
}

export default Reduce;
