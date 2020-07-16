// import React, { useState, useEffect } from 'react'
import React, { useState } from 'react'
import CustomHookImport from './CustomHookImport'


function CustomHookExample2(){
    const [count, setCount]  = useState(0)

    // useEffect(()=>{
    //     document.title = "Clicked " + count + " times"
    // },[count])

    CustomHookImport(count)
    return(
        <div>
            <button onClick={() => setCount(count + 1)}>Click : {count} </button>
        </div>
    )
}

export default CustomHookExample2;