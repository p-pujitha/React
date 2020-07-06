import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.refHandler = this.refHandler.bind(this);

    }
    componentDidMount() {
        console.log(this.inputRef);
        this.inputRef.current.focus();
    }
    refHandler() {
        alert(this.inputRef.current.value);
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <button onClick={this.refHandler} >Click </button>
            </div>
        )
    }
}

export default RefsDemo;