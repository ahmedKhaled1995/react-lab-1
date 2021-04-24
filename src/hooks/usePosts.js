import { useState, useCallback, useEffect } from "react";

const useTasks = (initialTasks) => {

    const [posts, setPosts] = useState(
        initialTasks
    );

    // useEffect(() => {
    //     // Your logic
    //     // This will return all the posts that belong to the first user
    //     fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    //         .then((response) => response.json())
    //         .then((json) => console.log(json));

    // }, []);

    const getUserData = (user_id_obj) => {
        const user_id = user_id_obj.user_id
        // console.log(user_id);
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)
            .then((response) => response.json())
            .then((json) => {
                //console.log(json);
                setPosts(json);
            });
    };


    return (
        {
            posts,
            getUserData,
        }
    );
}

export default useTasks;
