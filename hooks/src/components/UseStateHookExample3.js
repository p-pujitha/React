import React, { useState } from 'react'
// import UseStateHookExample2 from './UseStateHookExample2'

function UseStateHookExample3() {
    const [name, handleChange] = useState({ firstName: '', lastName: '' })

    return (<div>
        FirstName : <input type="text" value={name.firstName} onChange={e => handleChange({ ...name, firstName: e.target.value })} /><br />
        LastName : <input type="text" value={name.lastName} onChange={e => handleChange({ ...name, lastName: e.target.value })} />
        <h1>Entered FirstName : {name.firstName}</h1>
        <h1>Entered LastName : {name.lastName}</h1>
        <h1>{JSON.stringify(name)}</h1>
    </div>)
}

export default UseStateHookExample3;