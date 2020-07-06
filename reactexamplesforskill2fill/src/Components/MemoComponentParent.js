import React, { Component } from 'react';
import MemoComponentChild from './MemoComponentChild';

class MemoComponentParent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "test"
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ name: 'Testing' })
        }, 2000)
    }
    render() {
        console.log("MemoParentComponent")
        return (
            <div>
                <h1>Memo Parent Component</h1>
                <MemoComponentChild name={this.state.name} />
            </div>

        )
    }
}

export default MemoComponentParent;