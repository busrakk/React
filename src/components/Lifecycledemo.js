import {useEffect, useState} from "react";

function Lifecycledemo(){

    const [postId, setPostId] = useState(1)
    const [post, setPost] = useState(false)

    useEffect(() => {
        console.log('component render oldu.')
        return () => {
            console.log('component destroyed')
        }
    }, [])  

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/post/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
    let interval = setInterval(() => console.log('interval çalıştı! '), 1000)
    return () => {
        console.log('component destroyed')
        clearInterval(interval)
    }
    }, [postId])

    return(
        <div>
            <h3>{postId}</h3>
            {post && JSON.stringify(post)} {/*post detayı göster */}
            <button onClick={() => setPostId( postId => postId + 1)}>Sonraki konu</button>
            <hr/>
        </div>
    )
}

export default Lifecycledemo