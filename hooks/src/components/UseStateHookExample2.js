import React, { useState } from 'react'

function UseStateHookExample2() {
    const initialCount = 0;
    const [count, incrementCount] = useState(initialCount);

    const incrementCountBy5 = () => {
        for (var i = 0; i < 5; i++) {
            incrementCount(prevState => prevState + 1)
        }
    }
    return (
        <div>
            count :{ count}
            <button onClick={() => { incrementCount(initialCount) }}>Reset</button>
            <button onClick={() => incrementCount(prevState => prevState + 1)}>Increment</button>
            <button onClick={() => incrementCount(prevState => prevState - 1)}>Decrement</button>
            <button onClick={incrementCountBy5}>IncrementBy5</button>

        </div>
    )
}

export default UseStateHookExample2;