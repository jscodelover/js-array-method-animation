import React, { useRef, useEffect } from 'react';
import { TweenMax, Power0 } from 'gsap';
import CodePanel from '../../components/codepanel';
import { arrayMethod } from '../../utils/data';
import { MapStyle } from './map.style';
import Block from '../../components/blocks';

function Map() {
	const mapFn = useRef(null);
	useEffect(() => {
		TweenMax.to(mapFn.current, 2, {
			rotation: 360,
			ease: Power0.easeOut,
			repeat: -1
		});
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
			<Block items={5} fontSize={7}>
				{"{name:'', like: ''}"}
			</Block>
			<div className='mapFn-container'>
				<div ref={mapFn} className='mapFn' />
				<span>Map Function</span>
			</div>
		</MapStyle>
	);
}

export default Map;
