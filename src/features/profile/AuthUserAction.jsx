import { useState } from "react";
import {PenIcon} from "../../icon/Icon";
import Modol from "../../component/Modol";
import ActionButton from "./ActionButton";
import EditProfileFrom from "./EditProfileForm";

const AuthUserAction =()=>{
    const [isOpen,setIsOpen] = useState(false);
    
    return(
        <div>
            <ActionButton onClick={()=>setIsOpen(true)}>
            <PenIcon/>
            <span className="font-semibold">Edit Profile</span>
            </ActionButton>
            <Modol onClose={()=>setIsOpen(false)} isOpen={isOpen} title="Edit profile" maxWidth ={44}>
                <EditProfileFrom onSuccess={()=>setIsOpen(false)}/>
            </Modol>
        </div>
    )
}

export default AuthUserAction;