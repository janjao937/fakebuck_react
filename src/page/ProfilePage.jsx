import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

import ProfileCover from "../features/profile/ProfileCover";
import ProfileInfo from "../features/profile/ProfileInfo";
import axios from "axios";
import { useAuth } from "../hooks/use-auth";

export default function ProfilePage(){
    const [userProfile,setUserProfile] = useState(null);
    const {profileId} = useParams();

    const {authUser} = useAuth();

    useEffect(()=>{
        
    if(authUser.id===+profileId){
        setUserProfile(authUser);
    }else{
        
    
    axios.get("/user/"+profileId)
    .then(res=>{
        setUserProfile(res.data.user);
    })
    .catch(err=>console.log(err));
    }

    },[profileId]);

    return( 
    <div className="bg-gradient-to-b from-back-200 to white shadow pb-4">
            {userProfile? (<><ProfileCover coverImage = {userProfile?.coverImage}/>
            <ProfileInfo userProfile={userProfile}/></>):<h1 className="text-center p8 text-3xl">404 Error</h1>}
    </div>
    );
}