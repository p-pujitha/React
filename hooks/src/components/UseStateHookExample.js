import React, { useState } from 'react'

function UseStateHookExample() {
    const [count, incrementCount] = useState(0)
    return (
        <div>
            <button onClick={() => incrementCount(count + 1)} >clicked {count} times</button>
        </div>
    )
}

export default UseStateHookExample;