const ActionButton=({children,onClick})=>{
    return (
       
        <button onClick={onClick} className="bg-gray-200 px-3 py-2 rounded-lg font-semibold hover:bg-gray-300 flex gap-2 items-center">
           {children}
        </button>
      )
}
export default ActionButton;