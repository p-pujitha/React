import React,{Component} from 'react';

class ErrorBoundaryChild extends Component{
    
    render(){
        if(this.props.hero ==="Hero3"){
            throw new Error("It is not fine")
        }
        return(
            <div>
                <h1>{this.props.hero}</h1>
            </div>
        )
    }
}
export default ErrorBoundaryChild 