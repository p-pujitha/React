//Functional Component Example
import React from 'react';

// function Greet(){
//     return <h1> Hello Skill2Fill Students</h1>
// }


// const Greet = () => <h1>Hello Skill2Fill Students</h1>

// const Greet = (props) => {
//     // props.name = "test"; -> we cannot do this like that.
//     return(
//         <div>
//             <h1>Hello {props.name}</h1>
//             {props.children}
//         </div>
//     )
// }

//Destructuring props through parameter
// const Greet = ({ name }) => {
//     return (
//         <div>
//             <h1>Hello {name}</h1>
//         </div>
//     )
// }

//Destructuring props in function
const Greet = (props) => {
    const {name} = props;
    return (
        <div>
            <h1>Hello {name}</h1>
        </div>
    )
}
export default Greet;
