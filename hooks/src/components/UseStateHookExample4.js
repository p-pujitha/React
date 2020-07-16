import React, { useState } from 'react'

function UseStateHookExample4(){
    const [items, appendItem] = useState([]);
    const addItem =() =>{
        appendItem([...items, {
            id : items.length,
            number : Math.floor(Math.random() * 10) +1
        }])
    }

    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
            {
                items.map(item =>(
                    <li>{item.id} and {item.number}</li>
                ))
            }
            </ul>
        </div>
    )
}

export default UseStateHookExample4;