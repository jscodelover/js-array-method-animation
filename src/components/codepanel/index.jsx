import React from 'react';
import { CodePanelStyle } from './codepanel.style';

function CodePanel(props){
    const { children } = props;
    return (
        <CodePanelStyle>
            {/* { children } */}
            <div>var array1 = [1, 4, 9, 16];</div>
<div>const map1 = array1.map(x => x * 2);</div>

<div>console.log(map1);</div>
        </CodePanelStyle>
    )
}

export default CodePanel;