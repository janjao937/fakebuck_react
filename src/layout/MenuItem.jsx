
import {Link} from "react-router-dom";
const MenuItem = ({currentPath,to,Icon})=>{
    return(
        <Link to ={to}>
            <div className="py-2 px-10 hover:bg-gray-200 rounded-lg">
                {/* <Icon className="fill-black"/> */}
                <Icon className={currentPath==to?`fill-black`:`fill-gray-600`}/>
            </div>
        
        </Link>
    )
}

export default MenuItem;