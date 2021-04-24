import Post from "./Post"

const Posts = (props) => {
    return (
        <ul>
            {props.posts.map((post)=>{
                <li><Post post={post}/></li>
            })}
        </ul>
    )
}
export default Posts
