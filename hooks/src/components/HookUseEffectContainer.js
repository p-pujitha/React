import React, { useState } from 'react'
import HookUseEffectExample2 from './HookUseEffectExample2'

function HookUseEffectContainer(){
    const [display, handleDispaly] = useState(true)
    return(
        <div>
            <button onClick={() => handleDispaly(!display)} >Toggle</button>
            {display && <HookUseEffectExample2/>}
        </div>
    )
}

export default HookUseEffectContainer