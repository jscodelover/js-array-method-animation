import React from 'react';
import BlockStyle from './blocks.style';

function Block(props){
    const {items, children, fontSize} = props;
    return(
        <BlockStyle fontSize={fontSize}>
            {
                Array(items).fill(1).map((item, index) => <div key={item*index} className="box">{children}</div>)
            }
        </BlockStyle>
    );  
}

export default Block;