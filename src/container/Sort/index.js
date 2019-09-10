import React, { useRef, useEffect } from 'react';
import { TweenMax, Power0 } from 'gsap';
import CodePanel from '../../components/codepanel';
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
	useEffect(() => {
		let i = 1;
		for (let ref of [block1, block2, block3, block4, block5, block6]) {
			TweenMax.fromTo(
				ref.current,
				0.7,
				{ opacity: 1 },
				{
					rotation: 360,
					opacity: 0.4,
					scale: 1.5,
					ease: Power0.easeOut
				}
			).delay(i++ * 0.8);
		}
	}, []);
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
			<div>
				<Block fontSize={8.5}>
					<div className='box' ref={block1}>
						'Hai Rong',
					</div>
					<div className='box' ref={block2}>
						'Rohan',
					</div>
					<div className='box' ref={block3}>
						'Vicky',
					</div>
					<div className='box' ref={block4}>
						'Niti',
					</div>
					<div className='box' ref={block5}>
						'Jack',
					</div>
					<div className='box' ref={block6}>
						'Huang'
					</div>
				</Block>
			</div>
		</SortStyle>
	);
}

export default Sort;
