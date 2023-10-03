

const LoginInput =({onChange,value,placeholder,type="text"})=>{
    return  <input onChange={onChange} value={value} type={type} placeholder={placeholder} 
    className="block w-full rounded-md py-3 
    outline-none border
     border-gray-300 focus:ring-1-blue-300
      focus:border-blue-500"/>

}

export default LoginInput