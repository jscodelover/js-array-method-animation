import React, { useRef, useEffect } from 'react';
import { TweenMax, Power0 } from 'gsap';
import CodePanel from '../../components/codepanel';
import { arrayMethod } from '../../utils/data';
import { FindIndexStyle } from './findindex.style';
import Block from '../../components/Blocks';

function FindIndex() {
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
		<FindIndexStyle>
			<h1>FindIndex Array Method</h1>
			<CodePanel>
				<div dangerouslySetInnerHTML={{ __html: arrayMethod.findIndex.data }} />
				<div
					dangerouslySetInnerHTML={{ __html: arrayMethod.findIndex.function }}
				/>
				<div className='or'>----OR----</div>
				<div
					dangerouslySetInnerHTML={{
						__html: arrayMethod.findIndex.alternative_function
					}}
				/>
				<div>{arrayMethod.findIndex.result}</div>
			</CodePanel>
			<div>
				<Block fontSize={8.5}>
					<div className='box' ref={block1}>
						'Jaclyn'
						<span>Ground</span>
					</div>
					<div className='box' ref={block2}>
						'Magaly'
						<span>1</span>
					</div>
					<div className='box' ref={block3}>
						'Merle'
						<span>2</span>
					</div>
					<div className='box' ref={block4}>
						'Remona'
						<span>3</span>
					</div>
					<div className='box' ref={block5}>
						'Anabel'
						<span>4</span>
					</div>
					<div className='box' ref={block6}>
						'Jscodelover'
						<span>5</span>
					</div>
					<div className='box' ref={block7}>
						'Evangelina'
						<span>6</span>
					</div>
					<div className='box' ref={block8}>
						'Romelia'
						<span>7</span>
					</div>
					<div className='box' ref={block9}>
						'Trudi'
						<span>8</span>
					</div>
					<div className='box' ref={block10}>
						'Rosy'
						<span>9</span>
					</div>
				</Block>
			</div>
		</FindIndexStyle>
	);
}

export default FindIndex;
