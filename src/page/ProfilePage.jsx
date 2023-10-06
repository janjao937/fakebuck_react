import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

import ProfileCover from "../features/profile/ProfileCover";
import ProfileInfo from "../features/profile/ProfileInfo";
import axios from "../config/axios";
import { useAuth } from "../hooks/use-auth";

export default function ProfilePage(){
    const [statusWithAuthUser,setStatusWithAuthUser] =useState("");
    const [userProfile,setUserProfile] = useState({});
    const {profileId} = useParams();
    const [profileFriends,setProfileFrriends] = useState([]);
    const {authUser} = useAuth();
    const isAuthUser = authUser.id === +profileId;

    useEffect(()=>{
        
    axios.get(`/user/${profileId}`).then(res=>{
        setUserProfile(res.data.user);
        setStatusWithAuthUser(res.data.status);  
        setProfileFrriends(res.data.friends);   
    })
    .catch(err=>{
        console.log(err);
    });
    
    },[profileId]);

    return( 
    <div className="bg-gradient-to-b from-back-200 to white shadow pb-4">
            {userProfile? (<><ProfileCover coverImage = {isAuthUser?authUser.coverImage:userProfile.coverImage}/>

            <ProfileInfo 
            statusWithAuthUser={statusWithAuthUser} 
            setStatusWithAuthUser={setStatusWithAuthUser} 
            userProfile={isAuthUser?authUser:userProfile}
            profileFriends={profileFriends}/>
            </>):<h1 className="text-center p8 text-3xl">404 Error</h1>}
    </div>
    );
}