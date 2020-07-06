import React, {Component } from 'react';

class LifeCycleB extends Component{

    constructor(props){
        super(props);
        this.state = {

        }
        console.log("Lifecycle B constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifeCycle B getDerivedStateFromProps")
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

    render(){
        console.log("LifeCycle B Render method")
        return(
            <div>
                <h1> Mounting LifeCycle Methods</h1>
            </div>
        )
    }
}

export default LifeCycleB;