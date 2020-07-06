import React from 'react';

function InlineStyle() {

    const inlineStyling = {
        color: 'blue',
        fontSize: '89px'
    }
    return (<div>
        <h1 style={inlineStyling}>Inline Style</h1>
    </div>)
}
export default InlineStyle;