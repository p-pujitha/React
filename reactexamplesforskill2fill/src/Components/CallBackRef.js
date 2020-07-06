import React, {Component} from 'react';

class CallBackRef extends Component{
    constructor(props){
        super(props);
        this.callbackref = null;
        this.setCallBackRef = (element) => {
            this.callbackref = element;
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    componentDidMount(){
        if(this.callbackref ){
            this.callbackref.focus()
        }
    }

    clickHandler(){
        alert(this.callbackref.value)
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.setCallBackRef} />
                <button onClick={this.clickHandler} >Click</button>
            </div>
        )
    }
}

export default CallBackRef;