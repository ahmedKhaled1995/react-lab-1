import usePosts from "./hooks/usePosts";

import PostDetails from "./components/PostDetails";
import Posts from "./components/Posts";
import Header from "./components/Header";
import Input from "./components/Input";
import { useState } from "react";



function App() {

  const { posts, getUserData } = usePosts([])

  const [displayPost, setDisplayPost] = useState(false);
  const [postId, setPostId] = useState(0);

  const handleDisplayChange = (post_id) => {
    console.log("changed display " + post_id);
    setDisplayPost(!displayPost);
    setPostId(post_id);
  };

  const handleShowPosts = () => {
    console.log("clicked");
    setDisplayPost(false);
  };

  return (
    <div className="App">
      <Header title={"Blog Post"}></Header>
      <Input onSubmit={getUserData} />
      {displayPost ? <PostDetails postId={postId} handleShowPosts={handleShowPosts} /> : <Posts posts={posts} handleOnClick={handleDisplayChange} ></Posts>}

    </div>
  );
}

export default App;
