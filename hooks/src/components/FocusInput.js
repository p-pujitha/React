import React, { useRef, useEffect } from 'react'

function FocusInput() {
    const useref = useRef(null)

    useEffect(() => {
        useref.current.focus()
    })
    return (
        <div>
            <input ref={useref} type="text" />
        </div>
    )
}

export default FocusInput