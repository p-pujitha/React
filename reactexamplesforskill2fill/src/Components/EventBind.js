import React, { Component } from 'react';

class EventBind extends Component {

    constructor() {
        super();

        this.state = {
            message: "Wow"
        }

        this.changeMessage = this.changeMessage.bind(this);
    }
    changeMessage() {
        this.setState({
            message: "Super"
        })

        console.log(this)
    }
    render() {
        return (
            <div>
                Message : {this.state.message} <br />
                {/* <button onClick={this.changeMessage.bind(this)}>ClickMe</button> */}
                {/* <button onClick={() => this.changeMessage()} >ClickMe</button> */}
                <button onClick={this.changeMessage} >Click Me</button>

            </div>
        )
    }
}

export default EventBind;