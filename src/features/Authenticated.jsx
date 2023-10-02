import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

export default function Authenticated({children}){
    const {authUser} = useAuth();//hook useContext
    if(!authUser){
        return <Navigate to="/login"/>
    }
    return children;
}