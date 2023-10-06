import { MessageIcon, ThumbsUpAltIcon, ThumbsUpIcon } from "../../icon/Icon";
import ActionButton from "./ActionButton";
import { useAuth } from "../../hooks/use-auth";

const PostFooter =({post})=>{
    const {totalLike,likes} = post;
    const {authUser} = useAuth();
    const isLiked = likes.find(el => el.userId === authUser.id);
    return (
        <div>
            <div className="flex justify-between pb-2 items-center">
            {totalLike>0 && (<div className="flex gap-1 items-center">
                    <div className="bg-blue-500 h-5 w-5 rounded-full flex items-center justify-center">
                    <ThumbsUpIcon/>
                    </div>
                    <span className="text-sm text-gray-500">{totalLike}</span>
                </div>
                )}

                <span className="text-sm text-gray-500 hover:underline cursor-pointer">8 comment</span>
            </div>
            <hr/>
            <div className="flex gap-1 py-1">

                <ActionButton active={isLiked}>
                    <div className="flex justify-center gap-2 items-center">
                        <ThumbsUpAltIcon className={isLiked ? 'fill-blue-600' : 'fill-gray-500'}/>
                        <span>Like</span>
                    </div>
                </ActionButton>

                <ActionButton>
                    <div className="flex justify-center gap-2 items-center">
                        <MessageIcon className="fill-gray-500"/>
                        <span>Comment</span>
                    </div>
                </ActionButton>
            </div>
        </div>
    )
}

export default PostFooter;