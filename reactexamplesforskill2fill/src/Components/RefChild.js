import React, {Component} from 'react'

class RefChild extends Component{
    constructor(props){
        super(props);
        this.childref = React.createRef()
    }

    focusInput(){
        this.childref.current.focus()
    }
    render(){

        return(
            <div>
                <input type="text" ref={this.childref} />
            </div>
        )

    }
}

export default RefChild;