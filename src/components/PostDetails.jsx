import { useState, useEffect } from 'react'
import Post from './Post';

const PostDetails = (props) => {

    const [post, setPost] = useState([]);
    const [postComments, setPostComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${props.postId}/comments`)
            .then((response) => response.json())
            .then((json) => setPostComments(json));

        fetch(`https://jsonplaceholder.typicode.com/posts/${props.postId}`)
            .then((response) => response.json())
            .then((json) => setPost(json));

    }, []);

    return (
        <div>
            <button onClick={props.handleShowPosts}>Return</button>
            <Post post={post} showButton={false} />
            <h2>Comments</h2>
            {postComments.map((post) => {
                return (<div key={post.id}>
                    <p>name: {post.name}</p>
                    <p>email: {post.email}</p>
                    <p>body: {post.body}</p>
                    <hr />
                </div>)
            })}
        </div>
    )
}

export default PostDetails
