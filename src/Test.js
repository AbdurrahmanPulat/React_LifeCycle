import React from 'react'
import { useEffect, useState } from 'react'

const Test = () => {

    const [postId, setPostID] = useState(1)
    const [post, setPost] = useState(false)
    /*
        useEffect (()=>{
            console.log("component rendered")
        })
    */


    useEffect(() => {
        console.log("work when the component is the first installed")
        let Interval= setInterval(() => console.log("Interval worked!"), 1000)
        return () => {
            console.log("Component Destroyed")
            clearInterval(Interval)
        }
    }, [])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [postId])
    return (
        <div>
            <h3>{postId}</h3>
            {post && JSON.stringify(post)}
            <button onClick={() => setPostID(postId => postId + 1)}>Next </button>
            <hr />
            Test
        </div>
    )
}

export default Test
