import { useState } from "react";
import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";
import { useAuth } from "../hooks/use-auth";
import { toast } from 'react-toastify';


const LoginForms =()=>{
    const [input,setInput] = useState({
        emailOrMobile:"",
        password:""
    });

    const {login} = useAuth();//get {login}
    const handleSumitForm =(e)=>{
        e.preventDefault();
        login(input).catch(err=>toast.error(err.response.data.message));
    }
  
    return(
        <form onSubmit={handleSumitForm}>
            <div className="gird gap-4">
                <div className="my-4"><LoginInput onChange={e=>setInput({...input,emailOrMobile:e.target.value})} value ={input.emailOrMobile} placeholder =" email address or phone number"/></div>
             
                <div className="my-4"><LoginInput onChange={e=>setInput({...input,password:e.target.value})} value={input.password} type ="password" placeholder=" password"/></div>
            </div>
            <LoginButton/>
        </form>
    )
}



export default LoginForms;