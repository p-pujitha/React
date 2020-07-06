import React, { Component } from 'react';

class SetStateExaplanation extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    incrementBy1() {
        // this.state.count = this.state.count + 1;
        // console.log("count :" + this.state.count)

        // this.setState({ count: this.state.count + 1 });
        // console.log("count : " +this.state.count);

        // this.setState({ count: this.state.count + 1 }, () => {
        //     console.log("Callback value :" + this.state.count)
        // })
        // console.log("count :" + this.state.count)

        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
    }

    incrementBy5() {
        this.incrementBy1();
        this.incrementBy1();
        this.incrementBy1();
        this.incrementBy1();
        this.incrementBy1();


    }

    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={() => this.incrementBy1()}>Increment Count By 1</button>
                <button onClick={() => this.incrementBy5()}>Increment Count By 5</button>
            </div>
        )
    }
}

export default SetStateExaplanation;