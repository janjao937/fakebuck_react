import MenuItem from "./MenuItem";
import { HouseIcon,UserGroupIcon } from "../icon/Icon";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const menu = [
    {to:"/",Icon:HouseIcon},
    {to:"/friend",Icon:UserGroupIcon}
]

const Menu =()=>{
    const location = useLocation();
    useEffect(()=>{
        // console.log(location.pathname);
    },[location]);

    return (
    <nav className="flex justify-center items-center gap-2">
        {/* <MenuItem Icon ={HouseIcon} to="/"/>
        <MenuItem Icon={UserGroupIcon} to="/friend"/> */}
        {menu.map((e,index)=><MenuItem currentPath={location.pathname} key={index} Icon={e.Icon} to ={e.to}/>)}
    </nav>
    
    )}

export default Menu;