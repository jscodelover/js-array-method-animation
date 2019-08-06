import React from 'react';
import { CodePanelStyle } from './codepanel.style';

function CodePanel(props){
    const { children } = props;
    return (
        <CodePanelStyle>
            { children }
        </CodePanelStyle>
    )
}

export default CodePanel;