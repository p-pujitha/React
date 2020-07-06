import React from 'react';

const Hello = ()=>{
    // return <h1>Hello World</h1>
    return React.createElement('div',{id:'test' , className :'test2'},
    React.createElement('h1',null,'Hello World'))
}

export default Hello;