import React, { useState, useMemo } from 'react'

function Counter() {
    const [counter1, incrementCounter1] = useState(0)
    const [counter2, incrementCounter2] = useState(0)

    const inc1 = () => {
        incrementCounter1(counter1 + 1)
    }
    const inc2 = () => {
        incrementCounter2(counter2 + 1)
    }
    const isEvenOrOdd = useMemo(() => {
        var i = 0
        while (i < 1000000000) i++
        return (counter1 % 2 === 0)
    }, [counter1])
    return (
        <div>
            <div>
                <button onClick={inc1} >Increment Counter 1 : {counter1}</button>
                <span>{isEvenOrOdd ? 'even' : 'odd'}</span>
            </div>
            <div>
                <button onClick={inc2} >Increment Counter 2 : {counter2}</button>
            </div>
        </div>
    )
}

export default Counter