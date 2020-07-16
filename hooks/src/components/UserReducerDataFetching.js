import React, { useState, useEffect } from 'react'
import axios from 'axios'

function UserReducerDataFetching() {
    const [loading, setLoding] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then((res) => {
                console.log(res.data)
                setLoding(false)
                setPost(res.data)
                setError('')
            }).catch((err) => {
                console.log(err)
                setLoding(false)
                setPost({})
                setError(err)
            })
    }, [])
    return (
        <div>
            {loading ? "Loading" : post.title}
            {error ? 'something went wrong' : null}
            {/* {post ? post : null} */}
        </div>
    )
}

export default UserReducerDataFetching;