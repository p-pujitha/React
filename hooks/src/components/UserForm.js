// import React, { useState } from 'react'
import React from 'react'
import UseInput from './UseInput'

function UserForm(){
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')

    const [firstName, bindFirstName, resetFirstName] = UseInput('')
    const [lastName, bindLastName, resetLastName] = UseInput('')

    const submitHandler = (e) =>{
        e.preventDefault()
        alert(firstName + " and " + lastName)
        resetFirstName()
        resetLastName()
        
    }
    return(
        <form onSubmit={submitHandler}>
            <div>
                <label>FirstName  : </label>
                {/* <input type="text" onChange={(e) => setFirstName(e.target.value)} /> */}
                <input type="text" {...bindFirstName} />
            </div>
            <div>
                <label>LastName :</label>
                {/* <input type="text" onChange={(e) => setLastName(e.target.value)} /> */}
                <input type="text" {...bindLastName} />
            </div>
            <button>submit</button>
        </form>
    )
}

export default UserForm;