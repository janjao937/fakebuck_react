import Avatar from "../../component/Avatar";
import CoverImage from "./CoverImage";
import PictureForm from "./PictureForm";

const EditProfileFrom =()=>{
    return(
        <div className="flex flex-col gap-4">
            <PictureForm title ="Profile picture">
                {(src,onClick)=>( 
                <div onClick={onClick}>
                   <Avatar src={src}className="h-40"/>
                </div>
                )}
            </PictureForm>
            
            <PictureForm title ="Cover photo">{

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