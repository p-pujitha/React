import React, { Component } from 'react';
import RegularComponent from './RegularComponent';
import PureComp from './PureComp';

class RegVsPureComp extends Component {

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
        console.log("Regvspurecomp")
        return (
            <div>
                <h1>RegVsPureComp Component</h1>
                <RegularComponent name={this.state.name}/>
                <PureComp name={this.state.name} />
            </div>

        )
    }
}

export default RegVsPureComp;