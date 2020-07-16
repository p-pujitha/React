import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function DataFetchingHook2(){

    const [ post, setPost] = useState([])
    const[id, setId] = useState(1)
    const[buttonId, buttonSetId] = useState(1)

    const changeId=()=>{
        buttonSetId(id)
    }

     useEffect(()=>{
        Axios.get("http://jsonplaceholder.typicode.com/posts/"+buttonId)
        .then((res) =>{
            setPost(res.data)
        })
        .catch((err) =>{
            console.log(err)
        })
    },[buttonId])

    return(
        <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            <button onClick={changeId}>Find Value</button>
            {post.title}
        </div>
    )
}
export default DataFetchingHook2