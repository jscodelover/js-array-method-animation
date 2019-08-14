import React from 'react';
import { CodePanelStyle } from './codepanel.style';

function CodePanel(props){
    const { children } = props;
    return (
        <CodePanelStyle>
            <div className="wrapper">
                { children }
            </div>    
        </CodePanelStyle>
    )
}

export default CodePanel;