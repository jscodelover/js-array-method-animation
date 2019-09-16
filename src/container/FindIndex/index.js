import React, { useRef, useState } from 'react';
import { TweenMax, Power0 } from 'gsap';
import CodePanel from '../../components/codepanel';
import { arrayMethod } from '../../utils/data';
import { Block, Box } from '../../components/Blocks';
import AnimationBox from '../../components/animationBox';
import { colorArray } from '../../utils/common';
import { FindIndexStyle } from './findindex.style';

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
	function animateFindIndex() {
		handlePlay(true);
		for (let [index, ref] of refBlock.entries()) {
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
							if (ref.current.innerHTML.match(/Jscodelover/g)) {
								ref.current.className += ' right-block';
							} else {
								ref.current.innerHTML = 'X';
								ref.current.className += ' wrong-block';
							}
					}
				}
			).delay(index + 1 * 0.8);
		}
		setTimeout(() => handlePlay(false), 10400);
	}
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
			<AnimationBox
				handleClick={animateFindIndex}
				className={play && 'disable-animate-btn'}
			>
				<Block fontSize={8.5}>
					<Box ref={block1} backgroundColor={colorArray[0]}>
						Jaclyn
						<span>Ground</span>
					</Box>
					<Box ref={block2} backgroundColor={colorArray[1]}>
						Magaly
						<span>1</span>
					</Box>
					<Box ref={block3} backgroundColor={colorArray[2]}>
						Merle
						<span>2</span>
					</Box>
					<Box ref={block4} backgroundColor={colorArray[3]}>
						Remona
						<span>3</span>
					</Box>
					<Box ref={block5} backgroundColor={colorArray[4]}>
						Anabel
						<span>4</span>
					</Box>
					<Box ref={block6} backgroundColor={colorArray[5]}>
						Evangelina
						<span>5</span>
					</Box>
					<Box ref={block7} backgroundColor={colorArray[6]}>
						Romelia
						<span>6</span>
					</Box>
					<Box ref={block8} backgroundColor={colorArray[7]}>
						Trudi
						<span>7</span>
					</Box>
					<Box ref={block9} backgroundColor={colorArray[8]}>
						Rosy
						<span>8</span>
					</Box>
					<Box ref={block10} backgroundColor={colorArray[9]}>
						Jscodelover
						<span>9</span>
					</Box>
				</Block>
			</AnimationBox>
		</FindIndexStyle>
	);
}

export default FindIndex;
