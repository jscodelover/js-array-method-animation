import React, { useRef, useState } from 'react';
import { TweenMax, TimelineMax, Power4 } from 'gsap';
import CodePanel from '../../components/codepanel';
import { arrayMethod } from '../../utils/data';
import { Block, Box } from '../../components/Blocks';
import AnimationBox from '../../components/animationBox';
import { colorArray } from '../../utils/common';
import { FindStyle } from './find.style';

function Find(props) {
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
	const [play, handlePlay] = useState(false);

	const refBlock = [
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
	];

	function animateFind() {
		handlePlay(true);
		for (let [index, ref] of refBlock.entries()) {
			ref.current &&
				ref.current.classList.remove(
					'reposition-block',
					'right-box',
					'wrong-box'
				);
			const t = TweenMax.fromTo(
				ref.current,
				0.7,
				{ opacity: 1, rotation: 0, scale: 1 },
				{
					rotation: 360,
					opacity: 0.4,
					scale: 1.5,
					ease: Power4.easeOut,
					onComplete: () => {
						if (ref.current) {
							if (ref.current.innerHTML.match(/Jscodelover/g)) {
								ref.current.className += ' reposition-block right-box';
								TweenMax.killAll();
							} else {
								ref.current.className += ' reposition-block wrong-box';
							}
						}
					}
				}
			).delay(index + 1 * 0.8);
			const tl = new TimelineMax();
			tl.add(t);
			tl.play();
		}
		setTimeout(() => handlePlay(false), 8000);
	}
	const { find, label, owners, floor, pd_l, box } = props;
	return (
		<FindStyle>
			<h1>{label} Array Method</h1>
			<CodePanel>
				<div dangerouslySetInnerHTML={{ __html: arrayMethod[find].data }} />
				<div dangerouslySetInnerHTML={{ __html: arrayMethod[find].function }} />
				<div className='or'>----OR----</div>
				<div
					dangerouslySetInnerHTML={{
						__html: arrayMethod[find].alternative_function
					}}
				/>
				<div>{arrayMethod[find].result}</div>
			</CodePanel>
			<AnimationBox
				handleClick={animateFind}
				className={play && 'disable-animate-btn'}
			>
				<Block fontSize={8.5}>
					{owners.map((owner, index) => {
						return (
							<div key={owner}>
								<Box ref={refBlock[index]} backgroundColor={colorArray[index]}>
									{owner}
									{floor && <span>{floor[index]}</span>}
								</Box>
								<div className='icon'></div>
							</div>
						);
					})}
				</Block>
			</AnimationBox>
		</FindStyle>
	);
}

export default Find;
