import React, { Component } from 'react'

class ClassUseEffectExample extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            name: ""
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log("Updating the value");
            document.title = "Clicked" + this.state.count + "times";
        }

    }
    componentDidMount() {
        document.title = "Clicked" + this.state.count + "times";
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                <button onClick={() => this.setState({ count: this.state.count + 1 })} >Click {this.state.count} times</button>
            </div>
        )
    }
}

export default ClassUseEffectExample;