
import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initalState = {
    error: '',
    post: {},
    loading: true
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SUCCESS":
            return ({
                error : '',
                post : action.payload,
                loading :false
            })
        case "FAILED":
            return ({
                error : "Something went wrong",
                post : {},
                loading : false
            })
        default:
            return state;
    }
}
function UserReducerDataFetching2() {

    const [state, dispatch] = useReducer(reducer, initalState)
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then((res) => {
                dispatch({type : "SUCCESS" , payload : res.data})
            }).catch((err) => {
                dispatch({type :"FAILED"})
            })
    }, [])
    return (
        <div>
            {state.loading ? "Loading" : state.post.title}
            {state.error ? 'something went wrong' : null}
        </div>
    )
}

export default UserReducerDataFetching2;