import React, { useReducer } from 'react'

const initalState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment': return state + 1;
        case 'decrement': return state - 1;
        case 'reset': return initalState;
        default: return state
    }
}


function UserReducerHookExample3() {
    const [count, dispatch] = useReducer(reducer, initalState)
    const [count2, dispatch2] = useReducer(reducer, initalState)
    return (
        <div>
            <div>Count  : {count} </div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <div>
                <div>Count  : {count2} </div>
                <button onClick={() => dispatch2('increment')}>Increment</button>
                <button onClick={() => dispatch2('decrement')}>Decrement</button>
                <button onClick={() => dispatch2('reset')}>Reset</button>
            </div>
        </div>
    )
}

export default UserReducerHookExample3;