import React, { useRef, useEffect, useState } from 'react';
import { TweenMax, Back } from 'gsap';
import theme from 'styled-theming';
import defaultTheme from '../../style/themes';
import CodePanel from '../../components/codepanel';
import AnimationBox from '../../components/animationBox';
import { arrayMethod } from '../../utils/data';
import { SortStyle } from './sort.style';
import Block from '../../components/Blocks';

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
	useEffect(() => {
		handleBoxHide1(true);
		handleBoxHide2(true);
		for (let ref of [
			block1,
			block2,
			block3,
			block4,
			block5,
			block6,
			block7,
			block8,
			block9,
			block10,
			block11,
			block12
		]) {
			TweenMax.fromTo(
				ref.current,
				3.5,
				{
					opacity: 0.4,
					yoyo: true,
					color: 'transparent'
				},
				{
					rotationY: 360,
					transformStyle: 'preserve-3d',
					ease: Back.easeInOut,
					opacity: 1,
					yoyo: true,
					color: theme('mode', {
						light: defaultTheme.colors.black,
						dark: defaultTheme.colors.white
					})
				}
			);
		}
	}, []);
	function BoxContainer(boxHide) {
		return (
			<Block fontSize={8.5} visibility={boxHide && 'hidden'}>
				<div className='box'>Akhil</div>
				<div className='box'>Rohan</div>
				<div className='box'>Vicky</div>
				<div className='box'>Niti</div>
				<div className='box'>Jack</div>
				<div className='box'>Huang</div>
			</Block>
		);
	}
	function animatingBox(ref, dataArray) {
		const renderData = dataArray.reduce((newArr, item, index) => {
			return newArr.concat(
				<div key={`${item}${index}`} className='box' ref={ref[index]}>
					{item}
				</div>
			);
		}, []);
		return renderData;
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
			<AnimationBox handleClick={() => console.log('click')}>
				{BoxContainer(boxHide1)}
				<Block fontSize={8.5} marginTop={'-50px'}>
					{animatingBox(refBlockA, [
						'Akhil',
						'Huang',
						'Jack',
						'Niti',
						'Rohan',
						'Vicky'
					])}
				</Block>
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
			{BoxContainer(boxHide2)}
			<Block fontSize={8.5} marginTop={'-50px'}>
				{animatingBox(refBlockB, [
					'Vicky',
					'Rohan',
					'Niti',
					'Jack',
					'Huang',
					'Akhil'
				])}
			</Block>
		</SortStyle>
	);
}

export default Sort;
