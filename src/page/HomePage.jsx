import { useEffect } from "react";
import CreatePostButton from "../features/post/CreatePostButton";
import PostList from "../features/post/PostList";
import axios from "../config/axios";
import { useState } from "react";
export default function HomePage(){
    const [allPost,setAllPost] = useState([]);


    useEffect(()=>{
        axios.get("/post/friend").then(res=>{
            setAllPost(res.data.posts)
        }).catch((err)=>{
            console.log(err);
        });
    },[]);


    return (
    <div className="max-w-[44rem] mx-auto px-8 py-6 flex flex-col gap-4">
            <CreatePostButton/>
            <PostList allPost = {allPost}/>
    </div>
    )
}