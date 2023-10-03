import bg from "../../assets/bg.jpg";
const CoverImage=({src=bg})=>{
    return(
        <img className="flex items-center justify-center" src={src}/>
    );
}

export default CoverImage;