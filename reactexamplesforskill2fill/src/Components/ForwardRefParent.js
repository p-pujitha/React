import React, { Component } from 'react';
import ForwardRefChild from './ForwardRefChild';

class ForwardRefParent extends Component {

    constructor(props) {
        super(props);
        this.inputFocus = React.createRef()
        this.focusInput = this.focusInput.bind(this)
    }

    focusInput(){
        this.inputFocus.current.focus()
    }

    render() {
        return (
            <div>
                <ForwardRefChild ref={this.inputFocus} />
                <button onClick={this.focusInput} >Click</button>
            </div>
            )
    }
}

export default ForwardRefParent;