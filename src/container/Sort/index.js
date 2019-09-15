import React, { useRef, useState } from 'react';
import { TweenMax, TimelineMax, Back } from 'gsap';
import theme from 'styled-theming';
import defaultTheme from '../../style/themes';
import CodePanel from '../../components/codepanel';
import AnimationBox from '../../components/animationBox';
import { arrayMethod } from '../../utils/data';
import { colorArray } from '../../utils/common';
import { SortStyle } from './sort.style';
import { Block, Box } from '../../components/Blocks';

function Sort() {
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
	const [boxHide1, handleBoxHide1] = useState(null);
	const [boxHide2, handleBoxHide2] = useState(null);
	const refBlockA = [block1, block2, block3, block4, block5, block6];
	const refBlockB = [block7, block8, block9, block10, block11, block12];
	const data = [
		{ name: 'Akhil', colorId: 0 },
		{ name: 'Rohan', colorId: 1 },
		{ name: 'Vicky', colorId: 2 },
		{ name: 'Niti', colorId: 3 },
		{ name: 'Jack', colorId: 4 },
		{ name: 'Huang', colorId: 5 }
	];
	const dataAsc = sorting(1);
	const dataDesc = sorting(2);
	async function sortAnimate(fn, refArray, sortData) {
		await fn(true);
		for (let [index, ref] of refArray.entries()) {
			const t = TweenMax.fromTo(
				ref.current,
				3.5,
				{
					opacity: 0.4,
					yoyo: true,
					color: 'transparent',
					backgroundColor: colorArray[data[index].colorId],
					rotationY: 0
				},
				{
					rotationY: 360,
					transformStyle: 'preserve-3d',
					ease: Back.easeInOut,
					opacity: 1,
					yoyo: true,
					backgroundColor: colorArray[sortData[index].colorId],
					color: theme('mode', {
						light: defaultTheme.colors.black,
						dark: defaultTheme.colors.white
					})
				}
			);
			const tl = new TimelineMax();
			tl.add(t);
			tl.play();
		}
	}
	function BoxContainer() {
		return <Block fontSize={14}>{animatingBox(data)}</Block>;
	}
	function animatingBox(dataArray, ref) {
		const renderData = dataArray.reduce((newArr, item, index) => {
			return newArr.concat(
				<Box
					key={`${item.name}${index}`}
					ref={ref && ref[index]}
					backgroundColor={colorArray[item.colorId]}
				>
					{item.name}
				</Box>
			);
		}, []);
		return renderData;
	}
	function sorting(type) {
		const newData = [...data];
		return newData.sort((item1, item2) => {
			if (type === 1) return item1.name < item2.name ? -1 : 1;
			return item1.name > item2.name ? -1 : 1;
		});
	}
	return (
		<SortStyle>
			<h1>Sort in Ascending Order</h1>
			<CodePanel>
				<div dangerouslySetInnerHTML={{ __html: arrayMethod.sortA.data }} />
				<div dangerouslySetInnerHTML={{ __html: arrayMethod.sortA.function }} />
				<div className='or'>----OR----</div>
				<div
					dangerouslySetInnerHTML={{
						__html: arrayMethod.sortA.alternative_function
					}}
				/>
				<div>{arrayMethod.sortA.result}</div>
			</CodePanel>
			<AnimationBox
				handleClick={() => sortAnimate(handleBoxHide1, refBlockA, dataAsc)}
			>
				{BoxContainer()}
				{boxHide1 && (
					<Block fontSize={14} marginTop={'20px'}>
						{animatingBox(dataAsc, refBlockA)}
					</Block>
				)}
			</AnimationBox>

			<h1>Sort in Descending Order</h1>
			<CodePanel>
				<div dangerouslySetInnerHTML={{ __html: arrayMethod.sortD.data }} />
				<div dangerouslySetInnerHTML={{ __html: arrayMethod.sortD.function }} />
				<div className='or'>----OR----</div>
				<div
					dangerouslySetInnerHTML={{
						__html: arrayMethod.sortD.alternative_function
					}}
				/>
				<div>{arrayMethod.sortD.result}</div>
			</CodePanel>
			<AnimationBox
				handleClick={() => sortAnimate(handleBoxHide2, refBlockB, dataDesc)}
			>
				{BoxContainer()}
				{boxHide2 && (
					<Block fontSize={14} marginTop={'20px'}>
						{animatingBox(dataDesc, refBlockB)}
					</Block>
				)}
			</AnimationBox>
		</SortStyle>
	);
}

export default Sort;
