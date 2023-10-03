import defaultImg from "../assets/avatar.jpg";

const Avatar =({className="h-10",src=defaultImg})=>{
    const defaultClass = "rounded-full aspect-square";
    const classes = defaultClass+" "+className;

    return <img className={classes} src={src} alt="user"/>
}
export default Avatar;