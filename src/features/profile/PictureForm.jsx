import { useRef } from "react";
import FormButton from "./FormButton";
import { useState } from "react";

const PictureForm = ({ children, title }) => {
    const inputElement = useRef(null);
    const [file,setFile] = useState(null);
    
    file&&console.log(URL.createObjectURL(file));

  return (
    <div>
        {/* <input onChange={(e)=>console.dir(e.target.files)} type="file" className="hidden" ref={inputElement} multiple/> multiple = เลือกได้หลายไฟล์*/}
        
        <input onChange={(e)=>{
            // console.log(e.target.files);

            if(e.target.files[0]){

                setFile(e.target.files[0]);
            }
        }} type="file" className="hidden" ref={inputElement} />

      <div className="flex justify-between items-center">
        <h5 className="text-xl font-bold">{title}</h5>

        <div>
            {file&&<>
                   <FormButton  onClick={()=>{}}>Save</FormButton>
                   <FormButton  onClick={()=>{
                    inputElement.current.value=""
                    setFile(null)
                    }}>Delete</FormButton>
            </>}
       
          <FormButton  onClick={()=>{inputElement.current.click()}}>Edit</FormButton>
        </div>
      </div>
      <div className="flex justify-center">{children(file?URL.createObjectURL(file):undefined)}</div>
    </div>
  );

};

export default PictureForm;
