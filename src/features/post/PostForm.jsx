import { useRef } from "react";
import { useAuth } from "../../hooks/use-auth";
import { ImageIcon } from "../../icon/Icon";
import { useState } from "react";
import axios from "../../config/axios";
import Loading from "../../component/Loading";

const PostForm =({onSuccess})=>{
    const {authUser} = useAuth();
    const fileElement = useRef(null);
    const [file,setFile] = useState(null);
    const [message,setMessage] = useState("");
    const [loading,setLoading] = useState(false);

    const HandleSummitForm =async(e)=>{
        try{
            e.preventDefault();
            const formData = new FormData();
            if (file) {
                formData.append('image', file);
              }
              if (message) {
                formData.append('message', message);
              }
            setLoading(true);
            await axios.post("/post",formData);
            onSuccess();
        }
        catch(err){
            console.log(err);
        }
        finally{
            setLoading(false);
        }
    }
    return (
        
        <>
        {loading&&<Loading/>}
        <form onSubmit={HandleSummitForm} className="flex flex-col gap-4">
            <textarea value={message} onChange={e=>setMessage(e.target.value)} className="block w-full outline-none resize-none" rows="5" placeholder={`what's on your mind ${authUser.firstName}`}/>
            {file?(
            <div onClick={()=>fileElement.current.click()} className="cursor-pointer max-h-52 overflow-hidden">
                <img src={URL.createObjectURL(file)} alt="post"/>
            </div>
            ): <SelectImageButton onClick={()=>fileElement.current.click()}/>}
           
            <input type="file" className="hidden" ref={fileElement} onChange={(e)=>{
                if(e.target.files[0]){
                    setFile(e.target.files[0]);
                }
            }  
            }/>

           <CreateButton>Post</CreateButton>
        </form>
        </>
    )
}
const CreateButton=({children})=>{
    return(
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 w-full rounded-lg font-semibold">
            {children}
        </button>
    )
}
const SelectImageButton =({onClick})=>{
    return( 
    <div onClick={onClick} className="bg-gray-200 hover:bg-gray-300 rounded-lg py-12 flex flex-col items-center cursor-pointer gap-2.">
    <div className="bg-gray-400 h-10 w-10 rounded-full flex items-center justify-center">
        <ImageIcon/>
    </div>
    <span>Add Photo</span>
    </div>
)
}
export default PostForm;