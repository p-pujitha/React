import React from 'react'

function Title(){
    console.log("Rendering title")
    return(
        <div>
            Use CallBack hook
        </div>
    )
}

export default React.memo(Title)