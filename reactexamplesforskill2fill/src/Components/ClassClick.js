import React, { Component } from 'react';

class ClassClick extends Component {
    render() {

        function clickMe() {
            console.log("Button Clicked");
        }
        return (
            <div>
                <button onClick={clickMe}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick;