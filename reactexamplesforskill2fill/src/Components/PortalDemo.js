import React from 'react';
import ReactDOM from 'react-dom'

function PortalDemo(){
    return ReactDOM.createPortal(
        <div>
            <h1>Hello world</h1>
        </div>,document.getElementById("root2")
    )
}

export default PortalDemo;