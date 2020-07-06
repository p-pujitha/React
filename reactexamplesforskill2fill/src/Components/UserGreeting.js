import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isUserLoggedIn: true
        }
    }
    render() {
        //Conditional Rendering 
        //1. If/else
        // if(this.state.isUserLoggedIn){
        //     return(<div>Welcome Student</div>)
        // }else{
        //     return(<div>Welcome Guest</div>)
        // }

        //2. Element rendering
        // var message
        // if (this.state.isUserLoggedIn) {
        //     message = <div>Welcome Student</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return (<div>{message}</div>)

        //3.Ternary Operator
        // return this.state.isUserLoggedIn ? <div>Welcome Student</div> :<div>Welcome Guest</div>
        
        //4.ShortCircuit operator
        return this.state.isUserLoggedIn && <div>Welcome Student</div>
    
    }
}

export default UserGreeting;