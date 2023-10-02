import { useState } from "react";
import Modol from "../component/Modol";
import RegisterForm from "../component/RegisterForm";

const RegisterContainer=()=>{
    const [isOpen,setIsOpen] = useState(false);
    const close =()=>setIsOpen(false);

    return(
        <div className="flex justify-center">
            <button onClick={()=>setIsOpen(true)} className="bg-orange-500 text-white rounded-md px-4 py-4 font-bold">create new account</button>
        
            <Modol isOpen ={isOpen} onClose={close} title="Sign up">
                <RegisterForm />
            </Modol>
        </div>
    )
}

export default RegisterContainer;