import React, {Component} from 'react';
import RefChild from './RefChild';

class RefParent extends Component{
    constructor(props){
        super(props);
        this.referToChild = React.createRef()
        this.referChildMethod = this.referChildMethod.bind(this)
    }

    referChildMethod(){
        this.referToChild.current.focusInput()
    }

    render(){
    return(
        <div>
            <RefChild ref={this.referToChild} />
            <button onClick={this.referChildMethod} >Click</button>
        </div>
    )
    }
}

export default RefParent;