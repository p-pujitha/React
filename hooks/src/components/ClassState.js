import React, { Component } from 'react'

export default class ClassState extends Component {
    constructor(){
        super();
        this.state={
            count: 0
        }
        this.incrementCount= this.incrementCount.bind(this)
    }
    incrementCount(){
        this.setState({count : this.state.count +1})
    }
    render() {
        return (
            <div>
                <button onClick={this.incrementCount}>click {this.state.count} times</button>
            </div>
        )
    }
}
