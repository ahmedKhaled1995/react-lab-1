import { useState, useCallback, useEffect } from "react";

const useTasks = (initialTasks) => {

    const [posts, setPosts] = useState(
        initialTasks
    );

    useEffect(() => {
        // Your logic
        // This will return all the posts that belong to the first user
        fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
            .then((response) => response.json())
            .then((json) => console.log(json));

    }, []);


    return (
        {
            posts,
        }
    );
}

export default useTasks;
