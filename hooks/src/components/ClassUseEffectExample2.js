import React, { Component } from 'react'

class ClassUseEfectExample2 extends Component {
    constructor() {
        super();
        this.state = {
            x: '',
            y: ''
        }
    }
    logMousePosition = (e) => {
        this.setState({ x: e.clientX, y: e.clientY })
    }
    componentDidMount() {
        window.addEventListener('mousemove', this.logMousePosition)
    }

    componentWillUnmount(){
        window.removeEventListener('mousemove', this.logMousePosition)
    }
    render() {
        return (
            <div>
                x : {this.state.x} , y : {this.state.y}
            </div>
        )
    }
}

export default ClassUseEfectExample2;