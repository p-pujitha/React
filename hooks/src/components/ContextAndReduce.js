import React, { useReducer } from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB';
import ComponentC2 from './ComponentC2'

export const CountContext = React.createContext()

const initialValue = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment': return state + 1
        case 'decrement': return state - 1
        case 'reset': return initialValue
        default: return state
    }
}

function ContextAndReduce() {
    const [count, dispatch] = useReducer(reducer, initialValue);
    return (
        <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
            <div>
                Count : {count} <br />
                <ComponentA />
                <ComponentB />
                <ComponentC2 />
            </div>
        </CountContext.Provider>
    )
}

export default ContextAndReduce