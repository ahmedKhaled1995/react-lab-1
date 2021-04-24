const Post = (props) => {


    return (

        <div>
            <p>{props.post.userId}</p>
            <p>{props.post.title}</p>
            <button onClick={(e) => props.handleOnClick(props.post.id)} >Show</button>
        </div>
    )
}
export default Post
