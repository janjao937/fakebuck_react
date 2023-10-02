import { Link } from "react-router-dom";
import {FacebookIcon} from "../icon/Icon";
import Menu from "./Menu";

export default function Header(){
    return (
    <header className="grid grid-cols-3 px-4 bg-white shadow-lg sticky top-0">
        <div className="py-2 justify-self-start">
            <Link to ="/">
            <FacebookIcon/>
            </Link>
        </div>
        
        <Menu/>
        
        {/* <div>dropdown</div> */}
    </header>)
}