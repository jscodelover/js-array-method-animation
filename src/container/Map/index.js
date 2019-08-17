import React from 'react';
import CodePanel from '../../components/codepanel';
import { arrayMethod } from '../../utils/data';
import { MapStyle } from './map.style';

function Map() {
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
		</MapStyle>
	);
}

export default Map;
