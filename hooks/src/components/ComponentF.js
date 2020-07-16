import React from 'react'
import { userContext, channelContext } from './HookUseContext';



function ComponentF() {
    return (
        <userContext.Consumer>
            {user => {
                return (
                    <channelContext.Consumer>
                        {institute =>
                            <div>
                                welcome {user}
                                <h1>Welcome to {institute}</h1>
                            </div>

                        }

                    </channelContext.Consumer>
                )
            }

            }
        </userContext.Consumer>
    )
}

export default ComponentF;