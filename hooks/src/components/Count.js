import React from 'react'

function Count({text,count}){
    console.log("Rendering" + text)
    return(
        <div>
            <h1> In count Component</h1>
            {text} = {count}
        </div>
    )
}

export default React.memo(Count)