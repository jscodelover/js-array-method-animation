import React, { useRef, useState } from 'react';
import { TweenMax, Power0, TimelineMax } from 'gsap';
import CodePanel from '../../components/codepanel';
import { arrayMethod } from '../../utils/data';
import { createData } from '../../utils/common';
import { Block, Box } from '../../components/Blocks';
import { MapStyle } from './map.style';
import AnimationBox from '../../components/animationBox';

function Map() {
	const mapFn = useRef(null);
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
	const [boxHide, handleBoxHide] = useState(null);
	const [play, handlePlay] = useState(false);

	const refBlockA = [block1, block2, block3, block4, block5];
	const refBlockB = [block6, block7, block8, block9, block10];
	const left = ['35%', '18%', '0%', '-15%', '-35%'];

	const dataA = createData("{name:'A', like:'B'}", 5);
	const dataB = createData('{A: B}', 5);

	async function animateMap() {
		handlePlay(true);
		await handleBoxHide(true);
		mapFn.current && mapFn.current.classList.remove('mb-140');
		setTimeout(() => (mapFn.current.className += ' mb-140'), 3600);
		TweenMax.fromTo(
			mapFn.current,
			2,
			{ rotation: 0 },
			{
				rotation: 360,
				ease: Power0.easeOut,
				repeat: 1
			}
		).delay(3.6);
		for (let [index, ref] of refBlockA.entries()) {
			const t = TweenMax.fromTo(
				ref.current,
				0.7,
				{ css: { top: 0, left: 0, opacity: 1 } },
				{ css: { top: '215px', left: left[index], opacity: 0 } }
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
				{ css: { top: '-215px', left: left[index], opacity: 0 } },
				{ css: { top: 0, left: 0, opacity: 1 } }
			).delay(delay);
			delay = delay + 0.6;
			const tl = new TimelineMax();
			tl.add(t);
			tl.play();
		}
		setTimeout(() => handlePlay(false), 8700);
	}

	function box(data, ref) {
		const renderData = data.reduce((newArr, item, index) => {
			return newArr.concat(
				<Box
					key={`${item.name}${index}`}
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
		<MapStyle>
			<h1>Map Array Method</h1>
			<CodePanel>
				<div dangerouslySetInnerHTML={{ __html: arrayMethod.map.data }} />
				<div dangerouslySetInnerHTML={{ __html: arrayMethod.map.function }} />
				<div>{arrayMethod.map.result}</div>
			</CodePanel>
			<AnimationBox
				handleClick={animateMap}
				className={play && 'disable-animate-btn'}
			>
				<Block fontSize={11} paddingLeft='3px'>
					{box(dataA)}
				</Block>
				<Block fontSize={11} paddingLeft='3px' marginTop='-50px'>
					{box(dataA, refBlockA)}
				</Block>
				<div className='mapFn-container'>
					<div ref={mapFn} className='mapFn' />
					<span>Map Function</span>
				</div>
				{boxHide && (
					<Block fontSize={11} paddingLeft='1px' marginTop='-50px'>
						{box(dataB, refBlockB)}
					</Block>
				)}
			</AnimationBox>
		</MapStyle>
	);
}

export default Map;
