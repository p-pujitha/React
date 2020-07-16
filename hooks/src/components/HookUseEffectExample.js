import React, { useState, useEffect } from 'react'

function HookUseEffectExample() {

    const [count, incrementCount] = useState(0)
    const [name, changeName] = useState("")

    useEffect(() => {
        console.log("updating the value")
        document.title = "clicked " + count + " times"
    },[count])
    return (
        <div>
            <input type="text" value={name} onChange={(e) => changeName(e.target.value)} />
            <button onClick={() => { incrementCount(count + 1) }}> clicked {count} times</button>
        </div>
    )
}

export default HookUseEffectExample;