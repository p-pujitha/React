import React from 'react'

// function ForwardRefChild(){
//     // return(
//     //     <div>
//     //         <input type="text" />
//     //     </div>
//     // )

    
// }

const ForwardRefChild = React.forwardRef((props,ref) => {
    return(
        <div>
            <input type="text" ref={ref} />
         </div>
    )
})

export default ForwardRefChild;