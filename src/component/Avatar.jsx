import defaultImg from "../assets/avatar.jpg";

const Avatar =({className="h-10",src})=>{

    const defaultClass = "rounded-full aspect-square";
    const classes = defaultClass+" "+className;

    return <img className={classes} src={src || defaultImg} alt="user"/>
}
export default Avatar;