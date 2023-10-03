const RegisterInput =({type="text",placeholder,value,name,HandleChangeInput,hasError})=>{
return <input name ={name} onChange={HandleChangeInput} value ={value} placeholder={placeholder} type={type} className={`block w-full border rounded-md outline-none px-3 py-1.5 text-sm
 ${hasError?"focus:ring-red-500  border-red-300 focus:border-red-500" : "focus:ring-blue-300 focus:border-blue-500 border-gray-300"}`}/>
}

export default RegisterInput;