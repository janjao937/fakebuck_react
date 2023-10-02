const Modol=({onClose,isOpen,title,children,maxWidth=27})=>{//children prop เป็นชื่อพิเศษ

return(isOpen?
    <> 
        <div className="fixed inset-0 bg-white opacity-60 z-20"></div>

        <div className="fixed inset-0 z-30">

            <div className="flex justify-center items-center min-h-full p-4">
                <div className="bg-white rounded-lg w-full shadow-2xl border" style={{maxWidth:`${maxWidth}rem`}}>
                    <div className="flex justify-between p-4 text-xl">

                        <div className="invisible">X</div>

                        <div className="font-bold">{title}</div>
                        <div onClick={onClose} className="text-gray-500 cursor-pointer">X</div>
                    </div>

                    <div className="m-5">{children}</div>

                </div>
            </div>
        </div>
    </>
    :""
);
}

export default Modol;