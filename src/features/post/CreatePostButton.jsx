import { Link } from "react-router-dom";
import Avatar from "../../component/Avatar";
import Modal from "../../component/Modol";
import { useAuth } from "../../hooks/use-auth";
import PostForm from "./PostForm";
import { useState } from "react";

const Button =({children,onClick})=>{
    return (<div onClick={onClick} className="bg-green-200 hover:bg-gray-300 flex-1 rounded-full text-gray-500 px-3 py-1.5 cursor-pointer flex">
        {children}
    </div>)
}

const CreatePostButton =()=>{
    const {authUser} = useAuth();
    const [isOpen,setIsOpen] = useState(false);

    return (
        <div className="bg-white border rounded-lg px-4 py-3 shadow flex gap-2">
        <Link to={"/profile/"+authUser.id}>
            <Avatar src={authUser.profileImage}/>
        </Link>
        <Button onClick={()=>setIsOpen(true)}>
            What&#39;s on your mind, {authUser.firstName}
        </Button>
        <Modal title="CreatePost" isOpen={isOpen} maxWidth={32} onClose={()=>setIsOpen(false)}>
            <PostForm onSuccess={()=>setIsOpen(false)}/>
        </Modal>
    </div>
    )
}
 
export default CreatePostButton;
