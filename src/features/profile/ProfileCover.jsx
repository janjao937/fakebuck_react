import CoverImage from "./CoverImage";

const ProfileCover = ({coverImage})=>{
    return(
        <div className="max-w-6xl max-h-96 overflow-hidden mx-auto rounded-b-lg flex justify-center items-center">
            <CoverImage src={coverImage}/>
        </div>
    );
}

export default ProfileCover;