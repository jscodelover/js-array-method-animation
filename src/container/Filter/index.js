import React, { useRef, useState } from 'react';
import { TweenMax, TimelineMax } from 'gsap';
import CodePanel from '../../components/codepanel';
import { arrayMethod } from '../../utils/data';
import { FilterStyle } from './filter.style';
import { Block, Box } from '../../components/Blocks';
import AnimationBox from '../../components/animationBox';
import { colorArray } from '../../utils/common';

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
			<CodePanel>
				<div dangerouslySetInnerHTML={{ __html: arrayMethod.filter.data }} />
				<div
					dangerouslySetInnerHTML={{ __html: arrayMethod.filter.function }}
				/>
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
				<Block fontSize={9} paddingLeft='6px'>
					{box(dataA)}
				</Block>
				<Block fontSize={9} paddingLeft='6px' marginTop='-50px'>
					{box(dataA, refBlockA)}
				</Block>
				<div className='filterFn-container'>
					<div ref={filterFn} className='filterFn rotate-zero'>
						<span>Filter Function</span>
					</div>
				</div>
				{boxHide && (
					<Block fontSize={9} paddingLeft='6px'>
						{box(dataB, refBlockB)}
					</Block>
				)}
			</AnimationBox>
		</FilterStyle>
	);
}

export default Filter;
