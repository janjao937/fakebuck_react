import { useState } from "react";
import RegisterInput from "../features/RegisterInput";
import Joi from "joi";
import InputErrorMessage from "../features/InputErrorMessage";
import { useAuth } from "../hooks/use-auth";
import { toast } from 'react-toastify';

//Validate
//error =>error notError => undifined
const registerSchema = Joi.object(
    {
        firstName: Joi.string().trim().required(),
        lastName: Joi.string().trim().required(),
        emailOrMobile: Joi.alternatives([
            Joi.string().email({tlds:false}),
            Joi.string().pattern(/^[0-9]{10}$/).required(),
        ]),

        password: Joi.string().pattern(/^[a-zA-Z0-9]{6,30}$/).trim().required(),

        confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required()
    }
);
const validateRegister = (input)=>{
    const {error} = registerSchema.validate(input,{abortEarly:false});
    if(error){
        const result = error.details.reduce((acc,element)=>{
            const {message,path} = element;
            acc[path[0]]=message;
            return acc;
        },{});
        return result;
    }
}

const RegisterForm = ()=>{

    const {register} = useAuth();
    
    // const [error,setError] =useState({
    //     firstName:"firstName Error",
    //     lastName:"lastName Error",
    //     emailOrMobile:"emailOrMobile Error",
    //     password:"password Error",
    //     confirmPassword:"confirmPassword Error",
    // });
    const [error,setError] =useState({});
   
    const [input,setInput]=useState({
        firstName:"",
        lastName :"",
        emailOrMobile:"",
        password:"",
        confirmPassword:""
    });
    const HandleChangeInput = (e)=>{
        setInput({...input,[e.target.name]:e.target.value});
    }

    const OnSumitForm =(e)=>{
        e.preventDefault();
        const result = validateRegister(input);
        if(result){
            return setError(result);
        }
        setError({});

        register(input).catch((err)=> {
             toast.error(err.response.data.message);
            }
        );
    }

return(
    <form onSubmit={OnSumitForm}  className="grid grid-cols-2 gap-x-3 gap-y-4 min-w-[8rem]">
        <div>
        <div className=""> <RegisterInput hasError={error.firstName} name="firstName"  HandleChangeInput={HandleChangeInput}  value={input.firstName} placeholder="FirstName"/></div>
        {error.firstName?<InputErrorMessage message={error.firstName}/>:""}
        </div>

        <div>
            <div className="">  <RegisterInput hasError={error.lastName} name="lastName"  HandleChangeInput={HandleChangeInput}  value={input.lastName}  placeholder="LastName"/></div>
            {error.lastName?<InputErrorMessage message={error.lastName}/>:""}
        </div>

    
        <div className="col-span-full"><RegisterInput hasError={error.emailOrMobile} name="emailOrMobile"  HandleChangeInput={HandleChangeInput}  value={input.emailOrMobile} placeholder="Email or Phone number"/></div>
        {error.emailOrMobile?<InputErrorMessage message={error.emailOrMobile}/>:""}

      
        <div className="col-span-full"><RegisterInput hasError={error.password} name="password"  HandleChangeInput={HandleChangeInput}  value={input.password}  type="password" placeholder="Password"/></div>
        {error.password?<InputErrorMessage message={error.password}/>:""}
       
       
     
        <div className="col-span-full"><RegisterInput hasError={error.confirmPassword} name="confirmPassword"  HandleChangeInput={HandleChangeInput}  value={input.confirmPassword}  type="password" placeholder="Confirm password"/></div>
        {error.confirmPassword?<InputErrorMessage message={error.confirmPassword}/>:""}
        
     
        

        <div className="mx-auto col-span-full">
            <button className="bg-green-500 rounded-lg text-white px-3 py-1.5 text-lg font-bold min-w-[8rem]">Sing up</button>
        </div>
        

    </form>
)
}

export default RegisterForm;