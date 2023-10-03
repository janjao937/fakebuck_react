const FormButton =({children,onClick})=>{
    return <button  onClick={onClick} className="px-3 py-1.5 hover:bg-gray-100 text-blue-600 rounded-md">{children}</button>
}
export default FormButton;