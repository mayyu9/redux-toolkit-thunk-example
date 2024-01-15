import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, addPosts } from './features/Posts/slices/PostSlice';

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

    const post = {
        "userId": 11123,
        "id": 11123,
        "title": "Test By Thakur",
        "body": "Test By Thakur"
    };

    useEffect(()=>{

        // dispatch the action and handle data in store.
        dispatch(getPosts())

        // commented below logic but it is working fine
    //     // dispatch the data, resolve the response component as well.
    //     dispatch(getPosts()).then((res) => console.log('thakur: ', res.payload[0]));

    //     // unwrap
    //     dispatch(getPosts())
    //     .unwrap()
    // .then((originalPromiseResult) => {
    //     console.log('thakur1: ', originalPromiseResult)
    // })
    // .catch((rejectedValueOrSerializedError) => {
    //   // handle error here
    //   console.log('thakur2: ', rejectedValueOrSerializedError)
    // })
    }, [dispatch])

    const addPostHandler = () => {
        dispatch(addPosts(post)).then(() => dispatch(getPosts()))
    }

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
        <button type='button' onClick={addPostHandler}>Add post</button>
        </>
    )
};

export default PostsWithThunk;
