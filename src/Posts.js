import React, { useState, useCallback, useEffect } from 'react';

function Posts() {
    const [allPosts, setAllPosts] = useState([]);

    const getAllPosts = useCallback( async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(
            data => data.json()
        )
        setAllPosts(res);
    }, []);

    useEffect(()=>{
        getAllPosts()
    }, [])

    return(
        <>
        <p>Rendering all the posts</p>
        {allPosts.length > 0 ? (
            allPosts.map( item => {
                return(<ul key={item.id}>
                    <li>{item.title}</li>
                </ul>)
            })
        ): 'loading..'}
        </>
    )
};

export default Posts;
