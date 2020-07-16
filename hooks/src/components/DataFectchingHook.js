import React, { useState, useEffect } from 'react';
import axios from 'axios'

function DataFetchingHook() {

    const [posts, fetchData] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                console.log(res.data)
                fetchData(res.data)
            }).catch((err) => {
                console.log(err)
            })
    },[])

    return (
        <div>
            {
                posts.map(post => <h1 key={post.id}>{post.title}</h1>)
            }
        </div>
    )
}

export default DataFetchingHook