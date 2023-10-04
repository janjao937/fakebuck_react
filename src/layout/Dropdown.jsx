import { Link } from "react-router-dom";
import Avatar from "../component/Avatar";
import {RightFromBracketIcon} from "../icon/Icon";
import { useState } from "react";
import {useAuth} from "../hooks/use-auth"
import { useEffect } from "react";
import { useRef } from "react";


const Dropdown =()=>{
    const [isOpen ,setIsOpen] = useState(false);
    const dropdownRef = useRef(null);//ref.current = null
    const {logout,authUser} = useAuth();//authUser={id,firstName,lastName,profileImg.coverImg}
    useEffect(()=>{
      
       const eventDom =(e)=>{
       if(!dropdownRef.current.contains(e.target))
       {
            setIsOpen(false);
       }
       
        
       }

        document.addEventListener("click",eventDom);
        
        return ()=> document.removeEventListener("click",eventDom);
    },[]);

    return (
        <div className="relative" ref={dropdownRef}>
            {/* dropdownRef.current =  <div className="relative"> */}
            <div className="cursor-pointer" onClick={()=>setIsOpen(!isOpen)} >
                <Avatar src={authUser.profileImage}/>
            </div>

            {isOpen&&(
            <div className="h-52 w-96 absolute bg-white right-0 translate-y-1 border rounded-xl shadow-xl">
                <Link onClick={()=>setIsOpen(false)} to={`/profile/${authUser.id}`}>
                    <div className="flex gap-4 p-2 items-center rounded-xl hover:bg-gray-100">

                        <Avatar className="h-14" src={authUser.profileImage}/>
                        <div>
                            <div className="font-semibold">{authUser.firstName} {authUser.lastName}</div>
                            <div className="text-sm text-gray-500">See your profile</div>
                        </div>

                    </div>
                </Link>
                <hr className="m-2 border"/>
                <div onClick={logout} className="flex gap-4 p-2 items-center cursor-pointer hover:bg-gray-100 rounded-xl">

                    <div className="bg-gray-300 h-9 aspect-square rounded-full flex justify-center items-center ">
                        <RightFromBracketIcon/>
                    </div>
                    <div className="font-semibold text-sm">Logout</div>

                </div>
            </div>
)}
        </div>
    )
}

export default Dropdown;