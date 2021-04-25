import { useState, useContext } from "react";
import LoginContext from "../LoginContext";

import axios from "axios";

const useTasks = (initialTasks) => {
    const auth = useContext(LoginContext);
    const [posts, setPosts] = useState(initialTasks);

    const getUserData = async () => {
        const userId = auth.userId;
        const userData = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const userPosts = userData.data
        setPosts(userPosts);
    };


    return (
        {
            posts,
            getUserData,
        }
    );
}

export default useTasks;
