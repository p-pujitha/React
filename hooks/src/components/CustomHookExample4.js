// import React, { useState } from 'react'
import React from 'react'
import CustomHookContainer from './CustomHookContainer';

function CustomHookExample4() {
    // const [count, setCount] = useState(0)
    // const increment = () => {
    //     setCount(prevCount => prevCount + 1)
    // }
    // const decrement = () => {
    //     setCount(prevCount => prevCount - 1)
    // }
    // const reset = () => {
    //     setCount(0)
    // }

    const [count, increment, decrement, reset] = CustomHookContainer(10,2)
    return (
        <div>
            Count : {count}<br />
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CustomHookExample4;