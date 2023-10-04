import bg from "../../assets/bg.jpg";
const CoverImage=({src})=>{
    return(
        <img className="flex items-center justify-center" src={src || bg}/>
    );
}

export default CoverImage;