import React from 'react'
import ComponentC from './ComponentC'
export const userContext = React.createContext()
export const channelContext = React.createContext()

function HookUseContext() {
    return (
        <userContext.Provider value="students">
            <channelContext.Provider value="skill2fill">
                <ComponentC />
            </channelContext.Provider>
        </userContext.Provider>
    )
}

export default HookUseContext;