import { useState } from "react";
import { createContext } from "react";

import axios from "../config/axios";
import { addAccessToken, getAccessToken, removeAccessToken } from "../utils/local-storage";
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
        // try
        // {
            const res = await axios.post("/auth/login",credential);
            addAccessToken(res.data.accessToken);
            // console.log(res.data.user);
            setAuthUser(res.data.user);
        // }   //catch ที่ loginForm
        // catch(err)
        // {
        //     console.log(err);
        // }
    };
    const register =async(registerInputObj)=>{
        /*{firstName:"",
        lastName :"",
        emailOrMobile:"",
        password:"",
        confirmPassword:""
        }*/
    //   try{
        const res = await axios.post("/auth/register",registerInputObj);//ใส่ obj ได้เพราะตั้งชื่อตัวแปรในObjเหมือนbackend      
        addAccessToken(res.data.accessToken)
        setAuthUser(res.data.user);
        //catch ที่ registerForm
    //   }
    //    catch(err){
    //     console.log(err);
    //    }
    };

    const logout =()=>{
        removeAccessToken();
        setAuthUser(null);
    };
    
    const updateProfile = async(data)=>{
        const res = await axios.patch("/user",data);
        setAuthUser({...authUser,...res.data});
    }

    return <AuthContext.Provider value={{logout,register,login,authUser,initialLoading,updateProfile}}>{children}</AuthContext.Provider>
}



