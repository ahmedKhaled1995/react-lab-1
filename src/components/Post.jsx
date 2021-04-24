const Post = (props) => {
    return (

        <div>
            <p>{props.post.userId}</p>
            <p>{props.post.title}</p>
        </div>
    )
}
export default Post
