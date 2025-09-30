import { Link } from "react-router-dom"
import { Icons } from "./Icon/Icon"
import {HeaderLinks} from "../../core/contence/HeaderLinks"

function Header (){
    return(
        <>
            <div className="flex justify-between items-center bg-white p-5">
                <div className="flex gap-2">
                  <button className="hedearButtons">ثبت آگهی</button>
                  <button className="hedearButtons">ورود</button>
                </div>
                <div className="flex items-center">
                    {
                        HeaderLinks.map((item,index)=>(
                           <Link to="" key={index} className=" text-gray-800 hedearButtons">{item}</Link>
                      ))
                    }
                    <div className="ps-4">
                       <Icons icon={'saghfinooLogo'} />
                    </div>
                </div>    
            </div>
        </>
    )
}

export default Header