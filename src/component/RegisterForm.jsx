import RegisterInput from "../features/RegisterInput";

const RegisterForm = ({onClose})=>{

    const OnSignUpHandler =(e)=>{
        e.preventDefault();
        console.log("sign up");
        onClose();
    }
return(
    <form className="grid grid-cols-2 gap-x-3 gap-y-4 min-w-[8rem]">
        <div className=""> <RegisterInput placeholder="FirstName"/></div>

        <div className="">< RegisterInput placeholder="LastName"/></div>
        
        <div className="col-span-full"><RegisterInput placeholder="Email or Phone number"/></div>
        <div className="col-span-full"><RegisterInput type="password" placeholder="Password"/></div>
        
        <div className="col-span-full"><RegisterInput type="password" placeholder="Confirm password"/></div>

        <div className="mx-auto col-span-full">
            <button onClick={OnSignUpHandler} className="bg-green-500 rounded-lg text-white px-3 py-1.5 text-lg font-bold min-w-[8rem]">Sing up</button>
        </div>
        

    </form>
)
}

export default RegisterForm;