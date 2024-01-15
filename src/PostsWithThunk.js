import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from './features/Posts/slices/PostSlice';

function PostsWithThunk() {
    // const [allPosts, setAllPosts] = useState([]);

    // const getAllPosts = useCallback( async () => {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    //         data => data.json()
    //     )
    //     setAllPosts(res);
    // }, []);

    const {allPosts, loading} = useSelector((state) => state.postReducer)

    const dispatch = useDispatch();

    useEffect(()=>{

        // dispatch the action and handle data in store.
        dispatch(getPosts())

        // dispatch the data, resolve the response component as well.
        dispatch(getPosts()).then((res) => console.log('thakur: ', res.payload));

        // unwrap
        dispatch(getPosts())
        .unwrap()
    .then((originalPromiseResult) => {
        console.log('thakur1: ', originalPromiseResult)
    })
    .catch((rejectedValueOrSerializedError) => {
      // handle error here
      console.log('thakur2: ', rejectedValueOrSerializedError)
    })
    }, [dispatch])

    if(loading) return <>Loading......</>
   
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

export default PostsWithThunk;
