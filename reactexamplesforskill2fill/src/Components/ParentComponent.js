import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor() {
        super();
        this.state = {

        }
        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(child){
        alert("Greeting parent" + child)
    }
    render() {
        return (
            <div>
                <ChildComponent greetParent={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent;