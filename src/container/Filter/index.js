import React, { useRef, useEffect } from 'react';
import { TweenMax } from 'gsap';
import CodePanel from '../../components/codepanel';
import { arrayMethod } from '../../utils/data';
import { FilterStyle } from './filter.style';
import Block from '../../components/Blocks';

function Filter() {
	const filterFn = useRef(null);
	const block1 = useRef(null);
	const block2 = useRef(null);
	const block3 = useRef(null);
	const block4 = useRef(null);
	const block5 = useRef(null);
	const block6 = useRef(null);
	useEffect(() => {
		// filterFn.current.classList.remove('rotate-zero');
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
					filterFn.current.className += ' rotate-zero';
				}
			}
		).delay(4.2);
		TweenMax.fromTo(
			block1.current,
			0.7,
			{ css: { top: 0, left: 0, opacity: 1 } },
			{ css: { top: '150px', left: '30%', opacity: 0 } }
		).delay(0.6);
		TweenMax.fromTo(
			block2.current,
			0.7,
			{ css: { top: 0, left: 0, opacity: 1 } },
			{ css: { top: '150px', left: '10%', opacity: 0 } }
		).delay(1.2);
		TweenMax.fromTo(
			block3.current,
			0.7,
			{ css: { top: 0, left: 0, opacity: 1 } },
			{ css: { top: '150px', left: '-10%', opacity: 0 } }
		).delay(1.8);
		TweenMax.fromTo(
			block4.current,
			0.7,
			{ css: { top: 0, left: 0, opacity: 1 } },
			{ css: { top: '150px', left: '-30%', opacity: 0 } }
		).delay(2.4);
		TweenMax.fromTo(
			block5.current,
			0.7,
			{ css: { top: '-150px', left: '10%', opacity: 0 } },
			{ css: { top: 0, left: 0, opacity: 1 } }
		).delay(3);
		TweenMax.fromTo(
			block6.current,
			0.7,
			{ css: { top: '-150px', left: '-10%', opacity: 0 } },
			{ css: { top: 0, left: 0, opacity: 1 } }
		).delay(3.6);
	}, []);
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
			<div>
				<Block fontSize={7}>
					<div className='box'>{"{name: '', franchise: ''}"}</div>
					<div className='box'>{"{name: '', franchise: ''}"}</div>
					<div className='box'>{"{name: '', franchise: ''}"}</div>
					<div className='box'>{"{name: '', franchise: ''}"}</div>
				</Block>
				<Block fontSize={7} marginTop='-50px'>
					<div className='box' ref={block1}>
						{"{name: '', franchise: ''}"}
					</div>
					<div className='box' ref={block2}>
						{"{name: '', franchise: ''}"}
					</div>
					<div className='box' ref={block3}>
						{"{name: '', franchise: ''}"}
					</div>
					<div className='box' ref={block4}>
						{"{name: '', franchise: ''}"}
					</div>
				</Block>
				<div className='filterFn-container'>
					<div ref={filterFn} className='filterFn rotate-zero'>
						<span>Filter Function</span>
					</div>
				</div>
				<Block fontSize={7}>
					<div className='box d-none'></div>
					<div className='box' ref={block5}>
						{"{name: '', franchise: ''}"}
					</div>
					<div className='box' ref={block6}>
						{"{name: '', franchise: ''}"}
					</div>
				</Block>
			</div>
		</FilterStyle>
	);
}

export default Filter;
