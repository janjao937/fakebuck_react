import { useParams } from "react-router-dom";
import ActionButton from "./ActionButton";
import axios from "../../config/axios";

const FriendAction =({setStatusWithAuthUser})=>{
    const {profileId} = useParams();
    const handleClickUnfriend = async()=>{
        try{
            await axios.delete("/friend/"+profileId+"/unfriend");
            setStatusWithAuthUser("UNKNOWN");
        }   
        catch(err){
            console.log(err);
        }
    }
    return(
        <ActionButton onClick={handleClickUnfriend}>
            Unfriend
        </ActionButton>
    )
}

export default FriendAction;