import React from 'react';
import './BasicStyle.css'

function BasicStyle(props) {
    let primary = props.primary ? 'primary' : '';

    return (<div>
        <h1 className= {`${primary} myfont`}>StyleSheets</h1>
    </div>)
}

export default BasicStyle;