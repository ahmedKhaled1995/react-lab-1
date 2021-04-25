import { useEffect } from "react";
import usePosts from "../hooks/usePosts";

import Posts from "./Posts";
import Input from "./Input";

const Home = () => {

    const { posts, getUserData } = usePosts([]);

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <div>
            {/* <Input onSubmit={getUserData} /> */}
            <Posts posts={posts}></Posts>
        </div>
    )
}

export default Home;
