import React, { useState, useEffect } from 'react'

function HookUseEffectCounter() {
    const [count, intervalManage] = useState(0)



    useEffect(() => {
        const tick = () => {
            intervalManage(count + 1)
        }
        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [count])
    return (
        <div>
            {count}
        </div>
    )
}

export default HookUseEffectCounter