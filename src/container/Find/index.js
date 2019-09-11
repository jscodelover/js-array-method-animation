import React, { useRef, useEffect } from 'react';
import { TweenMax, Power0 } from 'gsap';
import CodePanel from '../../components/codepanel';
import { arrayMethod } from '../../utils/data';
import { FindStyle } from './find.style';
import Block from '../../components/Blocks';

function Find() {
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
	useEffect(() => {
		let i = 1;
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
			block10
		]) {
			TweenMax.fromTo(
				ref.current,
				0.7,
				{ opacity: 1 },
				{
					rotation: 360,
					opacity: 0.4,
					scale: 1.5,
					ease: Power0.easeOut,
					onComplete: () => {
						if (ref.current)
							if (ref.current.innerHTML !== "'Jscodelover'") {
								ref.current.innerHTML = 'X';
								ref.current.className += ' wrong-block';
							} else {
								ref.current.className += ' right-block';
							}
					}
				}
			).delay(i++ * 0.8);
		}
	}, []);
	return (
		<FindStyle>
			<h1>Find Array Method</h1>
			<CodePanel>
				<div dangerouslySetInnerHTML={{ __html: arrayMethod.find.data }} />
				<div dangerouslySetInnerHTML={{ __html: arrayMethod.find.function }} />
				<div className='or'>----OR----</div>
				<div
					dangerouslySetInnerHTML={{
						__html: arrayMethod.find.alternative_function
					}}
				/>
				<div>{arrayMethod.find.result}</div>
			</CodePanel>
			<div>
				<Block fontSize={8.5}>
					<div className='box' ref={block1}>
						'Jaclyn'
					</div>
					<div className='box' ref={block2}>
						'Magaly'
					</div>
					<div className='box' ref={block3}>
						'Merle'
					</div>
					<div className='box' ref={block4}>
						'Remona'
					</div>
					<div className='box' ref={block5}>
						'Anabel'
					</div>
					<div className='box' ref={block6}>
						'Jscodelover'
					</div>
					<div className='box' ref={block7}>
						'Evangelina'
					</div>
					<div className='box' ref={block8}>
						'Romelia'
					</div>
					<div className='box' ref={block9}>
						'Trudi'
					</div>
					<div className='box' ref={block10}>
						'Rosy'
					</div>
				</Block>
			</div>
		</FindStyle>
	);
}

export default Find;
