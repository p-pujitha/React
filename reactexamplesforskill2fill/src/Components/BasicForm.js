import React,{Component} from 'react';

class BasicForm extends Component{

    constructor(props){
        super(props);
        this.state= {
            name : '',
            comment : '',
            course:''
        }
        this.changeName  = this.changeName.bind(this);
        this.changeComment =this.changeComment.bind(this);
        this.changeCourse = this.changeCourse.bind(this);
        this.submitForm = this.submitForm.bind(this)
    }
    
    changeName(event){
        this.setState({name : event.target.value})
    }

    changeComment(event){
        this.setState({comment : event.target.value})
    }

    changeCourse(event){
        this.setState({course : event.target.value})
    }

    submitForm(event){
        alert(this.state.name + this.state.comment)
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.submitForm}>
                <div>
                    <label>Username : </label>
                    <input type="text" value={this.state.name} onChange={this.changeName}></input>
                </div>
                <div>
                    <label>Comments :</label>
                    <textarea value ={this.state.comment} onChange={this.changeComment}></textarea>
                </div>
                <div>
                    <select value={this.state.course} onChange={this.changeCourse}>
                        <option value="Javascript">Javascript</option>
                        <option value="React JS">React Js</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default BasicForm;