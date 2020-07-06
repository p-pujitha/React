import React from 'react'

function MemoComponentChild(props){
    console.log("Child Memo" + props.name)

    return(
        <div>Child Memo{props.name}</div>
    )
}

export default React.memo(MemoComponentChild);