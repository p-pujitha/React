import React, {Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component{

    constructor(props){
        super(props);
        this.state = {
            name :'test'
        }
        console.log("Lifecycle A constructor")
        this.clickEvent = this.clickEvent.bind(this);
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifeCycle A getDerivedStateFromProps")
        return null;
    }

    componentDidMount(){
        console.log("LifeCycle A componentDidMount");
    }

    shouldComponentUpdate(){
        console.log("LifeCycle A shouldComponentUpdate")
        return true;

    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifeCycle A getSnapshotBeforeUpdate")
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("LifeCycle A componentDidUpdate")
    }
    clickEvent(){
        this.setState({name :"testing"})
    }
    render(){
        console.log("LifeCycle A Render method")
        return(
            <div>
                <h1> Mounting LifeCycle Methods</h1>
                <button onClick={this.clickEvent}>click</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA;