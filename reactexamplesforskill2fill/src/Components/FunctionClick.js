import React from 'react';

function FunctionClick(){

    function clickMe(){
        console.log("Button Clicked");
    }
    return (
        <div>
            {/* we should not give paranthesis to the function because it will call automatically , so that event will not get captured */}
            {/* <button onClick = {clickMe()}> Click Me</button> */}
            <button onClick = {clickMe}> Click Me</button>

        </div>
    )
}

export default FunctionClick;