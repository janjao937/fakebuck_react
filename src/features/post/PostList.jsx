import PostItem from "./PostItem";

const PostList =({allPost})=>{
    return <div className="flex flex-col gap-4">
        {allPost.map(e=>{
          return  <PostItem key={e.id} post={e}/>
        })}
    </div>  
}

export default PostList;