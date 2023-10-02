import { useState } from "react";
import { createContext } from "react";

import axios from "../config/axios";
import { addAccessToken, getAccessToken } from "../utils/local-storage";
import { useEffect } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({children}){
    const [authUser,setAuthUser] = useState(null);
    const [initialLoading,setInitialLoading] = useState(true);

    //useEffect ใช้ async function โดยตรงไม่ได้
    useEffect(()=>{

        if(getAccessToken()){
             //catch ไม่ต้องมีเพราะดักที่ 401 ที่ axios.js แล้ว
        axios.get("/auth/me").then(res=>{
            setAuthUser(res.data.user);
        }).finally(()=>setInitialLoading(false));
        }
        else setInitialLoading(false);
       
        
    },[]);
    
    const login=async(credential)=>{
        try
        {
            const res = await axios.post("/auth/login",credential);
            addAccessToken(res.data.accessToken);
            // console.log(res.data.user);
            setAuthUser(res.data.user);
        }
        catch(err)
        {
            console.log(err);
        }
    };

    return <AuthContext.Provider value={{login,authUser,initialLoading}}>{children}</AuthContext.Provider>
}

