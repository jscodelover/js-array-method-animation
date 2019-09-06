import React, { useRef, useEffect } from 'react';
import { TweenMax } from 'gsap';
import CodePanel from '../../components/codepanel';
import { arrayMethod } from '../../utils/data';
import { ReduceStyle } from './reduce.style';
import Block from '../../components/Blocks';

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
	useEffect(() => {
		TweenMax.fromTo(
			reduceFn.current,
			0.5,
			{
				x: '+=20',
				yoyo: true,
				repeat: 10
			},
			{ x: '-=20', yoyo: true, repeat: 10 }
		).delay(4.2);
		TweenMax.fromTo(
			block1.current,
			0.7,
			{ css: { top: 0, left: 0, opacity: 1 } },
			{ css: { top: '190px', left: '45%', opacity: 0 } }
		).delay(0.6);
		TweenMax.fromTo(
			block2.current,
			0.7,
			{ css: { top: 0, left: 0, opacity: 1 } },
			{ css: { top: '190px', left: '35%', opacity: 0 } }
		).delay(1.2);
		TweenMax.fromTo(
			block3.current,
			0.7,
			{ css: { top: 0, left: 0, opacity: 1 } },
			{ css: { top: '190px', left: '15%', opacity: 0 } }
		).delay(1.8);
		TweenMax.fromTo(
			block4.current,
			0.7,
			{ css: { top: 0, left: 0, opacity: 1 } },
			{ css: { top: '190px', left: '-15%', opacity: 0 } }
		).delay(2.4);
		TweenMax.fromTo(
			block5.current,
			0.7,
			{ css: { top: 0, left: 0, opacity: 1 } },
			{ css: { top: '190px', left: '-35%', opacity: 0 } }
		).delay(3);
		TweenMax.fromTo(
			block6.current,
			0.7,
			{ css: { top: 0, left: 0, opacity: 1 } },
			{ css: { top: '190px', left: '-45%', opacity: 0 } }
		).delay(3.6);
		TweenMax.fromTo(
			block7.current,
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
		).delay(6.7);
		TweenMax.fromTo(
			block8.current,
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
		).delay(7.3);
		TweenMax.fromTo(
			block9.current,
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
		).delay(7.9);
		TweenMax.fromTo(
			block10.current,
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
		).delay(8.5);
		TweenMax.fromTo(
			block11.current,
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
		).delay(9.1);
		TweenMax.fromTo(
			block12.current,
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
		).delay(9.7);
	}, []);
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
			<div>
				<Block fontSize={7}>
					<div className='box'>{"{country: '', name: ''}"}</div>
					<div className='box'>{"{country: '', name: ''}"}</div>
					<div className='box'>{"{country: '', name: ''}"}</div>
					<div className='box'>{"{country: '', name: ''}"}</div>
					<div className='box'>{"{country: '', name: ''}"}</div>
					<div className='box'>{"{country: '', name: ''}"}</div>
				</Block>
				<Block fontSize={7} marginTop='-50px'>
					<div className='box' ref={block1}>
						{"{country: '', name: ''}"}
					</div>
					<div className='box' ref={block2}>
						{"{country: '', name: ''}"}
					</div>
					<div className='box' ref={block3}>
						{"{country: '', name: ''}"}
					</div>
					<div className='box' ref={block4}>
						{"{country: '', name: ''}"}
					</div>
					<div className='box' ref={block5}>
						{"{country: '', name: ''}"}
					</div>
					<div className='box' ref={block6}>
						{"{country: '', name: ''}"}
					</div>
				</Block>
				<div className='reduceFn-container'>
					<div ref={reduceFn} className='reduceFn'>
						<span>Reduce Function</span>
					</div>
				</div>
				<Block fontSize={7}>
					<div className='box' ref={block7}>
						{"{country: '', name: ''}"}
					</div>
					<div className='box' ref={block8}>
						{"{country: '', name: ''}"}
					</div>
					<div className='box' ref={block9}>
						{"{country: '', name: ''}"}
					</div>
					<div className='box' ref={block10}>
						{"{country: '', name: ''}"}
					</div>
					<div className='box' ref={block11}>
						{"{country: '', name: ''}"}
					</div>
					<div className='box' ref={block12}>
						{"{country: '', name: ''}"}
					</div>
				</Block>
			</div>
		</ReduceStyle>
	);
}

export default Reduce;
