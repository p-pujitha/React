import React, { useReducer } from 'react'

const initialState = {
    initalNumber: 0,
    secondNumber: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment': return {
            ...state,
            initalNumber: state.initalNumber + action.value,
            secondNumber: state.secondNumber + action.value
        }
        case 'decrement': return {
            ...state,
            initalNumber: state.initalNumber - action.value,
            secondNumber: state.secondNumber - action.value

        }
        case 'reset': return initialState
        default: return state;
    }
}
function UseReducerHookExample2() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            Count :{count.initalNumber} <br />
            Second Count  : {count.secondNumber} <br />
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>IncrementBy5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>DecrementBy5</button>
            <button onClick={() => dispatch({ type: 'reset' })}> Reset</button>
        </div>
    )
}

export default UseReducerHookExample2