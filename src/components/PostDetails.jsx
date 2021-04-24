import { useState, useEffect } from 'react'
import Posts from './Posts';

const PostDetails = (props) => {

    const [postComments, setPostComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${props.postId}/comments`)
            .then((response) => response.json())
            .then((json) => setPostComments(json));

    }, []);

    return (
        <div>
            <button onClick={props.handleShowPosts}>Return</button>
            {postComments.map((post) => {
                return (<div key={post.id}>
                    <p>name: {post.name}</p>
                    <p>email: {post.email}</p>
                    <p>body: {post.body}</p>
                </div>)
            })}
        </div>
    )
}

export default PostDetails
