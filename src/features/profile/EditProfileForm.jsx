import Avatar from "../../component/Avatar";
import CoverImage from "./CoverImage";
import PictureForm from "./PictureForm";
import { useAuth } from "../../hooks/use-auth";
import { useState } from "react";
import Loading from "../../component/Loading";



const EditProfileFrom =({onSuccess})=>{
    const {authUser,updateProfile} =useAuth();
    const [loading,setLoading] = useState(false);
    
    const uploadProfileImg=async(input)=>{
        try{
            const formData = new FormData();
            formData.append("profileImage",input);//add key //(key,file)
            setLoading(true);
            await updateProfile(formData);
            onSuccess();
        }
        catch(err){
           console.log(err);
        }
        finally{
            setLoading(false);
        }
        // axios.patch("/user");
     

        // await axios.patch("/user",formData);//jsonParse/formdata
        // await axios.patch("/user",formData);//multiParse/formdata
       
    }

    const uploadCoverImg =async(input)=>{
        try{
            const formData = new FormData();
            formData.append("coverImage",input);//add key //(key,file)
            setLoading(true);
            await updateProfile(formData);
            onSuccess();
        }
        catch(err){
           console.log(err);
        }
        finally{
            setLoading(false);
        }
    }

    return(
        <div className="flex flex-col gap-4">
             {loading && <Loading/>}
            <PictureForm onSave={uploadProfileImg} initialSrc={authUser.profileImage}title ="Profile picture">
                {(src,onClick)=>( 
                <div onClick={onClick}>
                   <Avatar src={src}className="h-40"/>
                </div>
                )}
            </PictureForm>
            
            <PictureForm  onSave={uploadCoverImg} initialSrc={authUser.coverImage} title ="Cover photo">{

            (src,onClick)=>{return(
               <div onClick={onClick} className="aspect-[3/1] overflow-hidden rounded-md flex items-center justify-center">
                <CoverImage src={src} />
               </div>)}
            }
            </PictureForm>
        </div>
    )
}

export default EditProfileFrom;