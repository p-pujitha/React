import React , {Component } from 'react';
class Welcome extends Component{
    render(){
        // return(<div>
        //     <h1>Hello Students</h1>
        // </div>)

        // return(<div>
        //     <h1>Hello {this.props.name}</h1>
        // </div>)

        //destructuring props
        const {name} = this.props;
        return(<div>
            <h1>Hello {name}</h1>
        </div>)
    }
}

export default Welcome;