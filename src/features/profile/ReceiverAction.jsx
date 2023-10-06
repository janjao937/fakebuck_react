import { useParams } from "react-router-dom";
import ActionButton from "./ActionButton"
import axios from "axios";

const ReceiverAction =({setStatusWithAuthUser})=>{
    const {profileId} = useParams();
    
    const handleClickAccept = async()=>{
     
        try{
            await axios.patch("/friend/"+profileId);
            setStatusWithAuthUser("FRIEND");
        }catch(err){
            console.log(err);
        }

    }
    const handleClickReject = async()=>{
        try{
            await axios.delete(`/friend/`+profileId+"/reject");
            setStatusWithAuthUser("UNKNOWN");
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div className="flex gap-2">
            <ActionButton onClick={handleClickAccept}>Accept</ActionButton>
            <ActionButton onClick={handleClickReject}>Reject</ActionButton>
        </div>
    )
}

export default ReceiverAction;