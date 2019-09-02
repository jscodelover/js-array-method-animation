import React, { useRef, useEffect } from 'react';
import { TweenMax, Power0 } from 'gsap';
import CodePanel from '../../components/codepanel';
import { arrayMethod } from '../../utils/data';
import { MapStyle } from './map.style';
import Block from '../../components/Blocks';

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
	useEffect(() => {
		TweenMax.to(mapFn.current, 2, {
			rotation: 360,
			ease: Power0.easeOut,
			repeat: 1
		}).delay(3.6);
		TweenMax.fromTo(
			block1.current,
			0.7,
			{ css: { top: 0, left: 0, opacity: 1 } },
			{ css: { top: '215px', left: '35%', opacity: 0 } }
		).delay(0.6);
		TweenMax.fromTo(
			block2.current,
			0.7,
			{ css: { top: 0, left: 0, opacity: 1 } },
			{ css: { top: '215px', left: '18%', opacity: 0 } }
		).delay(1.2);
		TweenMax.fromTo(
			block3.current,
			0.7,
			{ css: { top: 0, left: 0, opacity: 1 } },
			{ css: { top: '215px', left: '0%', opacity: 0 } }
		).delay(1.8);
		TweenMax.fromTo(
			block4.current,
			0.7,
			{ css: { top: 0, left: 0, opacity: 1 } },
			{ css: { top: '215px', left: '-15%', opacity: 0 } }
		).delay(2.4);
		TweenMax.fromTo(
			block5.current,
			0.7,
			{ css: { top: 0, left: 0, opacity: 1 } },
			{ css: { top: '215px', left: '-35%', opacity: 0 } }
		).delay(3);
		TweenMax.fromTo(
			block6.current,
			0.7,
			{ css: { top: '-215px', left: '35%', opacity: 0 } },
			{ css: { top: 0, left: 0, opacity: 1 } }
		).delay(4.2);
		TweenMax.fromTo(
			block7.current,
			0.7,
			{ css: { top: '-215px', left: '18%', opacity: 0 } },
			{ css: { top: 0, left: 0, opacity: 1 } }
		).delay(4.8);
		TweenMax.fromTo(
			block8.current,
			0.7,
			{ css: { top: '-215px', left: '0%', opacity: 0 } },
			{ css: { top: 0, left: 0, opacity: 1 } }
		).delay(5.4);
		TweenMax.fromTo(
			block9.current,
			0.7,
			{ css: { top: '-215px', left: '-15%', opacity: 0 } },
			{ css: { top: 0, left: 0, opacity: 1 } }
		).delay(6);
		TweenMax.fromTo(
			block10.current,
			0.7,
			{ css: { top: '-215px', left: '-35%', opacity: 0 } },
			{ css: { top: 0, left: 0, opacity: 1 } }
		).delay(6.6);
	}, []);
	return (
		<MapStyle>
			<h1>Map Array Method</h1>
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
			<div>
				<Block fontSize={7}>
					<div className='box'>{"{name:'', like: ''}"}</div>
					<div className='box'>{"{name:'', like: ''}"}</div>
					<div className='box'>{"{name:'', like: ''}"}</div>
					<div className='box'>{"{name:'', like: ''}"}</div>
					<div className='box'>{"{name:'', like: ''}"}</div>
				</Block>
				<Block fontSize={7} marginTop='-50px'>
					<div className='box' ref={block1}>
						{"{name:'', like: ''}"}
					</div>
					<div className='box' ref={block2}>
						{"{name:'', like: ''}"}
					</div>
					<div className='box' ref={block3}>
						{"{name:'', like: ''}"}
					</div>
					<div className='box' ref={block4}>
						{"{name:'', like: ''}"}
					</div>
					<div className='box' ref={block5}>
						{"{name:'', like: ''}"}
					</div>
				</Block>
				<div className='mapFn-container'>
					<div ref={mapFn} className='mapFn' />
					<span>Map Function</span>
				</div>
				<Block fontSize={7}>
					<div className='box' ref={block6}>
						{'{name: like,}'}
					</div>
					<div className='box' ref={block7}>
						{'{name: like}'}
					</div>
					<div className='box' ref={block8}>
						{'{name: like}'}
					</div>
					<div className='box' ref={block9}>
						{'{name: like}'}
					</div>
					<div className='box' ref={block10}>
						{'{name: like}'}
					</div>
				</Block>
			</div>
		</MapStyle>
	);
}

export default Map;
