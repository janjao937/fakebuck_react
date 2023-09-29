import { useState } from "react";
import { createContext } from "react";

import axios from "../config/axios";
import { addAccessToken } from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({children}){
    const [authUser,setAuthUser] = useState({});
    
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

    return <AuthContext.Provider value={{login}}>{children}</AuthContext.Provider>
}

