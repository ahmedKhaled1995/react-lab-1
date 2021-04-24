import Post from "./Post"

const Posts = (props) => {
    //console.log(props.posts);
    return (
        <ul>
            {props.posts.map((post) => {
                return <li key={post.id}><Post post={post} handleOnClick={props.handleOnClick} />
                </li>
            })}
        </ul>
    )
}
export default Posts;
